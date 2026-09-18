type DevframeConfig = {
  registryKey?: string
}

type ModelContextTool = {
  name: string
  description?: string
  inputSchema?: Record<string, unknown>
  annotations?: {
    readOnlyHint?: boolean
    untrustedContentHint?: boolean
    consequentialHint?: boolean
  }
}

type ModelContext = {
  getTools?: (options?: { fromOrigins?: string[] }) => Promise<ModelContextTool[]>
  executeTool?: (name: string, args: string) => Promise<unknown>
  addEventListener?: (type: string, listener: () => void) => void
  removeEventListener?: (type: string, listener: () => void) => void
}

type WebmcpToolRow = {
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

type WebmcpSnapshot = {
  version?: number
  status?: {
    supported: boolean
    registered: number
    failed: number
    busy?: boolean
    lastRun?: 'success' | 'error'
    lastError?: string
  }
  tools: WebmcpToolRow[]
}

type ResolvedContext = {
  source: 'document' | 'navigator' | 'snapshot' | 'none'
  modelContext?: ModelContext
  snapshot?: WebmcpSnapshot
}

type FieldKind = 'string' | 'number' | 'boolean' | 'complex'

type FieldInfo = {
  key: string
  description?: string
  required: boolean
  kind: FieldKind
}

type JsonSchemaProp = {
  type?: string | string[]
  anyOf?: Array<{ type?: string }>
  oneOf?: Array<{ type?: string }>
  description?: string
  title?: string
}

const COLOR_HEX: Record<string, string> = {
  red: '#ef4444',
  orange: '#f97316',
  amber: '#f59e0b',
  yellow: '#eab308',
  lime: '#84cc16',
  green: '#22c55e',
  emerald: '#10b981',
  teal: '#14b8a6',
  cyan: '#06b6d4',
  sky: '#0ea5e9',
  blue: '#3b82f6',
  indigo: '#6366f1',
  violet: '#8b5cf6',
  purple: '#a855f7',
  fuchsia: '#d946ef',
  pink: '#ec4899',
  rose: '#f43f5e',
  slate: '#64748b',
  gray: '#6b7280',
  zinc: '#71717a',
  neutral: '#8b949e',
  stone: '#78716c',
  primary: '#3b82f6',
  success: '#22c55e',
  error: '#ef4444',
  warning: '#f59e0b',
  info: '#0ea5e9',
  current: '#e6edf3',
}

const ICON_PATHS: Record<string, string> = {
  'i-mdi-lightning-bolt': 'M11 15H6l7-14v8h5l-7 14v-8Z',
  'i-mdi-database-search': 'M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4 1.41 0 2.75-.19 3.95-.53A5.99 5.99 0 0 1 12 17c-3.31 0-6-1.12-6-2.5V13.4c1.4.87 3.52 1.4 6 1.4.7 0 1.38-.04 2.03-.12A6 6 0 0 1 20 12.8V7c0-2.21-3.58-4-8-4m0 9c-3.31 0-6-1.12-6-2.5S8.69 7 12 7s6 1.12 6 2.5S15.31 12 12 12m4.31 9.89l-2.44-2.44a3.97 3.97 0 0 0 .8-3.28A4 4 0 1 0 18 18c0 .73-.21 1.41-.56 2l2.44 2.44z',
  'i-mdi-compass-outline': 'M14.19 14.19 6 18l3.81-8.19L18 6zm-2.19 1.42A3.61 3.61 0 0 1 8.39 12 3.61 3.61 0 0 1 12 8.39 3.61 3.61 0 0 1 15.61 12 3.61 3.61 0 0 1 12 15.61M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16',
  'i-mdi-view-module-outline': 'M4 5v6h6V5zm8 0v6h6V5zM4 13v6h6v-6zm8 0v6h6v-6zM2 3h20v18H2z',
  'i-mdi-table': 'M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 2v3h14V6zm0 5v3h4v-3zm6 0v3h8v-3zm-6 5v3h4v-3zm6 0v3h8v-3z',
  'i-mdi-file-document-outline': 'M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m7 1.5V9h5.5zM6 4v16h12V11h-7V4z',
  'i-mdi-creation': 'm16.5 16.25 2.04 1.52-.76-2.53 2.01-1.58h-2.5L16.5 11l-.79 2.66h-2.5l2.01 1.58-.76 2.53zM12 7.5l1.12 3.38h3.51l-2.84 2.12 1.08 3.5L12 14.38 9.13 16.5l1.08-3.5-2.84-2.12h3.51zM5.5 16.25l2.04 1.52-.76-2.53 2.01-1.58H6.29L5.5 11l-.79 2.66H2.21l2.01 1.58-.76 2.53z',
  'i-mdi-play': 'M8 5v14l11-7z',
  'i-mdi-check-circle': 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m-1 15-5-5 1.41-1.41L11 14.17l6.59-6.59L19 9z',
  'i-mdi-alert-circle': 'M13 13h-2V7h2zm0 4h-2v-2h2zm-1-15a10 10 0 1 0 0 20 10 10 0 0 0 0-20',
  'i-mdi-close': 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
  'i-mdi-chevron-right': 'M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
  'i-mdi-magnify': 'M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.79.79h.77L19.55 18 18 19.55l-3.48-3.48v-.77l-.79-.79A6.5 6.5 0 1 1 9.5 3m0 2A4.5 4.5 0 1 0 14 9.5 4.5 4.5 0 0 0 9.5 5',
  'i-mdi-form-textbox': 'M2 7h8v2H2zm12 0h8v2h-8zM4 11h16v8H4zm2 2v4h12v-4z',
  'i-mdi-code-json': 'M5 3h2v2H5zm4 0h2v2H9zm4 0h6v2h-6zM5 7h14v2H5zm0 4h6v2H5zm8 0h6v2h-6zM5 15h14v2H5zm0 4h2v2H5zm4 0h10v2H9z',
  'i-mdi-cube-outline': 'M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88zM12 4.15 6.04 7.5 12 10.85 17.96 7.5zm-1 15.11-6-3.38V9.24l6 3.38zm2 0V12.62l6-3.38v6.64z',
}

const config = (globalThis as { __DEVFRAME_CONFIG__?: DevframeConfig }).__DEVFRAME_CONFIG__ ?? {}
const registryKey = config.registryKey ?? '__DEVFRAME_WEBMCP_REGISTRY__'

const escapeHtml = (value: string): string =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')

const colorHex = (color?: string): string =>
  (color && COLOR_HEX[color]) || COLOR_HEX.neutral

const iconMarkup = (icon: string | undefined, color?: string): string => {
  const path = (icon && ICON_PATHS[icon]) || ICON_PATHS['i-mdi-cube-outline']
  return `<span class="tool-icon" style="color:${colorHex(color)}"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${path}"/></svg></span>`
}

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

const resolveFieldKind = (prop: JsonSchemaProp): FieldKind => {
  const check = (type?: string): FieldKind | null => {
    if (type === 'string') return 'string'
    if (type === 'number' || type === 'integer') return 'number'
    if (type === 'boolean') return 'boolean'
    return null
  }
  const fromType = check(typeof prop.type === 'string' ? prop.type : undefined)
  if (fromType) return fromType
  for (const variant of [...(prop.anyOf ?? []), ...(prop.oneOf ?? [])]) {
    const kind = check(variant.type)
    if (kind) return kind
  }
  return 'complex'
}

const fieldsFromSchema = (schema?: Record<string, unknown>): FieldInfo[] => {
  if (!schema || typeof schema !== 'object') return []
  const properties = schema.properties
  if (!properties || typeof properties !== 'object') return []
  const required = new Set(Array.isArray(schema.required) ? schema.required.filter((key): key is string => typeof key === 'string') : [])
  return Object.entries(properties as Record<string, JsonSchemaProp>).map(([key, prop]) => ({
    key,
    description: prop.description ?? prop.title,
    required: required.has(key),
    kind: resolveFieldKind(prop ?? {}),
  }))
}

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

const groupTools = (tools: WebmcpToolRow[]): Array<{ label: string, tools: WebmcpToolRow[] }> => {
  const groups: Array<{ label: string, tools: WebmcpToolRow[] }> = []
  const index = new Map<string, number>()
  for (const tool of tools) {
    const label = tool.group || tool.type || 'Tools'
    const existing = index.get(label)
    if (existing === undefined) {
      index.set(label, groups.length)
      groups.push({ label, tools: [tool] })
    } else {
      groups[existing]!.tools.push(tool)
    }
  }
  return groups
}

const mount = document.getElementById('app')
if (!mount) {
  document.body.textContent = 'WebMCP panel root is missing.'
} else {
  let view: 'list' | 'tool' = 'list'
  let search = ''
  let activeName: string | null = null
  let tools: WebmcpToolRow[] = []
  let source: ResolvedContext['source'] = 'none'
  let canExecute = false
  let statusLine = ''
  let fieldState: Record<string, unknown> = {}
  let jsonStrings: Record<string, string> = {}
  let jsonErrors: Record<string, string> = {}
  let resultText = ''
  let resultOk: boolean | null = null
  let busy = false
  let requestOpen = true
  let responseOpen = false
  let lastSignature = ''
  let pollTimer: ReturnType<typeof setInterval> | undefined
  let toolchangeCleanup: (() => void) | undefined

  const activeTool = (): WebmcpToolRow | undefined =>
    tools.find(tool => tool.name === activeName)

  const initFields = (tool: WebmcpToolRow): void => {
    fieldState = {}
    jsonStrings = {}
    jsonErrors = {}
    resultText = ''
    resultOk = null
    requestOpen = true
    responseOpen = false
    for (const field of fieldsFromSchema(tool.inputSchema)) {
      if (field.kind === 'complex') {
        jsonStrings[field.key] = ''
        jsonErrors[field.key] = ''
        fieldState[field.key] = undefined
      } else {
        fieldState[field.key] = field.kind === 'boolean' ? false : undefined
      }
    }
  }

  const collectArgs = (): { ok: true, value: Record<string, unknown> } | { ok: false, error: string } => {
    const payload: Record<string, unknown> = {}
    for (const [key, error] of Object.entries(jsonErrors)) {
      if (error) return { ok: false, error: `${key}: ${error}` }
    }
    for (const [key, value] of Object.entries(fieldState)) {
      if (value !== undefined) payload[key] = value
    }
    return { ok: true, value: payload }
  }

  const resolveContext = async (): Promise<ResolvedContext & { tools: WebmcpToolRow[] }> => {
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
        }
      } catch {
        // Fall through to snapshot.
      }
    }
    if (snapshot) {
      return {
        source: 'snapshot',
        snapshot,
        tools: Array.isArray(snapshot.tools) ? snapshot.tools : [],
      }
    }
    return { source: 'none', tools: [] }
  }

  const renderIcon = (icon?: string, color?: string) => iconMarkup(icon, color)

  const renderList = (): string => {
    const query = search.trim().toLowerCase()
    const filtered = tools.filter((tool) => {
      if (!query) return true
      const hay = `${tool.name} ${tool.description} ${tool.group ?? ''} ${tool.type ?? ''} ${tool.scope ?? ''}`.toLowerCase()
      return hay.includes(query)
    })
    if (filtered.length === 0) {
      return `<div class="empty">${tools.length ? 'No tools match this search.' : 'No tools available yet.'}</div>`
    }
    return groupTools(filtered).map(group => `
      <div class="group-label">${escapeHtml(group.label)}</div>
      ${group.tools.map(tool => `
        <button type="button" class="tool${tool.name === activeName ? ' active' : ''}" data-tool="${escapeHtml(tool.name)}">
          ${renderIcon(tool.icon, tool.color)}
          <span class="tool-copy">
            <div class="tool-name">${escapeHtml(tool.name)}</div>
            <div class="tool-desc">${escapeHtml(tool.description || '—')}</div>
          </span>
          ${iconMarkup('i-mdi-chevron-right', 'neutral')}
        </button>
      `).join('')}
    `).join('')
  }

  const renderField = (field: FieldInfo): string => {
    const value = fieldState[field.key]
    const required = field.required ? ' required' : ''
    const hint = field.description ? `<p class="hint">${escapeHtml(field.description)}</p>` : ''
    if (field.kind === 'boolean') {
      return `<div class="field">
        <div class="switch">
          <input type="checkbox" data-field="${escapeHtml(field.key)}" data-kind="boolean"${value ? ' checked' : ''}${required} />
          <label>${escapeHtml(field.key)}</label>
        </div>
        ${hint}
      </div>`
    }
    if (field.kind === 'number') {
      return `<div class="field">
        <label>${escapeHtml(field.key)}</label>
        ${hint}
        <input type="number" data-field="${escapeHtml(field.key)}" data-kind="number" value="${value === undefined || value === null ? '' : escapeHtml(String(value))}"${required} />
      </div>`
    }
    if (field.kind === 'string') {
      return `<div class="field">
        <label>${escapeHtml(field.key)}</label>
        ${hint}
        <input type="text" data-field="${escapeHtml(field.key)}" data-kind="string" value="${value === undefined || value === null ? '' : escapeHtml(String(value))}"${required} />
      </div>`
    }
    return `<div class="field">
      <label>${escapeHtml(field.key)}</label>
      ${hint}
      <textarea data-field="${escapeHtml(field.key)}" data-kind="complex" placeholder="${escapeHtml(field.key)} (JSON)">${escapeHtml(jsonStrings[field.key] ?? '')}</textarea>
      ${jsonErrors[field.key] ? `<p class="error">${escapeHtml(jsonErrors[field.key]!)}</p>` : ''}
    </div>`
  }

  const renderDetail = (tool: WebmcpToolRow): string => {
    const fields = fieldsFromSchema(tool.inputSchema)
    const scope = tool.scopeLabel
      ? `<span class="badge">${renderIcon(tool.scopeIcon, tool.scopeColor)} ${escapeHtml(tool.scopeLabel)}</span>`
      : ''
    const resultBlock = resultOk === null
      ? '<p class="muted">Run the tool to see a result.</p>'
      : `<p class="${resultOk ? 'result-ok' : 'result-fail'}">${resultOk ? 'Success' : 'Error'}</p>
         <pre class="out">${escapeHtml(resultText)}</pre>`
    return `
      <div class="detail">
        <div class="crumb">
          <button type="button" data-action="back">${iconMarkup('i-mdi-chevron-right', 'neutral')}</button>
          <strong>${escapeHtml(tool.name)}</strong>
          ${scope}
        </div>
        <div class="fields">
          <details class="block" data-acc="request"${requestOpen ? ' open' : ''}>
            <summary>${iconMarkup('i-mdi-form-textbox', 'info')} Request</summary>
            <div class="block-body">
              ${fields.length ? fields.map(renderField).join('') : '<p class="muted">This tool has no parameters.</p>'}
            </div>
          </details>
          <details class="block" data-acc="response"${responseOpen ? ' open' : ''}>
            <summary>${iconMarkup(resultOk === false ? 'i-mdi-alert-circle' : 'i-mdi-code-json', resultOk === false ? 'error' : 'neutral')} Response</summary>
            <div class="block-body">${resultBlock}</div>
          </details>
        </div>
        <div class="footer">
          <button type="button" data-action="invoke"${!canExecute || busy ? ' disabled' : ''}>
            ${iconMarkup('i-mdi-play')} ${busy ? 'Running…' : 'Execute'}
          </button>
        </div>
      </div>
    `
  }

  const render = (): void => {
    const tool = view === 'tool' ? activeTool() : undefined
    mount.className = ''
    mount.innerHTML = `
      <header class="chrome">
        <h1>WebMCP</h1>
        <span class="status">${escapeHtml(statusLine)}</span>
      </header>
      ${tool
        ? renderDetail(tool)
        : `<div class="search-row"><input id="tool-search" type="search" placeholder="Search tools…" value="${escapeHtml(search)}" /></div>
           <div class="list">${renderList()}</div>`}
    `
    const back = mount.querySelector('[data-action="back"]') as HTMLButtonElement | null
    if (back) back.style.transform = 'rotate(180deg)'
  }

  const refresh = async (force = false): Promise<void> => {
    try {
      const context = await resolveContext()
      tools = context.tools
      source = context.source
      canExecute = Boolean(context.modelContext?.executeTool)
      const statusParts = [
        `source: ${source}`,
        context.modelContext?.getTools ? 'getTools: yes' : 'getTools: no',
        canExecute ? 'executeTool: yes' : 'executeTool: no',
        `tools: ${tools.length}`,
      ]
      if (context.snapshot?.status) {
        const status = context.snapshot.status
        statusParts.push(
          status.supported ? 'modelContext: yes' : 'modelContext: no',
          `registered ${status.registered}`,
          `failed ${status.failed}`,
          status.busy ? 'syncing…' : null,
          status.lastRun ? `last ${status.lastRun}` : null,
          status.lastError ?? null,
        )
      }
      statusLine = statusParts.filter(Boolean).join(' · ')
      const signature = `${statusLine}\n${tools.map(tool => tool.name).join('\0')}\n${view}\n${activeName}\n${search}\n${resultOk}\n${busy}`
      if (!force && signature === lastSignature) return
      lastSignature = signature
      if (view === 'tool' && !activeTool()) {
        view = 'list'
        activeName = null
      }
      render()
    } catch (error) {
      mount.className = 'empty'
      mount.textContent = error instanceof Error ? error.message : String(error)
    }
  }

  const bindToolchange = () => {
    toolchangeCleanup?.()
    toolchangeCleanup = undefined
    const live = readModelContext()
    const modelContext = live?.modelContext
    if (!modelContext?.addEventListener) return
    const onToolchange = () => {
      void refresh(true)
    }
    modelContext.addEventListener('toolchange', onToolchange)
    toolchangeCleanup = () => {
      modelContext.removeEventListener?.('toolchange', onToolchange)
    }
  }

  mount.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    const row = target.closest('[data-tool]') as HTMLElement | null
    if (row?.dataset.tool) {
      const tool = tools.find(item => item.name === row.dataset.tool)
      if (!tool) return
      activeName = tool.name
      view = 'tool'
      initFields(tool)
      void refresh(true)
      return
    }
    if (target.closest('[data-action="back"]')) {
      view = 'list'
      activeName = null
      void refresh(true)
      return
    }
    if (target.closest('[data-action="invoke"]')) {
      void (async () => {
        const live = readModelContext()
        if (!live?.modelContext.executeTool || !activeName || busy) return
        const collected = collectArgs()
        if (!collected.ok) {
          resultOk = false
          resultText = collected.error
          responseOpen = true
          void refresh(true)
          return
        }
        busy = true
        void refresh(true)
        try {
          const result = await live.modelContext.executeTool(activeName, JSON.stringify(collected.value))
          resultOk = true
          resultText = typeof result === 'string' ? result : JSON.stringify(result, null, 2)
        } catch (error) {
          resultOk = false
          resultText = error instanceof Error ? error.message : String(error)
        } finally {
          busy = false
          responseOpen = true
          void refresh(true)
        }
      })()
    }
  })

  mount.addEventListener('toggle', (event) => {
    const details = event.target as HTMLDetailsElement
    if (details.dataset.acc === 'request') requestOpen = details.open
    if (details.dataset.acc === 'response') responseOpen = details.open
  }, true)

  mount.addEventListener('input', (event) => {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement
    if (target.id === 'tool-search') {
      search = target.value
      render()
      return
    }
    const key = target.dataset.field
    const kind = target.dataset.kind as FieldKind | undefined
    if (!key || !kind) return
    if (kind === 'boolean' && target instanceof HTMLInputElement) {
      fieldState[key] = target.checked
      return
    }
    if (kind === 'number') {
      fieldState[key] = target.value === '' ? undefined : Number(target.value)
      return
    }
    if (kind === 'string') {
      fieldState[key] = target.value === '' ? undefined : target.value
      return
    }
    jsonStrings[key] = target.value
    if (!target.value.trim()) {
      fieldState[key] = undefined
      jsonErrors[key] = ''
      return
    }
    try {
      fieldState[key] = JSON.parse(target.value)
      jsonErrors[key] = ''
    } catch {
      jsonErrors[key] = 'Invalid JSON'
    }
  })

  void (async () => {
    bindToolchange()
    await refresh(true)
    if (!toolchangeCleanup) {
      pollTimer = setInterval(() => {
        void refresh()
      }, 2000)
    }
  })()

  window.addEventListener('beforeunload', () => {
    if (pollTimer) clearInterval(pollTimer)
    toolchangeCleanup?.()
  })
}
