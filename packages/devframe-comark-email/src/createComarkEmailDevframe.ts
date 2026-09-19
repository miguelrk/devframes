import { defineDevframe } from 'devframe'
import pkg from '../package.json' with { type: 'json' }
import { prepareClientAssets } from './clientAssets.js'
import { registerComarkEmailRpc } from './rpc.js'
import type { DevframeBaseOptions, EmailTemplatesProvider } from './types.js'

export const DEFAULT_COMARK_EMAIL_ID = 'devframe-comark-email'
export const DEFAULT_COMARK_EMAIL_GROUP_ID = 'devframes'

export type CreateComarkEmailDevframeOptions = DevframeBaseOptions & {
  provider: EmailTemplatesProvider
}

export const createComarkEmailDevframe = async (options: CreateComarkEmailDevframeOptions) => {
  const id = options.id ?? DEFAULT_COMARK_EMAIL_ID
  const groupId = options.groupId ?? DEFAULT_COMARK_EMAIL_GROUP_ID
  const clientAssets = options.clientAssets
    ?? await prepareClientAssets({ id }, id)

  return defineDevframe({
    id,
    name: options.name ?? 'Comark Email',
    version: pkg.version,
    packageName: pkg.name,
    importMetaUrl: import.meta.url,
    homepage: options.homepage ?? 'https://github.com/miguelrk/devframes',
    description: options.description
      ?? 'Render and inspect host Comark email templates with live diagnostics.',
    icon: options.icon ?? 'ph:envelope-simple-duotone',
    clientAssets,
    dock: { groupId },
    capabilities: { build: false },
    setup: (ctx) => {
      registerComarkEmailRpc(ctx, { id, provider: options.provider })
    },
  })
}

export default createComarkEmailDevframe
