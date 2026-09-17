export const waitForUrl = async (url: string, timeoutMs = 45_000): Promise<void> => {
  const started = Date.now()
  while (Date.now() - started < timeoutMs) {
    try {
      const res = await fetch(url, { method: 'GET' })
      if (res.status < 500) return
    } catch {
      // process is still starting
    }
    await new Promise(resolve => setTimeout(resolve, 250))
  }
  throw new Error(`Timeout waiting for ${url}`)
}
