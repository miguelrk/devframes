import type { Plugin } from 'vite'
import { createServer } from 'node:http'
import { createProcessLauncher } from '@vitejs/devtools-kit/node'
import { waitForUrl } from './waitForUrl.js'
import type { DevframeBaseOptions, ProcessSpec } from './types.js'

export const DEFAULT_DRIZZLE_STUDIO_ID = 'devframe-drizzle-studio'
export const DEFAULT_DRIZZLE_STUDIO_GROUP_ID = 'devframes'
const DEFAULT_API_PORT = 4983
const DEFAULT_UI_PROXY_PORT = 4984
const DEFAULT_UI_ORIGIN = 'https://local.drizzle.studio'

export type CreateDrizzleStudioLauncherOptions = DevframeBaseOptions & {
  cwd?: string
  apiPort?: number
  uiProxyPort?: number
  envFile?: string
  uiOrigin?: string
  proxy?: boolean
  command?: ProcessSpec
}

let studioUiProxyReady: Promise<string> | undefined

const studioPageUrl = (uiProxyPort: number) =>
  `http://127.0.0.1:${uiProxyPort}/?host=127.0.0.1&port=${uiProxyPort}`

const readRequestBody = async (req: AsyncIterable<Uint8Array | string>) => {
  const chunks: Buffer[] = []
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
  }
  return Buffer.concat(chunks)
}

const ensureStudioUiProxy = (
  uiProxyPort: number,
  uiOrigin: string,
  apiOrigin: string,
): Promise<string> => {
  if (studioUiProxyReady) return studioUiProxyReady

  const pageUrl = studioPageUrl(uiProxyPort)
  studioUiProxyReady = new Promise((resolve, reject) => {
    const server = createServer((req, res) => {
      void (async () => {
        try {
          const method = req.method ?? 'GET'
          const incoming = new URL(req.url ?? '/', pageUrl)
          const headers: Record<string, string> = {
            'cache-control': 'no-store',
            'cross-origin-resource-policy': 'cross-origin',
          }

          // Studio treats any HTTP 2xx on GET /init as a legacy kit and aborts.
          // https://local.drizzle.studio/init is the SPA and returns 200.
          if (method === 'GET' && incoming.pathname === '/init') {
            res.writeHead(404, { ...headers, 'content-type': 'text/plain; charset=utf-8' })
            res.end('not found')
            return
          }

          if (incoming.pathname.startsWith('/cdn-cgi/')) {
            res.writeHead(204, headers)
            res.end()
            return
          }

          const isApi = incoming.pathname === '/' && (method === 'POST' || method === 'OPTIONS')
          const target = isApi
            ? new URL(incoming.pathname + incoming.search, apiOrigin)
            : new URL(incoming.pathname + incoming.search, uiOrigin)
          const upstream = await fetch(target, {
            method: isApi ? method : 'GET',
            redirect: isApi ? 'manual' : 'follow',
            headers: {
              accept: req.headers.accept ?? '*/*',
              ...(req.headers['content-type']
                ? { 'content-type': String(req.headers['content-type']) }
                : {}),
            },
            body: isApi && method === 'POST' ? await readRequestBody(req) : undefined,
          })
          const contentType = upstream.headers.get('content-type')
          if (contentType) headers['content-type'] = contentType
          for (const name of [
            'access-control-allow-origin',
            'access-control-allow-methods',
            'access-control-allow-headers',
            'access-control-allow-private-network',
          ]) {
            const value = upstream.headers.get(name)
            if (value) headers[name] = value
          }
          res.writeHead(upstream.status, headers)
          res.end(Buffer.from(await upstream.arrayBuffer()))
        } catch (error) {
          if (!res.headersSent) {
            res.writeHead(502, { 'content-type': 'text/plain; charset=utf-8' })
          }
          res.end(error instanceof Error ? error.message : String(error))
        }
      })()
    })

    server.once('error', (error: NodeJS.ErrnoException) => {
      if (error.code === 'EADDRINUSE') {
        resolve(pageUrl)
        return
      }
      studioUiProxyReady = undefined
      reject(error)
    })
    server.listen(uiProxyPort, '127.0.0.1', () => {
      resolve(pageUrl)
    })
  })

  return studioUiProxyReady
}

const defaultCommand = (apiPort: number, envFile: string): ProcessSpec => ({
  command: 'pnpm',
  args: [
    'exec',
    'dotenv',
    '-e',
    envFile,
    '--',
    'drizzle-kit',
    'studio',
    '--host',
    '127.0.0.1',
    '--port',
    String(apiPort),
  ],
})

export const createDrizzleStudioLauncher = (
  options: CreateDrizzleStudioLauncherOptions = {},
): Plugin => {
  const cwd = options.cwd ?? process.cwd()
  const apiPort = options.apiPort ?? DEFAULT_API_PORT
  const uiProxyPort = options.uiProxyPort ?? DEFAULT_UI_PROXY_PORT
  const envFile = options.envFile ?? '.env'
  const uiOrigin = options.uiOrigin ?? DEFAULT_UI_ORIGIN
  const useProxy = options.proxy ?? true
  const studioApiUrl = `http://127.0.0.1:${apiPort}`
  const processSpec = options.command ?? defaultCommand(apiPort, envFile)

  return createProcessLauncher({
    id: options.id ?? DEFAULT_DRIZZLE_STUDIO_ID,
    title: options.name ?? 'Drizzle Studio',
    icon: options.icon ?? 'ph:database-duotone',
    groupId: options.groupId ?? DEFAULT_DRIZZLE_STUDIO_GROUP_ID,
    description: options.description ?? 'Browse rows via drizzle-kit studio. UI is served from 127.0.0.1.',
    process: {
      command: processSpec.command,
      args: processSpec.args,
      cwd,
    },
    serve: {
      onReady: async () => {
        await waitForUrl(studioApiUrl)
        if (!useProxy) return studioApiUrl
        return await ensureStudioUiProxy(uiProxyPort, uiOrigin, studioApiUrl)
      },
    },
  })
}
