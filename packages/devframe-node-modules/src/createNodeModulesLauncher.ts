import type { Plugin } from 'vite'
import { createProcessLauncher } from '@vitejs/devtools-kit/node'
import { waitForUrl } from './waitForUrl.js'
import type { DevframeBaseOptions, ProcessSpec } from './types.js'

export const DEFAULT_NODE_MODULES_ID = 'devframe-node-modules'
export const DEFAULT_NODE_MODULES_GROUP_ID = 'devframes'
const DEFAULT_PORT = 9999

export type CreateNodeModulesLauncherOptions = DevframeBaseOptions & {
  cwd?: string
  port?: number
  extraArgs?: string[]
  command?: ProcessSpec
}

const defaultCommand = (port: number, extraArgs: string[]): ProcessSpec => ({
  command: 'pnpm',
  args: [
    'exec',
    'node-modules-inspector',
    '--host',
    '127.0.0.1',
    '--port',
    String(port),
    '--no-open',
    ...extraArgs,
  ],
})

export const createNodeModulesLauncher = (
  options: CreateNodeModulesLauncherOptions = {},
): Plugin => {
  const cwd = options.cwd ?? process.cwd()
  const port = options.port ?? DEFAULT_PORT
  const extraArgs = options.extraArgs ?? []
  const modulesUrl = `http://127.0.0.1:${port}`
  const processSpec = options.command ?? defaultCommand(port, extraArgs)

  return createProcessLauncher({
    id: options.id ?? DEFAULT_NODE_MODULES_ID,
    title: options.name ?? 'Node Modules Inspector',
    icon: options.icon ?? 'ph:tree-structure-duotone',
    groupId: options.groupId ?? DEFAULT_NODE_MODULES_GROUP_ID,
    description: options.description ?? 'node-modules-inspector for this repo.',
    process: {
      command: processSpec.command,
      args: processSpec.args,
      cwd,
    },
    serve: {
      onReady: async () => {
        await waitForUrl(modulesUrl)
        return modulesUrl
      },
    },
  })
}
