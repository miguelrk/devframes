import type { ServerResponse } from 'node:http'
import { ServerResponse as NodeServerResponse } from 'node:http'

/**
 * `@mcpjam/inspector` sets `frame-ancestors 'self'` and `X-Frame-Options: SAMEORIGIN`.
 * The DevTools hub is a different origin, so the iframe stays blank.
 * This preload rewrites those headers in the inspector process only.
 */
const relaxCsp = (value: string): string =>
  value.replace(/frame-ancestors\s+[^;]*/gi, 'frame-ancestors *')

const relaxOne = (value: unknown): unknown => {
  if (typeof value === 'string') return relaxCsp(value)
  if (Array.isArray(value)) return value.map(item => typeof item === 'string' ? relaxCsp(item) : item)
  return value
}

const dropOrRelax = (name: string, value: unknown): unknown => {
  const lower = name.toLowerCase()
  if (lower === 'x-frame-options') return undefined
  if (lower === 'content-security-policy') return relaxOne(value)
  return value
}

const relaxOutgoing = (headers: Record<string, unknown>): void => {
  for (const key of Object.keys(headers)) {
    const next = dropOrRelax(key, headers[key])
    if (next === undefined) delete headers[key]
    else headers[key] = next
  }
}

const response = NodeServerResponse.prototype

const originalSetHeader = response.setHeader
response.setHeader = function (this: ServerResponse, name: string, value: unknown) {
  const next = dropOrRelax(name, value)
  if (next === undefined) return this
  return originalSetHeader.call(this, name, next as never)
}

const originalAppendHeader = response.appendHeader
response.appendHeader = function (this: ServerResponse, name: string, value: unknown) {
  const next = dropOrRelax(name, value)
  if (next === undefined || typeof next === 'number') return this
  return originalAppendHeader.call(this, name, next as never)
}

const originalWriteHead = response.writeHead as (
  this: ServerResponse,
  statusCode: number,
  statusMessage?: unknown,
  headers?: unknown,
) => ServerResponse
response.writeHead = function (
  this: ServerResponse,
  statusCode: number,
  statusMessage?: unknown,
  headers?: unknown,
) {
  if (typeof statusMessage === 'string') {
    if (headers && typeof headers === 'object' && !Array.isArray(headers)) {
      relaxOutgoing(headers as Record<string, unknown>)
    }
    return originalWriteHead.call(this, statusCode, statusMessage, headers as never)
  }
  if (statusMessage && typeof statusMessage === 'object' && !Array.isArray(statusMessage)) {
    relaxOutgoing(statusMessage as Record<string, unknown>)
  }
  return originalWriteHead.call(this, statusCode, statusMessage as never)
}
