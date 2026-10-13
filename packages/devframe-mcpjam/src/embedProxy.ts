import type { IncomingHttpHeaders, IncomingMessage } from 'node:http'
import { createServer, request as httpRequest } from 'node:http'
import { connect as connectNet } from 'node:net'

const EMBED_HEADER = 'x-devframe-mcpjam'

const relaxCsp = (value: string): string =>
  value.replace(/frame-ancestors\s+[^;]*/gi, 'frame-ancestors *')

const headerList = (value: string | string[] | undefined): string[] => {
  if (value == null) return []
  return Array.isArray(value) ? value : [value]
}

const relaxResponseHeaders = (
  headers: IncomingHttpHeaders,
  upstreamOrigin: string,
  embedOrigin: string,
): Record<string, string | string[] | number> => {
  const next: Record<string, string | string[] | number> = {}
  for (const [key, value] of Object.entries(headers)) {
    if (value == null) continue
    const lower = key.toLowerCase()
    if (lower === 'x-frame-options' || lower === 'transfer-encoding') continue
    if (lower === 'content-security-policy') {
      const relaxed = headerList(value).map(relaxCsp)
      next[key] = relaxed.length === 1 ? relaxed[0]! : relaxed
      continue
    }
    if (lower === 'location') {
      next[key] = headerList(value).map(item =>
        item.startsWith(upstreamOrigin) ? embedOrigin + item.slice(upstreamOrigin.length) : item,
      )
      continue
    }
    next[key] = value
  }
  next[EMBED_HEADER] = 'embed'
  return next
}

const rewriteToUpstream = (value: string, embedOrigin: string, upstreamOrigin: string): string =>
  value.split(embedOrigin).join(upstreamOrigin)

const requestHeaders = (
  incoming: IncomingHttpHeaders,
  upstreamHost: string,
  embedOrigin: string,
  upstreamOrigin: string,
  includeUpgrade: boolean,
): IncomingHttpHeaders => {
  const headers: IncomingHttpHeaders = {}
  for (const [key, value] of Object.entries(incoming)) {
    if (value == null) continue
    const lower = key.toLowerCase()
    if (lower === 'host') continue
    if (!includeUpgrade && (lower === 'connection' || lower === 'keep-alive' || lower === 'upgrade')) continue
    if (lower === 'origin' || lower === 'referer') {
      const rewritten = headerList(value).map(item => rewriteToUpstream(item, embedOrigin, upstreamOrigin))
      headers[key] = rewritten.length === 1 ? rewritten[0] : rewritten
      continue
    }
    headers[key] = value
  }
  headers.host = upstreamHost
  return headers
}

let embedProxyReady: Promise<string> | undefined

export const ensureMcpJamEmbedProxy = (
  embedPort: number,
  inspectorPort: number,
): Promise<string> => {
  if (embedProxyReady) return embedProxyReady

  const embedOrigin = `http://127.0.0.1:${embedPort}`
  const upstreamOrigin = `http://127.0.0.1:${inspectorPort}`
  const upstreamHost = `127.0.0.1:${inspectorPort}`
  const url = `${embedOrigin}/`

  embedProxyReady = new Promise((resolve, reject) => {
    const server = createServer((req, res) => {
      const proxyReq = httpRequest({
        hostname: '127.0.0.1',
        port: inspectorPort,
        path: req.url,
        method: req.method,
        headers: requestHeaders(req.headers, upstreamHost, embedOrigin, upstreamOrigin, false),
      }, (proxyRes) => {
        res.writeHead(proxyRes.statusCode ?? 502, relaxResponseHeaders(proxyRes.headers, upstreamOrigin, embedOrigin))
        proxyRes.pipe(res)
      })
      proxyReq.on('error', (error) => {
        if (!res.headersSent) {
          res.writeHead(502, { 'content-type': 'text/plain; charset=utf-8' })
        }
        res.end(error.message)
      })
      req.pipe(proxyReq)
    })

    server.on('upgrade', (req: IncomingMessage, socket, head) => {
      const upstream = connectNet(inspectorPort, '127.0.0.1', () => {
        const headers = requestHeaders(req.headers, upstreamHost, embedOrigin, upstreamOrigin, true)
        const lines = [`${req.method ?? 'GET'} ${req.url ?? '/'} HTTP/1.1`]
        for (const [key, value] of Object.entries(headers)) {
          for (const item of headerList(value)) lines.push(`${key}: ${item}`)
        }
        upstream.write(`${lines.join('\r\n')}\r\n\r\n`)
        if (head.length) upstream.write(head)
        upstream.pipe(socket)
        socket.pipe(upstream)
      })
      const destroy = () => {
        socket.destroy()
        upstream.destroy()
      }
      upstream.on('error', destroy)
      socket.on('error', destroy)
    })

    server.once('error', (error: NodeJS.ErrnoException) => {
      if (error.code !== 'EADDRINUSE') {
        embedProxyReady = undefined
        reject(error)
        return
      }
      void fetch(url).then((res) => {
        if (res.headers.get(EMBED_HEADER) === 'embed') {
          resolve(url)
          return
        }
        embedProxyReady = undefined
        reject(new Error(`MCPJam embed port ${embedPort} is already in use`))
      }).catch((cause: unknown) => {
        embedProxyReady = undefined
        reject(cause)
      })
    })

    server.listen(embedPort, '127.0.0.1', () => {
      resolve(url)
    })
  })

  return embedProxyReady
}
