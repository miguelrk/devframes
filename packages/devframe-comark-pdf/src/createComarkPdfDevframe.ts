import { defineDevframe } from 'devframe'
import pkg from '../package.json' with { type: 'json' }
import { prepareClientAssets } from './clientAssets.js'
import { registerComarkPdfRpc } from './rpc.js'
import type { DevframeBaseOptions, PdfTemplatesProvider } from './types.js'

export const DEFAULT_COMARK_PDF_ID = 'devframe-comark-pdf'
export const DEFAULT_COMARK_PDF_GROUP_ID = 'devframes'

export type CreateComarkPdfDevframeOptions = DevframeBaseOptions & {
  provider: PdfTemplatesProvider
}

export const createComarkPdfDevframe = async (options: CreateComarkPdfDevframeOptions) => {
  const id = options.id ?? DEFAULT_COMARK_PDF_ID
  const groupId = options.groupId ?? DEFAULT_COMARK_PDF_GROUP_ID
  const clientAssets = options.clientAssets
    ?? await prepareClientAssets({ id }, id)

  return defineDevframe({
    id,
    name: options.name ?? 'Comark PDF',
    version: pkg.version,
    packageName: pkg.name,
    importMetaUrl: import.meta.url,
    homepage: options.homepage ?? 'https://github.com/miguelrk/devframes',
    description: options.description
      ?? 'Render and inspect host Comark PDF templates with live diagnostics.',
    icon: options.icon ?? 'ph:file-pdf-duotone',
    clientAssets,
    dock: { groupId },
    capabilities: { build: false },
    setup: (ctx) => {
      registerComarkPdfRpc(ctx, { id, provider: options.provider })
    },
  })
}

export default createComarkPdfDevframe
