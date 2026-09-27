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
}

export type PageContextView = {
  tableUid?: string | null
  type?: string
  search?: string
  filters?: unknown[]
  sort?: unknown[]
  groupBy?: unknown
  dateRange?: unknown
  pagination?: unknown
  selected?: unknown[]
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
  view?: PageContextView | null
  record?: { tableUid?: string, id?: string, label?: string | null } | null
  overlays?: Array<{ tableUid?: unknown, procedure?: unknown, isOpen?: boolean }>
}

type DevframeConfig = {
  registryKey?: string
}

const config = (globalThis as { __DEVFRAME_CONFIG__?: DevframeConfig }).__DEVFRAME_CONFIG__ ?? {}
const registryKey = config.registryKey ?? '__DEVFRAME_WEBMCP_REGISTRY__'

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

const readModelContext = (): { source: 'document' | 'navigator', modelContext: ModelContext } | undefined =>
  readFromAncestors((win) => {
    const docContext = (win.document as Document & { modelContext?: ModelContext }).modelContext
    if (docContext && typeof docContext.getTools === 'function') {
      return { source: 'document' as const, modelContext: docContext }
    }
    const navContext = (win.navigator as Navigator & { modelContext?: ModelContext }).modelContext
    if (navContext && typeof navContext.getTools === 'function') {
      return { source: 'navigator' as const, modelContext: navContext }
    }
    return undefined
  })

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
  const live = readModelContext()
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
    }
  }
  return { source: 'none', tools: [], hasGetTools: false }
}

export const bindToolchange = (onChange: () => void): (() => void) | undefined => {
  const live = readModelContext()
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

export const executeNamedTool = async (
  name: string,
  args: Record<string, unknown>,
): Promise<{ ok: boolean, text: string, data: unknown }> => {
  const live = readModelContext()
  if (!live?.modelContext.executeTool || !live.modelContext.getTools) {
    return { ok: false, text: 'executeTool is not available on this page.', data: null }
  }
  const listed = await live.modelContext.getTools()
  const registered = listed.find(tool => tool.name === name)
  if (!registered) {
    return { ok: false, text: `Tool "${name}" is not registered on modelContext.`, data: null }
  }
  try {
    const result = await live.modelContext.executeTool(registered, JSON.stringify(args))
    return presentResult(result)
  } catch (error) {
    const text = error instanceof Error ? error.message : String(error)
    return { ok: false, text, data: null }
  }
}
