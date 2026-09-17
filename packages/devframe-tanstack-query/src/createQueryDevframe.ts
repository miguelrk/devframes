import { defineDevframe } from 'devframe'
import pkg from '../package.json' with { type: 'json' }
import { prepareClientAssets } from './clientAssets.js'
import type { DevframeBaseOptions } from './types.js'

export const DEFAULT_QUERY_ID = 'devframe-tanstack-query'
export const DEFAULT_QUERY_GROUP_ID = 'devframes'
export const DEFAULT_QUERY_CLIENT_KEY = '__TANSTACK_QUERY_CLIENT__'

export type CreateQueryDevframeOptions = DevframeBaseOptions & {
  clientKey?: string
}

export const createQueryDevframe = async (options: CreateQueryDevframeOptions = {}) => {
  const id = options.id ?? DEFAULT_QUERY_ID
  const groupId = options.groupId ?? DEFAULT_QUERY_GROUP_ID
  const clientKey = options.clientKey ?? DEFAULT_QUERY_CLIENT_KEY
  const clientAssets = options.clientAssets
    ?? await prepareClientAssets({ id, clientKey }, id)

  return defineDevframe({
    id,
    name: options.name ?? 'TanStack Query',
    version: pkg.version,
    packageName: pkg.name,
    importMetaUrl: import.meta.url,
    homepage: options.homepage ?? 'https://github.com/miguelrk/devframes',
    description: options.description ?? 'Inspect TanStack Query cache, status, and mutations in this tab.',
    icon: options.icon ?? 'ph:palm-tree-duotone',
    clientAssets,
    dock: { groupId },
    capabilities: { build: false },
    setup: () => {},
  })
}
