import type { WebmcpRegistryPublisher, WebmcpSnapshot } from './types.js'

export const DEFAULT_WEBMCP_REGISTRY_KEY = '__DEVFRAME_WEBMCP_REGISTRY__'

export type PublishWebmcpRegistryOptions = {
  key?: string
}

export const publishWebmcpRegistry = (
  getSnapshot: () => WebmcpSnapshot,
  options?: PublishWebmcpRegistryOptions,
): WebmcpRegistryPublisher => {
  const key = options?.key ?? DEFAULT_WEBMCP_REGISTRY_KEY
  const publisher: WebmcpRegistryPublisher = { getSnapshot }
  Object.assign(window, { [key]: publisher })
  return publisher
}
