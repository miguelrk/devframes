export type DevframeBaseOptions = {
  id?: string
  groupId?: string
  name?: string
  icon?: string
  description?: string
}

export type ProcessSpec = {
  command: string
  args: string[]
  env?: Record<string, string>
}

export type McpTransport = {
  id: string
  label: string
  description?: string
  process: ProcessSpec
}

export type McpStdioOptions = {
  label?: string
  description?: string
  command?: string
  args: string[]
  env?: Record<string, string>
}

export type McpHttpOptions = {
  label?: string
  description?: string
  serverUrl: string
  headers?: string[]
  command?: string
  extraArgs?: string[]
  env?: Record<string, string>
}
