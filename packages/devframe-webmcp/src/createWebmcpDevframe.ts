import { defineDevframe } from 'devframe'
import pkg from '../package.json' with { type: 'json' }
import { prepareClientAssets } from './clientAssets.js'
import { DEFAULT_WEBMCP_REGISTRY_KEY } from './publishWebmcpRegistry.js'
import type { DevframeBaseOptions } from './types.js'

export const DEFAULT_WEBMCP_ID = 'devframe-webmcp'
export const DEFAULT_WEBMCP_GROUP_ID = 'devframes'

export type CreateWebmcpDevframeOptions = DevframeBaseOptions & {
  registryKey?: string
}

export const createWebmcpDevframe = async (options: CreateWebmcpDevframeOptions = {}) => {
  const id = options.id ?? DEFAULT_WEBMCP_ID
  const groupId = options.groupId ?? DEFAULT_WEBMCP_GROUP_ID
  const registryKey = options.registryKey ?? DEFAULT_WEBMCP_REGISTRY_KEY
  const clientAssets = options.clientAssets
    ?? await prepareClientAssets({ id, registryKey }, id)

  return defineDevframe({
    id,
    name: options.name ?? 'WebMCP',
    version: pkg.version,
    packageName: pkg.name,
    importMetaUrl: import.meta.url,
    homepage: options.homepage ?? 'https://github.com/miguelrk/devframes',
    description: options.description ?? 'Inspect tools registered for document.modelContext in this tab.',
    icon: options.icon ?? 'ph:robot-duotone',
    clientAssets,
    dock: { groupId },
    capabilities: { build: false },
    setup: () => {},
  })
}
