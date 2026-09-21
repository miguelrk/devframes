import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import type { EmailTemplatesProvider } from './types.js'

export type WriteTemplateEmailsOptions = {
  provider: EmailTemplatesProvider
  outDir: string
  onlyIds?: string[]
  concurrency?: number
  log?: (line: string) => void
}

const DEFAULT_LOCALE = 'es'

const fileNameFor = (id: string, locale?: string): string =>
  locale ? `${id.replaceAll('/', '-')}.${locale}.html` : `${id.replaceAll('/', '-')}.html`

const localesFor = (description: { locales?: string[], locale?: string }): string[] => {
  if (description.locales?.length) return description.locales
  if (description.locale) return [description.locale]
  return [DEFAULT_LOCALE]
}

/**
 * Render every host template (or a subset) to `{outDir}/{id}.{locale}.html`.
 * Writes `{id}.html` as the default-locale (`es`) alias.
 * Uses `describe` sample + preview unit, then `render`.
 */
export const writeTemplateEmails = async (options: WriteTemplateEmailsOptions): Promise<{
  ok: number
  fail: number
  paths: string[]
}> => {
  const log = options.log ?? (() => {})
  const templates = await options.provider.list()
  const onlyIds = options.onlyIds?.length ? new Set(options.onlyIds) : null
  const selected = onlyIds ? templates.filter(t => onlyIds.has(t.id)) : templates

  if (onlyIds) {
    for (const id of onlyIds) {
      if (!selected.some(t => t.id === id)) {
        throw new Error(`Unknown template: ${id}`)
      }
    }
  }

  mkdirSync(options.outDir, { recursive: true })

  let ok = 0
  let fail = 0
  const paths: string[] = []
  const queue = [...selected]
  const limit = Math.max(1, options.concurrency ?? 3)

  const workers = Array.from({ length: Math.min(limit, queue.length) || 1 }, async () => {
    while (queue.length) {
      const template = queue.shift()
      if (!template) return

      try {
        const description = await options.provider.describe({ templateId: template.id })
        if (!description.ok) throw new Error(description.error)

        const locales = localesFor(description)
        for (const locale of locales) {
          const localeDescription = locale === (description.locale ?? DEFAULT_LOCALE)
            ? description
            : await options.provider.describe({ templateId: template.id, locale })
          if (!localeDescription.ok) throw new Error(localeDescription.error)

          const result = await options.provider.render({
            templateId: template.id,
            locale,
            unit: localeDescription.previewUnit ?? localeDescription.unit?.options[0]?.value,
            input: Object.keys(localeDescription.sample).length ? localeDescription.sample : undefined,
          })

          if (!result.ok || !result.html) {
            fail++
            const reason = result.error ?? (result.diagnostics.errors.join('; ') || 'render failed')
            log(`FAIL ${template.id} (${locale}): ${reason}`)
            continue
          }

          const localePath = join(options.outDir, fileNameFor(template.id, locale))
          writeFileSync(localePath, result.html)
          paths.push(localePath)

          if (locale === DEFAULT_LOCALE) {
            const aliasPath = join(options.outDir, fileNameFor(template.id))
            writeFileSync(aliasPath, result.html)
            paths.push(aliasPath)
          }

          if (result.diagnostics.errors.length) {
            fail++
            log(`WARN ${template.id} (${locale}): ${result.diagnostics.errors.join('; ')}`)
          }
          else {
            ok++
          }

          const warnNote = result.diagnostics.warnings.length
            ? ` (${result.diagnostics.warnings.length} layout warnings)`
            : ''
          const subjectNote = result.subject ? ` subject=${JSON.stringify(result.subject)}` : ''
          log(`Wrote ${localePath} (${Buffer.byteLength(result.html)} bytes)${subjectNote}${warnNote}`)
        }
      }
      catch (error) {
        fail++
        log(`FAIL ${template.id}: ${error instanceof Error ? error.message : error}`)
      }
    }
  })

  await Promise.all(workers)
  return { ok, fail, paths }
}
