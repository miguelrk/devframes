import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import type { PdfTemplatesProvider } from './types.js'

export type WriteTemplatePdfsOptions = {
  provider: PdfTemplatesProvider
  outDir: string
  onlyIds?: string[]
  concurrency?: number
  log?: (line: string) => void
}

const fileNameFor = (id: string): string =>
  `${id.replaceAll('/', '-')}.pdf`

/**
 * Render every host template (or a subset) to `{outDir}/{id}.pdf`.
 * Uses `describe` sample + preview unit, then `render`.
 */
export const writeTemplatePdfs = async (options: WriteTemplatePdfsOptions): Promise<{
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

        const result = await options.provider.render({
          templateId: template.id,
          unit: description.previewUnit ?? description.unit?.options[0]?.value,
          input: Object.keys(description.sample).length ? description.sample : undefined,
        })

        if (!result.ok || !result.pdfBase64) {
          fail++
          const reason = result.error ?? (result.diagnostics.errors.join('; ') || 'render failed')
          log(`FAIL ${template.id}: ${reason}`)
          continue
        }

        const outPath = join(options.outDir, fileNameFor(template.id))
        const bytes = Buffer.from(result.pdfBase64, 'base64')
        writeFileSync(outPath, bytes)
        paths.push(outPath)

        if (result.diagnostics.errors.length) {
          fail++
          log(`WARN ${template.id}: ${result.diagnostics.errors.join('; ')}`)
        }
        else {
          ok++
        }

        const warnNote = result.diagnostics.warnings.length
          ? ` (${result.diagnostics.warnings.length} layout warnings)`
          : ''
        log(`Wrote ${outPath} (${bytes.length} bytes)${warnNote}`)
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
