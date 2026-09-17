import type { DevframeNodeContext } from 'devframe'
import { spawn } from 'node:child_process'
import * as fs from 'node:fs'
import * as path from 'node:path'
import { defineRpcFunction } from 'devframe'
import { z } from 'zod/v4'
import { detectRunCommand, formatRunCommand, type RunCommand } from './runCommand.js'
import type { ScriptAllowlistEntry, ScriptEntry } from './types.js'

export type ScriptsRpcOptions = {
  id: string
  cwd?: string
  packageJsonPath?: string
  scripts?: ScriptAllowlistEntry[]
  include?: string[]
  exclude?: string[]
  includeLifecycle?: boolean
  runCommand?: RunCommand
  timeoutMs?: number
}

const DEFAULT_TIMEOUT_MS = 600_000

const isLifecycleScript = (id: string): boolean =>
  id.startsWith('pre') || id.startsWith('post')

const matchesPattern = (id: string, patterns: string[]): boolean =>
  patterns.some((pattern) => {
    if (pattern.includes('*')) {
      const regex = new RegExp(`^${pattern.replace(/\*/g, '.*')}$`)
      return regex.test(id)
    }
    return id === pattern
  })

const readPackageJson = (packageJsonPath: string): {
  scripts: Record<string, string>
  packageManager?: string
} => {
  const raw = fs.readFileSync(packageJsonPath, 'utf8')
  const parsed = JSON.parse(raw) as {
    scripts?: Record<string, string>
    packageManager?: string
  }
  return {
    scripts: parsed.scripts ?? {},
    packageManager: parsed.packageManager,
  }
}

const buildScriptList = (options: ScriptsRpcOptions): ScriptEntry[] => {
  const packageJsonPath = options.packageJsonPath ?? path.join(options.cwd ?? process.cwd(), 'package.json')
  const { scripts, packageManager } = readPackageJson(packageJsonPath)
  const runCommand = options.runCommand ?? detectRunCommand(packageManager)

  if (options.scripts?.length) {
    return options.scripts
      .filter(entry => typeof scripts[entry.id] === 'string' || entry.command)
      .map((entry) => {
        const command = entry.command ?? formatRunCommand(runCommand, entry.id)
        return {
          id: entry.id,
          description: entry.description ?? scripts[entry.id] ?? '',
          command,
        }
      })
  }

  return Object.entries(scripts)
    .filter(([id]) => {
      if (!options.includeLifecycle && isLifecycleScript(id)) return false
      if (options.include?.length && !matchesPattern(id, options.include)) return false
      if (options.exclude?.length && matchesPattern(id, options.exclude)) return false
      return true
    })
    .map(([id, description]) => ({
      id,
      description,
      command: formatRunCommand(runCommand, id),
    }))
    .sort((a, b) => a.id.localeCompare(b.id))
}

const notFound = (message: string): never => {
  const error = new Error(message)
  error.name = 'NotFound'
  throw error
}

const runScript = (
  options: ScriptsRpcOptions,
  id: string,
): Promise<{
  id: string
  ok: boolean
  code: number | null
  stdout: string
  stderr: string
  durationMs: number
}> => {
  const entries = buildScriptList(options)
  const entry = entries.find(item => item.id === id)
  if (!entry) notFound(`Unknown script: ${id}`)

  const packageJsonPath = options.packageJsonPath ?? path.join(options.cwd ?? process.cwd(), 'package.json')
  const { packageManager } = readPackageJson(packageJsonPath)
  const runCommand = options.runCommand ?? detectRunCommand(packageManager)
  const cwd = options.cwd ?? process.cwd()
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS

  return new Promise((resolve, reject) => {
    const started = Date.now()
    const child = spawn(runCommand[0], [runCommand[1], id], {
      cwd,
      env: process.env,
    })
    let stdout = ''
    let stderr = ''
    child.stdout.on('data', (chunk: Buffer | string) => {
      stdout += String(chunk)
    })
    child.stderr.on('data', (chunk: Buffer | string) => {
      stderr += String(chunk)
    })
    const timer = setTimeout(() => {
      child.kill('SIGTERM')
    }, timeoutMs)
    child.once('error', (error) => {
      clearTimeout(timer)
      reject(error)
    })
    child.once('close', (code) => {
      clearTimeout(timer)
      resolve({
        id,
        ok: code === 0,
        code,
        stdout,
        stderr,
        durationMs: Date.now() - started,
      })
    })
  })
}

export const registerScriptsRpc = (ctx: DevframeNodeContext, options: ScriptsRpcOptions): void => {
  const scoped = ctx.scope(options.id)

  scoped.rpc.register(defineRpcFunction({
    name: 'list-scripts',
    type: 'query',
    jsonSerializable: true,
    handler: () => buildScriptList(options),
  }))

  scoped.rpc.register(defineRpcFunction({
    name: 'run-script',
    type: 'action',
    jsonSerializable: true,
    args: [z.object({ id: z.string() })],
    returns: z.object({
      id: z.string(),
      ok: z.boolean(),
      code: z.number().nullable(),
      stdout: z.string(),
      stderr: z.string(),
      durationMs: z.number(),
    }),
    setup: () => ({
      handler: async ({ id }) => runScript(options, id),
    }),
  }))
}
