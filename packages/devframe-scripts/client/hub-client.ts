import { connectDevframe } from 'devframe/client'

type DevframeConfig = {
  id?: string
}

type ScriptEntry = {
  id: string
  description: string
  command: string
}

type ScriptResult = {
  id: string
  ok: boolean
  code: number | null
  stdout: string
  stderr: string
  durationMs: number
}

type ViewMode = 'tree' | 'list'

type TreeBranch = {
  kind: 'branch'
  name: string
  path: string
  children: TreeNode[]
}

type TreeLeaf = {
  kind: 'leaf'
  script: ScriptEntry
}

type TreeNode = TreeBranch | TreeLeaf

const config = (globalThis as { __DEVFRAME_CONFIG__?: DevframeConfig }).__DEVFRAME_CONFIG__ ?? {}
const devframeId = config.id ?? 'devframe-scripts'
const VIEW_STORAGE_KEY = `${devframeId}-scripts-view`

const ICON_TREE = '<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M2 2h5v2H2zm7 5h5v2H9zm0 5h5v2H9zM4 4v9h1.5V8.5H9V7H5.5V4z"/></svg>'
const ICON_LIST = '<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M2 3h12v1.5H2zm0 4.25h12v1.5H2zM2 11.5h12V13H2z"/></svg>'

const escapeHtml = (value: string): string =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')

const formatDuration = (ms: number): string => {
  if (ms < 1000) return `${ms} ms`
  return `${(ms / 1000).toFixed(1)} s`
}

const readView = (): ViewMode => {
  try {
    return sessionStorage.getItem(VIEW_STORAGE_KEY) === 'list' ? 'list' : 'tree'
  } catch {
    return 'tree'
  }
}

const writeView = (view: ViewMode): void => {
  try {
    sessionStorage.setItem(VIEW_STORAGE_KEY, view)
  } catch {
    // ignore quota / private mode
  }
}

const leafCount = (node: TreeNode): number =>
  node.kind === 'leaf'
    ? 1
    : node.children.reduce((sum, child) => sum + leafCount(child), 0)

const addLeaf = (nodes: TreeNode[], script: ScriptEntry): void => {
  const name = script.id.split(':').at(-1) ?? script.id
  const branch = nodes.find((node): node is TreeBranch => node.kind === 'branch' && node.name === name)
  if (branch) {
    branch.children.unshift({ kind: 'leaf', script })
    return
  }
  nodes.push({ kind: 'leaf', script })
}

const addBranch = (nodes: TreeNode[], name: string, path: string): TreeBranch => {
  const existing = nodes.find((node): node is TreeBranch => node.kind === 'branch' && node.name === name)
  if (existing) return existing

  const leafIndex = nodes.findIndex(node =>
    node.kind === 'leaf' && (node.script.id.split(':').at(-1) ?? node.script.id) === name,
  )
  const branch: TreeBranch = { kind: 'branch', name, path, children: [] }
  if (leafIndex >= 0) {
    const [leaf] = nodes.splice(leafIndex, 1)
    if (leaf) branch.children.push(leaf)
    nodes.splice(leafIndex, 0, branch)
    return branch
  }
  nodes.push(branch)
  return branch
}

const buildTree = (scripts: ScriptEntry[]): TreeNode[] => {
  const roots: TreeNode[] = []
  for (const script of scripts) {
    const parts = script.id.split(':')
    if (parts.length === 1) {
      addLeaf(roots, script)
      continue
    }
    let nodes = roots
    let path = ''
    for (const part of parts.slice(0, -1)) {
      path = path ? `${path}:${part}` : part
      const branch = addBranch(nodes, part, path)
      nodes = branch.children
    }
    addLeaf(nodes, script)
  }
  return roots
}

const mount = document.getElementById('app')
if (!mount) {
  document.body.textContent = 'Scripts panel root is missing.'
} else {
  void (async () => {
    const client = await connectDevframe()
    const rpc = client.scope(devframeId).rpc
    let scripts = await rpc.call('list-scripts') as ScriptEntry[]

    let activeId = scripts[0]?.id ?? null
    let filter = ''
    let view: ViewMode = readView()
    let running = false
    let result: ScriptResult | null = null
    const collapsed = new Set<string>()

    const activeScript = () => scripts.find(item => item.id === activeId) ?? null

    const filtered = () => {
      const q = filter.trim().toLowerCase()
      return scripts.filter((item) => {
        if (!q) return true
        return `${item.id} ${item.description} ${item.command}`.toLowerCase().includes(q)
      })
    }

    const countLabel = () => {
      const rows = filtered()
      if (filter.trim()) return `${rows.length} matched · ${scripts.length} scripts in total`
      return `${scripts.length} scripts in total`
    }

    const renderLeaf = (script: ScriptEntry): string => `
      <button type="button" class="item${script.id === activeId ? ' active' : ''}" data-id="${escapeHtml(script.id)}">
        ${escapeHtml(script.id)}
      </button>
    `

    const renderNode = (node: TreeNode): string => {
      if (node.kind === 'leaf') return renderLeaf(node.script)
      const open = filter.trim() || !collapsed.has(node.path)
      return `
        <details class="branch" data-path="${escapeHtml(node.path)}"${open ? ' open' : ''}>
          <summary class="branch-head">
            <span class="name">${escapeHtml(node.name)}</span>
            <span class="count">${leafCount(node)}</span>
          </summary>
          <div class="branch-body">
            ${node.children.map(child => renderNode(child)).join('')}
          </div>
        </details>
      `
    }

    const renderList = () => {
      const rows = filtered()
      if (view === 'list') return rows.map(renderLeaf).join('')
      return buildTree(rows).map(renderNode).join('')
    }

    const renderResult = () => {
      if (running) return '<div class="empty">Running…</div>'
      if (!result) return '<p class="muted">Run the script to see stdout and stderr.</p>'
      return `
        <div class="chips">
          <span class="chip ${result.ok ? 'ok' : 'fail'}">${result.ok ? 'ok' : 'failed'}</span>
          <span class="chip">exit ${result.code ?? '—'}</span>
          <span class="chip">${escapeHtml(formatDuration(result.durationMs))}</span>
        </div>
        <div class="section">
          <h2>stdout</h2>
          <pre>${escapeHtml(result.stdout || '—')}</pre>
        </div>
        <div class="section">
          <h2>stderr</h2>
          <pre>${escapeHtml(result.stderr || '—')}</pre>
        </div>
      `
    }

    const renderDetail = () => {
      const script = activeScript()
      if (!script) return '<div class="empty">Select a script from the list.</div>'
      return `
        <div class="hero">
          <h2><code>${escapeHtml(script.id)}</code></h2>
          <p>${escapeHtml(script.description)}</p>
          <div class="chips">
            <span class="chip"><code>${escapeHtml(script.command)}</code></span>
          </div>
        </div>
        <div class="toolbar">
          <button type="button" class="btn" data-action="run"${running ? ' disabled' : ''}>Run script</button>
        </div>
        <div id="script-result">${renderResult()}</div>
      `
    }

    const render = () => {
      mount.innerHTML = `
        <aside>
          <div class="search-row">
            <input id="search" type="search" placeholder="Search scripts…" autocomplete="off" value="${escapeHtml(filter)}" />
            <button type="button" id="view-toggle" class="icon-btn" data-action="toggle-view" title="Toggle view" aria-label="Toggle view">
              ${view === 'list' ? ICON_LIST : ICON_TREE}
            </button>
          </div>
          <div id="script-count">${escapeHtml(countLabel())}</div>
          <div id="script-list">${renderList()}</div>
        </aside>
        <div id="content">${renderDetail()}</div>
      `
    }

    const syncList = () => {
      const list = document.getElementById('script-list')
      if (list) list.innerHTML = renderList()
      const count = document.getElementById('script-count')
      if (count) count.textContent = countLabel()
      const toggle = document.getElementById('view-toggle')
      if (toggle) toggle.innerHTML = view === 'list' ? ICON_LIST : ICON_TREE
    }

    const runActive = async () => {
      const script = activeScript()
      if (!script || running) return
      running = true
      result = null
      render()
      try {
        result = await rpc.call('run-script', { id: script.id }) as ScriptResult
      } catch (error) {
        result = {
          id: script.id,
          ok: false,
          code: null,
          stdout: '',
          stderr: error instanceof Error ? error.message : String(error),
          durationMs: 0,
        }
      } finally {
        running = false
        render()
      }
    }

    mount.addEventListener('click', (event) => {
      const target = event.target as HTMLElement
      if (target.closest('[data-action="toggle-view"]')) {
        view = view === 'tree' ? 'list' : 'tree'
        writeView(view)
        syncList()
        return
      }
      const item = target.closest('[data-id]') as HTMLElement | null
      if (item?.dataset.id && item.classList.contains('item')) {
        activeId = item.dataset.id
        result = null
        render()
        return
      }
      if (target.closest('[data-action="run"]')) {
        void runActive()
      }
    })

    mount.addEventListener('toggle', (event) => {
      const el = event.target
      if (!(el instanceof HTMLDetailsElement) || !el.dataset.path) return
      if (el.open) collapsed.delete(el.dataset.path)
      else collapsed.add(el.dataset.path)
    }, true)

    mount.addEventListener('input', (event) => {
      const target = event.target as HTMLInputElement
      if (target.id !== 'search') return
      filter = target.value
      syncList()
    })

    const revision = await rpc.sharedState<{ n: number }>('scripts-revision')
    revision.on('updated', (state) => {
      if (state.n === 0) return
      void (async () => {
        scripts = await rpc.call('list-scripts') as ScriptEntry[]
        if (activeId && !scripts.some(item => item.id === activeId)) {
          activeId = scripts[0]?.id ?? null
          result = null
        }
        render()
      })()
    })

    render()
  })().catch((error) => {
    mount.className = 'empty'
    mount.textContent = error instanceof Error ? error.message : String(error)
  })
}
