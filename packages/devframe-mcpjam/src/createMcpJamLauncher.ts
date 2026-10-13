import type { Plugin } from 'vite'
import { createProcessLauncher } from '@vitejs/devtools-kit/node'
import { waitForUrl } from './waitForUrl.js'
import type {
  DevframeBaseOptions,
  McpJamHttpOptions,
  McpJamStdioOptions,
  McpJamTransport,
} from './types.js'

export const DEFAULT_MCPJAM_ID = 'devframe-mcpjam'
export const DEFAULT_MCPJAM_GROUP_ID = 'devframes'
export const DEFAULT_MCPJAM_HOSTED_URL = 'https://app.mcpjam.com'
/** Default local port — 6274 is reserved for the official MCP Inspector devframe. */
const DEFAULT_INSPECTOR_PORT = 6275
const DEFAULT_INSPECTOR_PACKAGE = '@mcpjam/inspector'
/** npm bin name — not the package name (`pnpm exec @scope/pkg` is invalid). */
const DEFAULT_INSPECTOR_BIN = 'inspector'

export type CreateMcpJamLauncherOptions = DevframeBaseOptions & {
  cwd?: string
  inspectorPort?: number
  inspectorPackage?: string
  inspectorBin?: string
  hostedUrl?: string
  transports?: McpJamTransport[]
  stdio?: McpJamStdioOptions
  http?: McpJamHttpOptions
}

const inspectorBaseArgs = (
  inspectorPackage: string,
  inspectorBin: string,
  inspectorPort: number,
): string[] => [
  'exec',
  '--package',
  inspectorPackage,
  inspectorBin,
  '--port',
  String(inspectorPort),
]

const buildTransports = (options: CreateMcpJamLauncherOptions): McpJamTransport[] => {
  if (options.transports?.length) return options.transports

  const inspectorPackage = options.inspectorPackage ?? DEFAULT_INSPECTOR_PACKAGE
  const inspectorBin = options.inspectorBin ?? DEFAULT_INSPECTOR_BIN
  const inspectorPort = options.inspectorPort ?? DEFAULT_INSPECTOR_PORT
  const transports: McpJamTransport[] = []

  if (options.stdio) {
    const command = options.stdio.command ?? 'pnpm'
    transports.push({
      id: 'stdio',
      label: options.stdio.label ?? 'STDIO',
      description: options.stdio.description,
      process: {
        command,
        args: [
          ...inspectorBaseArgs(inspectorPackage, inspectorBin, inspectorPort),
          ...options.stdio.args,
        ],
        env: options.stdio.env,
      },
    })
  }

  if (options.http) {
    const command = options.http.command ?? 'pnpm'
    transports.push({
      id: 'http',
      label: options.http.label ?? 'HTTP',
      description: options.http.description,
      process: {
        command,
        args: [
          ...inspectorBaseArgs(inspectorPackage, inspectorBin, inspectorPort),
          '--url',
          options.http.serverUrl,
          ...(options.http.extraArgs ?? []),
        ],
        env: options.http.env,
      },
    })
  }

  if (!transports.length) {
    throw new Error('createMcpJamLauncher requires transports or stdio/http options')
  }

  return transports
}

export const createMcpJamLauncher = (
  options: CreateMcpJamLauncherOptions,
): Plugin => {
  const transports = buildTransports(options)
  const cwd = options.cwd ?? process.cwd()
  const inspectorPort = options.inspectorPort ?? DEFAULT_INSPECTOR_PORT
  const inspectorUrl = `http://127.0.0.1:${inspectorPort}`
  const hostedHint = options.hostedUrl ?? DEFAULT_MCPJAM_HOSTED_URL

  return createProcessLauncher({
    id: options.id ?? DEFAULT_MCPJAM_ID,
    title: options.name ?? 'MCPJam',
    icon: options.icon ?? 'ph:flask-duotone',
    groupId: options.groupId ?? DEFAULT_MCPJAM_GROUP_ID,
    description: options.description
      ?? `MCPJam Inspector (evals, host compat, playground). Pick a transport, then Launch. Hosted (HTTPS-only): ${hostedHint}.`,
    roots: transports.length > 1
      ? transports.map(transport => ({
          value: transport.id,
          label: transport.label,
          description: transport.description,
        }))
      : undefined,
    process: ({ root }) => {
      const transport = transports.find(item => item.id === root) ?? transports[0]
      if (!transport) {
        throw new Error('No MCPJam transport configured')
      }
      return {
        command: transport.process.command,
        args: transport.process.args,
        cwd,
        env: {
          ...Object.fromEntries(
            Object.entries(process.env).filter((entry): entry is [string, string] => entry[1] != null),
          ),
          MCPJAM_INSPECTOR_FRONTEND_URL: inspectorUrl,
          ...transport.process.env,
        },
      }
    },
    serve: {
      onReady: async () => {
        await waitForUrl(inspectorUrl)
        return inspectorUrl
      },
    },
  })
}
