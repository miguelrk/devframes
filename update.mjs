#!/usr/bin/env node

import { spawnSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'

const REPO = 'miguelrk/devframes'
const SPEC_PREFIX = `github:${REPO}`
const PACKAGE_JSON = 'package.json'
const refArg = process.argv.slice(2).find(arg => arg.startsWith('--ref='))
const REF = refArg?.slice(6) || process.env.DEVFRAMES_REF || 'main'

const isDevframesSpec = value =>
  typeof value === 'string' && value.startsWith(`${SPEC_PREFIX}#`)

const pathFromSpec = (value) => {
  const amp = value.indexOf('&path:')
  if (amp >= 0) return value.slice(amp + 6)
  const hash = value.indexOf('#path:')
  if (hash >= 0) return value.slice(hash + 6)
  throw new Error(`Missing path: in ${value}`)
}

const specFor = (sha, pkgPath) => `${SPEC_PREFIX}#${sha}&path:${pkgPath}`

const run = (command, args) => {
  const result = spawnSync(command, args, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  if (result.status !== 0) {
    const detail = [result.stderr, result.stdout].filter(Boolean).join('\n').trim()
    throw new Error(`${command} ${args.join(' ')} failed${detail ? `\n${detail}` : ''}`)
  }
  return result.stdout.trim()
}

const resolveRemoteSha = () => {
  const line = run('git', [
    'ls-remote',
    `https://github.com/${REPO}.git`,
    `refs/heads/${REF}`,
  ])
  const sha = line.split(/\s+/)[0]
  if (!/^[0-9a-f]{40}$/.test(sha)) {
    throw new Error(`Could not resolve ${REPO}#${REF} (got ${JSON.stringify(line)})`)
  }
  return sha
}

const collectSpecs = (pkg) => {
  const found = []
  for (const field of ['dependencies', 'devDependencies']) {
    const block = pkg[field]
    if (!block) continue
    for (const [name, value] of Object.entries(block)) {
      if (!isDevframesSpec(value)) continue
      found.push({ field, name, value, path: pathFromSpec(value) })
    }
  }
  return found
}

const pkg = JSON.parse(readFileSync(PACKAGE_JSON, 'utf8'))
const specs = collectSpecs(pkg)
if (!specs.length) throw new Error(`No ${SPEC_PREFIX}#… dependencies in ${PACKAGE_JSON}`)

const sha = resolveRemoteSha()

let changed = 0
for (const spec of specs) {
  const next = specFor(sha, spec.path)
  if (spec.value === next) continue
  pkg[spec.field][spec.name] = next
  changed++
  console.log(`${spec.name}: ${spec.value} → ${next}`)
}

if (changed === 0) {
  console.log(`All ${specs.length} ${REPO} docks already pin ${sha}`)
}
else {
  writeFileSync(PACKAGE_JSON, `${JSON.stringify(pkg, null, 2)}\n`)
}

console.log(`Installing ${REPO}@${sha.slice(0, 7)}…`)
const install = spawnSync('pnpm', ['install'], { stdio: 'inherit' })
process.exit(install.status ?? 1)
