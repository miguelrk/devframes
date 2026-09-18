export type DevframeBaseOptions = {
  id?: string
  groupId?: string
  name?: string
  icon?: string
  description?: string
  homepage?: string
  clientAssets?: string
}

export type WebmcpToolAnnotations = {
  readOnlyHint?: boolean
  untrustedContentHint?: boolean
  consequentialHint?: boolean
}

export type WebmcpToolRow = {
  name: string
  description: string
  inputSchema?: Record<string, unknown>
  annotations?: WebmcpToolAnnotations
  type?: string
  subtype?: string
  scope?: string
  needsApproval?: boolean
  icon?: string
  color?: string
  group?: string
  scopeLabel?: string
  scopeIcon?: string
  scopeColor?: string
}

export type WebmcpSyncStatus = {
  supported: boolean
  registered: number
  failed: number
  busy?: boolean
  lastRun?: 'success' | 'error'
  lastError?: string
}

export type WebmcpSnapshot = {
  version?: number
  status?: WebmcpSyncStatus
  tools: WebmcpToolRow[]
}

export type WebmcpRegistryPublisher = {
  getSnapshot: () => WebmcpSnapshot
}
