import type { DevframeNodeContext, DevframeScopedNodeContext } from 'devframe'
import { defineRpcFunction } from 'devframe'
import { z } from 'zod/v4'
import type { PdfRenderAllResult, PdfTemplatesProvider, TemplateWatchEvent, TemplatesRevision } from './types.js'

export type ComarkPdfRpcOptions = {
  id: string
  provider: PdfTemplatesProvider
}

const templateIdArgs = z.object({
  templateId: z.string().min(1),
  locale: z.string().optional(),
})

const renderArgs = z.object({
  templateId: z.string().min(1),
  unit: z.string().optional(),
  locale: z.string().optional(),
  input: z.record(z.string(), z.unknown()).optional(),
})

const diagnosticsSchema = z.object({
  errors: z.array(z.string()),
  warnings: z.array(z.string()),
})

const describeResult = z.union([
  z.object({
    ok: z.literal(true),
    templateId: z.string(),
    unit: z.object({
      title: z.string(),
      required: z.boolean(),
      options: z.array(z.object({ value: z.string(), label: z.string() })),
    }).nullable().optional(),
    previewUnit: z.string().nullable().optional(),
    schema: z.object({
      type: z.literal('object'),
      properties: z.record(z.string(), z.unknown()),
      required: z.array(z.string()),
    }),
    sample: z.record(z.string(), z.unknown()),
    openUrl: z.string().nullable().optional(),
    source: z.string().nullable().optional(),
    sourcePath: z.string().nullable().optional(),
    locales: z.array(z.string()).optional(),
    locale: z.string().optional(),
  }),
  z.object({
    ok: z.literal(false),
    error: z.string(),
  }),
])

const renderResult = z.object({
  ok: z.boolean(),
  pdfBase64: z.string().optional(),
  error: z.string().optional(),
  diagnostics: diagnosticsSchema,
})

const INITIAL_REVISION: TemplatesRevision = {
  n: 0,
  templateId: null,
  locale: null,
  relist: false,
}

const WATCH_DEBOUNCE_MS = 80

const bindTemplateWatch = async (
  scoped: DevframeScopedNodeContext,
  watch: NonNullable<PdfTemplatesProvider['watch']>,
): Promise<void> => {
  const revision = await scoped.rpc.sharedState<TemplatesRevision>('templates-revision', {
    initialValue: INITIAL_REVISION,
  })

  let timer: ReturnType<typeof setTimeout> | undefined
  let pending: TemplateWatchEvent = {}
  let pendingRelist = false

  const flush = () => {
    revision.mutate((draft: TemplatesRevision) => {
      draft.n += 1
      draft.templateId = pending.templateId ?? null
      draft.locale = pending.locale ?? null
      draft.relist = pendingRelist
    })
    pending = {}
    pendingRelist = false
  }

  await watch((event) => {
    if (!event.templateId) pendingRelist = true
    else if (pending.templateId && pending.templateId !== event.templateId) pendingRelist = true
    pending = event
    clearTimeout(timer)
    timer = setTimeout(flush, WATCH_DEBOUNCE_MS)
  })
}

const failed = (error: unknown): { ok: false, error: string, diagnostics: { errors: string[], warnings: string[] } } => {
  const message = error instanceof Error ? error.message : String(error)
  return {
    ok: false,
    error: message,
    diagnostics: { errors: [message], warnings: [] },
  }
}

const renderAllFromProvider = async (provider: PdfTemplatesProvider): Promise<PdfRenderAllResult[]> => {
  if (provider.renderAll) return provider.renderAll()

  const templates = await provider.list()
  const results: PdfRenderAllResult[] = []
  const limit = 3
  const queue = [...templates]

  const workers = Array.from({ length: Math.min(limit, queue.length) || 1 }, async () => {
    while (queue.length) {
      const template = queue.shift()
      if (!template) return
      try {
        const description = await provider.describe({ templateId: template.id })
        if (!description.ok) {
          results.push({
            id: template.id,
            ok: false,
            diagnostics: { errors: [description.error], warnings: [] },
          })
          continue
        }
        const result = await provider.render({
          templateId: template.id,
          unit: description.previewUnit ?? description.unit?.options[0]?.value,
          input: description.sample,
        })
        results.push({
          id: template.id,
          ok: result.ok,
          diagnostics: result.diagnostics,
        })
      }
      catch (error) {
        results.push({
          id: template.id,
          ok: false,
          diagnostics: { errors: [error instanceof Error ? error.message : String(error)], warnings: [] },
        })
      }
    }
  })

  await Promise.all(workers)
  return results
}

export const registerComarkPdfRpc = async (ctx: DevframeNodeContext, options: ComarkPdfRpcOptions): Promise<void> => {
  const scoped = ctx.scope(options.id)
  const { provider } = options

  await scoped.rpc.sharedState('templates-revision', {
    initialValue: INITIAL_REVISION,
  })

  scoped.rpc.register(defineRpcFunction({
    name: 'list-templates',
    type: 'query',
    jsonSerializable: true,
    handler: () => provider.list(),
  }), true)

  scoped.rpc.register(defineRpcFunction({
    name: 'describe-template',
    type: 'query',
    jsonSerializable: true,
    args: [templateIdArgs],
    returns: describeResult,
    setup: () => ({
      handler: async ({ templateId, locale }) => provider.describe({ templateId, locale }),
    }),
  }), true)

  scoped.rpc.register(defineRpcFunction({
    name: 'render-template',
    type: 'action',
    jsonSerializable: true,
    args: [renderArgs],
    returns: renderResult,
    setup: () => ({
      handler: async (args) => {
        try {
          return await provider.render(args)
        }
        catch (error) {
          return failed(error)
        }
      },
    }),
  }), true)

  scoped.rpc.register(defineRpcFunction({
    name: 'render-all',
    type: 'action',
    jsonSerializable: true,
    handler: () => renderAllFromProvider(provider),
  }), true)

  if (ctx.mode === 'dev' && provider.watch) {
    await bindTemplateWatch(scoped, provider.watch)
  }
}
