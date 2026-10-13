import { spawn } from 'node:child_process'
import { connect } from 'node:net'

const port = Number(process.env.MCPJAM_INSPECTOR_PORT || '6275')
const command = process.env.MCPJAM_INSPECTOR_COMMAND || 'pnpm'
const args = JSON.parse(process.env.MCPJAM_INSPECTOR_ARGS || '[]') as string[]

const portOpen = (): Promise<boolean> => new Promise((resolve) => {
  const socket = connect(port, '127.0.0.1')
  const done = (open: boolean) => {
    socket.destroy()
    resolve(open)
  }
  socket.setTimeout(500)
  socket.once('connect', () => done(true))
  socket.once('timeout', () => done(false))
  socket.once('error', () => done(false))
})

const isMcpJam = async (): Promise<boolean> => {
  try {
    const res = await fetch(`http://127.0.0.1:${port}/`, { signal: AbortSignal.timeout(2000) })
    const text = await res.text()
    return text.includes('mcpjam-inspector')
  } catch {
    return false
  }
}

const hold = (): void => {
  process.on('SIGINT', () => process.exit(0))
  process.on('SIGTERM', () => process.exit(0))
  setInterval(() => {}, 2 ** 30)
}

const main = async (): Promise<void> => {
  if (await portOpen()) {
    if (!await isMcpJam()) {
      console.error(`Port ${port} is already in use`)
      process.exit(1)
    }
    console.error(`MCPJam is already listening on 127.0.0.1:${port}`)
    hold()
    return
  }

  const child = spawn(command, args, { stdio: 'inherit', env: process.env })
  const stop = () => child.kill('SIGTERM')
  process.on('SIGINT', stop)
  process.on('SIGTERM', stop)
  child.on('exit', (code) => process.exit(code ?? 1))
}

await main()
