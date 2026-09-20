import * as esbuild from 'esbuild'
import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(root, 'dist/client')

fs.mkdirSync(outDir, { recursive: true })
fs.copyFileSync(path.join(root, 'client/index.html'), path.join(outDir, 'index.html'))

await esbuild.build({
  entryPoints: [path.join(root, 'client/hub-client.ts')],
  outfile: path.join(outDir, 'hub-client.js'),
  bundle: true,
  format: 'iife',
  platform: 'browser',
  target: 'es2022',
  minify: true,
  logLevel: 'info',
})
