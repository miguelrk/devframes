export type ModelContextTool = {
  name: string
  description?: string
  inputSchema?: Record<string, unknown>
  annotations?: {
    readOnlyHint?: boolean
    untrustedContentHint?: boolean
    consequentialHint?: boolean
  }
}

export type ModelContext = {
  getTools?: (options?: { fromOrigins?: string[] }) => Promise<ModelContextTool[]>
  executeTool?: (tool: ModelContextTool, argsJson: string) => Promise<unknown>
  addEventListener?: (type: string, listener: () => void) => void
  removeEventListener?: (type: string, listener: () => void) => void
}

export type WebmcpToolRow = {
  name: string
  description: string
  inputSchema?: Record<string, unknown>
  annotations?: ModelContextTool['annotations']
  type?: string
  subtype?: string
  scope?: string
  needsApproval?: boolean
  icon?: string
  color?: string
  group?: string
  scopeLabel?: string
  scopeIcon?: string
  scopeColor?: string
}

export type WebmcpSyncStatus = {
  supported: boolean
  registered: number
  failed: number
  busy?: boolean
  lastRun?: 'success' | 'error'
  lastError?: string
}

export type WebmcpSnapshot = {
  version?: number
  status?: WebmcpSyncStatus
  tools: WebmcpToolRow[]
}

export type ResolvedContext = {
  source: 'document' | 'navigator' | 'snapshot' | 'none'
  modelContext?: ModelContext
  snapshot?: WebmcpSnapshot
  tools: WebmcpToolRow[]
  hasGetTools: boolean
  liveToolCount: number
}

export type PageContextState = {
  title?: string
  url?: string
  path?: string
  moduleUid?: string | null
  moduleLabel?: string | null
  tableUid?: string | null
  tableLabel?: string | null
  id?: string | null
  entityId?: string | null
  view?: {
    tableUid?: string | null
    type?: string
    search?: string
    filters?: unknown[]
    sort?: unknown[]
    groupBy?: unknown
    dateRange?: unknown
    pagination?: unknown
    selected?: unknown[]
  } | null
  record?: { tableUid?: string, id?: string, label?: string | null } | null
  overlays?: Array<{ tableUid?: unknown, procedure?: unknown, isOpen?: boolean }>
}

type DevframeConfig = {
  registryKey?: string
}

const config = (globalThis as { __DEVFRAME_CONFIG__?: DevframeConfig }).__DEVFRAME_CONFIG__ ?? {}
const registryKey = config.registryKey ?? '__DEVFRAME_WEBMCP_REGISTRY__'

/** Walk the parent chain (and top) for host-published data such as the registry snapshot. */
const readFromAncestors = <T>(read: (win: Window) => T | undefined): T | undefined => {
  const seen = new Set<Window>()
  let current: Window | null = window
  while (current && !seen.has(current)) {
    seen.add(current)
    try {
      const value = read(current)
      if (value !== undefined) return value
    } catch {
      // Cross-origin frame.
    }
    try {
      if (current.parent === current) break
      current = current.parent
    } catch {
      break
    }
  }
  try {
    const top = window.top
    if (top && !seen.has(top)) {
      const value = read(top)
      if (value !== undefined) return value
    }
  } catch {
    // Cross-origin top.
  }
  return undefined
}

/**
 * getTools / executeTool must run on the *calling* document's modelContext.
 * Chrome lists same-origin tools from the frame tree on this context.
 * Do not call getTools on a parent modelContext reference.
 */
const readLocalModelContext = (): { source: 'document' | 'navigator', modelContext: ModelContext } | undefined => {
  const docContext = (document as Document & { modelContext?: ModelContext }).modelContext
  if (docContext && typeof docContext.getTools === 'function') {
    return { source: 'document', modelContext: docContext }
  }
  const navContext = (navigator as Navigator & { modelContext?: ModelContext }).modelContext
  if (navContext && typeof navContext.getTools === 'function') {
    return { source: 'navigator', modelContext: navContext }
  }
  return undefined
}

const readSnapshot = (): WebmcpSnapshot | undefined =>
  readFromAncestors(win => (win as Window & Record<string, { getSnapshot: () => WebmcpSnapshot } | undefined>)[registryKey]?.getSnapshot())

const mergeTools = (live: WebmcpToolRow[], snapshot?: WebmcpSnapshot): WebmcpToolRow[] => {
  const extra = new Map((snapshot?.tools ?? []).map(tool => [tool.name, tool]))
  if (live.length === 0) return [...extra.values()]
  return live.map((tool) => {
    const meta = extra.get(tool.name)
    extra.delete(tool.name)
    return {
      ...meta,
      ...tool,
      description: tool.description || meta?.description || '',
      inputSchema: tool.inputSchema ?? meta?.inputSchema,
      annotations: tool.annotations ?? meta?.annotations,
      icon: meta?.icon ?? tool.icon,
      color: meta?.color ?? tool.color,
      group: meta?.group ?? tool.group,
      type: meta?.type ?? tool.type,
      subtype: meta?.subtype ?? tool.subtype,
      scope: meta?.scope ?? tool.scope,
      scopeLabel: meta?.scopeLabel ?? tool.scopeLabel,
      scopeIcon: meta?.scopeIcon ?? tool.scopeIcon,
      scopeColor: meta?.scopeColor ?? tool.scopeColor,
      needsApproval: meta?.needsApproval ?? tool.needsApproval,
    }
  }).concat([...extra.values()])
}

export const resolveContext = async (): Promise<ResolvedContext> => {
  const live = readLocalModelContext()
  const snapshot = readSnapshot()
  if (live?.modelContext.getTools) {
    try {
      const listed = await live.modelContext.getTools()
      const mapped = listed.map(tool => ({
        name: tool.name,
        description: tool.description ?? '',
        inputSchema: tool.inputSchema,
        annotations: tool.annotations,
      }))
      return {
        source: live.source,
        modelContext: live.modelContext,
        snapshot,
        tools: mergeTools(mapped, snapshot),
        hasGetTools: true,
        liveToolCount: mapped.length,
      }
    } catch {
      // Fall through to the snapshot.
    }
  }
  if (snapshot) {
    return {
      source: 'snapshot',
      snapshot,
      tools: Array.isArray(snapshot.tools) ? snapshot.tools : [],
      hasGetTools: false,
      liveToolCount: 0,
    }
  }
  return { source: 'none', tools: [], hasGetTools: false, liveToolCount: 0 }
}

export const bindToolchange = (onChange: () => void): (() => void) | undefined => {
  const live = readLocalModelContext()
  const modelContext = live?.modelContext
  if (!modelContext?.addEventListener) return undefined
  modelContext.addEventListener('toolchange', onChange)
  return () => {
    modelContext.removeEventListener?.('toolchange', onChange)
  }
}

const tryParse = (text: string): unknown => {
  try {
    return JSON.parse(text) as unknown
  } catch {
    return undefined
  }
}

const contentText = (result: unknown): string | undefined => {
  if (!result || typeof result !== 'object' || !('content' in result)) return undefined
  const content = (result as { content?: Array<{ text?: string }> }).content
  if (!Array.isArray(content)) return undefined
  return content.map(part => part.text ?? '').join('\n')
}

export const presentResult = (result: unknown): { ok: boolean, text: string, data: unknown } => {
  const errored = Boolean(result && typeof result === 'object' && 'isError' in result && (result as { isError?: boolean }).isError)
  const rawText = contentText(result)
  if (rawText !== undefined) {
    const data = tryParse(rawText)
    const text = data === undefined ? rawText : JSON.stringify(data, null, 2)
    return { ok: !errored, text, data: data === undefined ? rawText : data }
  }
  if (typeof result === 'string') {
    const data = tryParse(result)
    return {
      ok: !errored,
      text: data === undefined ? result : JSON.stringify(data, null, 2),
      data: data === undefined ? result : data,
    }
  }
  const text = result === undefined ? '' : (JSON.stringify(result, null, 2) ?? '')
  return { ok: !errored, text, data: result }
}

export const asPageContext = (data: unknown): PageContextState | undefined => {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return undefined
  if (!('path' in data) && !('view' in data) && !('url' in data)) return undefined
  return data as PageContextState
}

export const explainMissingTool = (
  name: string,
  context: { liveToolCount: number, snapshot?: WebmcpSnapshot },
): string => {
  const hostCount = context.snapshot?.tools?.length ?? 0
  const registered = context.snapshot?.status?.registered
  if (context.liveToolCount === 0 && hostCount === 0) {
    return `No WebMCP tools are available. Open this panel from the DevTools dock while an app page is loaded (signed in).`
  }
  if (context.liveToolCount === 0 && hostCount > 0) {
    const reg = typeof registered === 'number' ? ` Host registered ${registered}.` : ''
    return `Tool "${name}" is not visible on this frame's modelContext yet. The host registry has ${hostCount} tools.${reg} Reload the host page, then open the panel from the dock again.`
  }
  return `Tool "${name}" is not registered on modelContext.`
}

export const executeNamedTool = async (
  name: string,
  args: Record<string, unknown>,
): Promise<{ ok: boolean, text: string, data: unknown }> => {
  const live = readLocalModelContext()
  if (!live?.modelContext.executeTool || !live.modelContext.getTools) {
    return { ok: false, text: 'executeTool is not available in this frame.', data: null }
  }
  const listed = await live.modelContext.getTools()
  const registered = listed.find(tool => tool.name === name)
  if (!registered) {
    const snapshot = readSnapshot()
    return {
      ok: false,
      text: explainMissingTool(name, { liveToolCount: listed.length, snapshot }),
      data: null,
    }
  }
  try {
    const result = await live.modelContext.executeTool(registered, JSON.stringify(args))
    return presentResult(result)
  } catch (error) {
    const text = error instanceof Error ? error.message : String(error)
    return { ok: false, text, data: null }
  }
}
