import { defineDevframe } from 'devframe'
import pkg from '../package.json' with { type: 'json' }
import { prepareClientAssets } from './clientAssets.js'
import { registerScriptsRpc, type ScriptsRpcOptions } from './rpc.js'
import type { DevframeBaseOptions, ScriptAllowlistEntry } from './types.js'
import type { RunCommand } from './runCommand.js'

export const DEFAULT_SCRIPTS_ID = 'devframe-scripts'
export const DEFAULT_SCRIPTS_GROUP_ID = 'devframes'

export type CreateScriptsDevframeOptions = DevframeBaseOptions & {
  cwd?: string
  packageJsonPath?: string
  scripts?: ScriptAllowlistEntry[]
  include?: string[]
  exclude?: string[]
  includeLifecycle?: boolean
  runCommand?: RunCommand
  timeoutMs?: number
}

export const createScriptsDevframe = async (options: CreateScriptsDevframeOptions = {}) => {
  const id = options.id ?? DEFAULT_SCRIPTS_ID
  const groupId = options.groupId ?? DEFAULT_SCRIPTS_GROUP_ID
  const clientAssets = options.clientAssets
    ?? await prepareClientAssets({ id }, id)

  const rpcOptions: ScriptsRpcOptions = {
    id,
    cwd: options.cwd,
    packageJsonPath: options.packageJsonPath,
    scripts: options.scripts,
    include: options.include,
    exclude: options.exclude,
    includeLifecycle: options.includeLifecycle ?? false,
    runCommand: options.runCommand,
    timeoutMs: options.timeoutMs,
  }

  return defineDevframe({
    id,
    name: options.name ?? 'Scripts',
    version: pkg.version,
    packageName: pkg.name,
    importMetaUrl: import.meta.url,
    homepage: options.homepage ?? 'https://github.com/miguelrk/devframes',
    description: options.description ?? 'Browse and run package.json scripts.',
    icon: options.icon ?? 'ph:play-circle-duotone',
    clientAssets,
    dock: { groupId },
    capabilities: { build: false },
    setup: async (ctx) => {
      registerScriptsRpc(ctx, rpcOptions)
    },
  })
}
