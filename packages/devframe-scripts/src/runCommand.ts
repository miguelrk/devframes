export type RunCommand = readonly [string, string]

export const detectRunCommand = (packageManager?: string): RunCommand => {
  if (!packageManager) return ['pnpm', 'run']
  if (packageManager.includes('pnpm')) return ['pnpm', 'run']
  if (packageManager.includes('yarn')) return ['yarn', 'run']
  if (packageManager.includes('bun')) return ['bun', 'run']
  if (packageManager.includes('npm')) return ['npm', 'run']
  return ['pnpm', 'run']
}

export const formatRunCommand = (runCommand: RunCommand, scriptId: string): string =>
  `${runCommand[0]} ${runCommand[1]} ${scriptId}`
