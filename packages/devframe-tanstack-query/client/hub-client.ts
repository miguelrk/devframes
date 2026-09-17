import { VueQueryDevtoolsPanel } from '@tanstack/vue-query-devtools'
import { createApp, h } from 'vue'

type DevframeConfig = {
  clientKey?: string
}

type WindowWithQueryClient = Window & Record<string, import('@tanstack/query-core').QueryClient | undefined>

const config = (globalThis as { __DEVFRAME_CONFIG__?: DevframeConfig }).__DEVFRAME_CONFIG__ ?? {}
const clientKey = config.clientKey ?? '__TANSTACK_QUERY_CLIENT__'

const readFromAncestors = <T>(read: (win: Window) => T | undefined): T | undefined => {
  const seen = new Set<Window>()
  for (const candidate of [window.parent, window.top, window]) {
    if (!candidate || seen.has(candidate)) continue
    seen.add(candidate)
    try {
      const value = read(candidate)
      if (value !== undefined) return value
    } catch {
      // Cross-origin frame.
    }
  }
  return undefined
}

const readClient = () =>
  readFromAncestors(win => (win as WindowWithQueryClient)[clientKey])

const mount = document.getElementById('app')
if (!mount) {
  document.body.textContent = 'Query panel root is missing.'
} else {
  const client = readClient()
  if (!client) {
    mount.className = 'empty'
    mount.textContent = `QueryClient is not on this page (key: ${clientKey}). Call publishQueryClient from the host app.`
  } else {
    createApp({
      render: () => h(VueQueryDevtoolsPanel, {
        client,
        style: { height: '100%', width: '100%' },
      }),
    }).mount(mount)
  }
}
