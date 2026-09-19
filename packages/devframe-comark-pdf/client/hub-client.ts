import type { DevframeScopedClientContext } from 'devframe/client'
import type { FormSchema, PdfTemplateDescription, PdfTemplateEntry } from '../src/types'
import { connectDevframe } from 'devframe/client'
import { buildInputForm, FORM_CSS } from './form'

type TemplateDescription = ({ ok: true } & PdfTemplateDescription) | { ok: false, error: string }

type DiagnosticsResult = {
  id: string
  ok: boolean
  diagnostics: { errors: string[], warnings: string[] }
}

type RenderResult = {
  ok: boolean
  pdfBase64?: string
  error?: string
  diagnostics: { errors: string[], warnings: string[] }
}

const SCOPE = (globalThis as { __DEVFRAME_CONFIG__?: { id?: string } }).__DEVFRAME_CONFIG__?.id
  ?? 'devframe-comark-pdf'

const CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body, #app { width: 100%; height: 100%; overflow: hidden; font: 13px/1.4 ui-sans-serif, system-ui, sans-serif; background: #0f0f10; color: #e5e7eb; }
  #app { display: flex; }
  aside { width: 280px; min-width: 200px; max-width: 360px; display: flex; flex-direction: column; border-right: 1px solid #27272a; overflow: hidden; }
  .toolbar { padding: 8px; display: flex; gap: 6px; align-items: center; border-bottom: 1px solid #27272a; flex-shrink: 0; }
  .toolbar input { flex: 1; min-width: 0; background: #18181b; border: 1px solid #3f3f46; border-radius: 4px; color: #e5e7eb; padding: 4px 8px; font: inherit; }
  .toolbar input::placeholder { color: #71717a; }
  .toolbar .icon-btn { flex: none; }
  .tree { flex: 1; overflow-y: auto; padding: 4px 0; }
  .group-header { padding: 4px 10px 2px; color: #71717a; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; }
  .row { display: flex; align-items: center; gap: 6px; padding: 4px 10px; cursor: pointer; border-radius: 4px; margin: 0 4px; }
  .row:hover { background: #27272a; }
  .row.active { background: #1e40af33; }
  .row-name { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; }
  .chip { display: inline-block; padding: 1px 5px; border-radius: 99px; font-size: 10px; font-weight: 600; flex-shrink: 0; }
  .chip-green { background: #14532d55; color: #4ade80; }
  .chip-yellow { background: #713f1255; color: #fbbf24; }
  .chip-red { background: #7f1d1d55; color: #f87171; }
  .chip-gray { background: #27272a; color: #71717a; }
  main { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
  .tabs { display: flex; align-items: center; border-bottom: 1px solid #27272a; flex-shrink: 0; }
  .tab { padding: 8px 14px; cursor: pointer; border-bottom: 2px solid transparent; color: #71717a; font-size: 12px; }
  .tab.active { border-color: #2563eb; color: #e5e7eb; }
  .tab-actions { margin-left: auto; display: flex; gap: 4px; padding-right: 8px; }
  .icon-btn { background: transparent; border: 1px solid #3f3f46; border-radius: 4px; color: #a1a1aa; width: 28px; height: 28px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; padding: 0; }
  .icon-btn:hover { background: #27272a; color: #e5e7eb; }
  .icon-btn:disabled { opacity: 0.4; cursor: not-allowed; }
  .icon-btn.primary { background: #2563eb; border-color: #2563eb; color: white; }
  .icon-btn.primary:hover { background: #1d4ed8; }
  .panel { flex: 1; overflow: auto; }
  iframe { width: 100%; height: 100%; border: none; background: white; }
  .diagnostics { padding: 16px; }
  .diag-item { padding: 6px 0; border-bottom: 1px solid #27272a; font-size: 12px; }
  .diag-error { color: #f87171; }
  .diag-warn { color: #fbbf24; }
  .diag-ok { color: #4ade80; }
  .empty { display: flex; align-items: center; justify-content: center; height: 100%; color: #52525b; font-size: 13px; }
${FORM_CSS}`

const templates: PdfTemplateEntry[] = []
const diagByTemplate = new Map<string, DiagnosticsResult>()
const descriptions = new Map<string, TemplateDescription>()
const inputByTemplate = new Map<string, Record<string, unknown>>()
const unitByTemplate = new Map<string, string>()

let selectedId = ''
let selectedTab: 'input' | 'pdf' | 'diagnostics' = 'pdf'
let inputMode: 'form' | 'json' = 'form'
let treeMode: 'tree' | 'flat' = (sessionStorage.getItem(`${SCOPE}-mode`) as 'tree' | 'flat') || 'tree'
let searchQuery = ''
let pdfBlobUrl = ''
let rendering = false
let renderToken = 0

let root: HTMLElement | null = null
let scoped: DevframeScopedClientContext<typeof SCOPE> | null = null

const escapeHtml = (value: string): string =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')

const siteOrigin = (): string => {
  try {
    return window.parent.location.origin
  }
  catch {
    return window.location.origin
  }
}

const describedOk = (id: string) => {
  const description = descriptions.get(id)
  return description?.ok ? description : null
}

const describeSelected = async (id: string): Promise<void> => {
  if (descriptions.has(id) || !scoped) return

  const description = await scoped.rpc.call('describe-template', { templateId: id }) as TemplateDescription
  descriptions.set(id, description)
  if (!description.ok) return

  if (!unitByTemplate.has(id)) {
    const fallback = description.previewUnit ?? description.unit?.options[0]?.value
    if (fallback) unitByTemplate.set(id, fallback)
  }
  if (!inputByTemplate.has(id)) {
    inputByTemplate.set(id, structuredClone(description.sample))
  }
}

const statusChip = (id: string) => {
  const d = diagByTemplate.get(id)
  if (!d) return `<span class="chip chip-gray">?</span>`
  if (d.diagnostics.errors.length > 0) return `<span class="chip chip-red">${d.diagnostics.errors.length}E</span>`
  if (d.diagnostics.warnings.length > 0) return `<span class="chip chip-yellow">${d.diagnostics.warnings.length}W</span>`
  return `<span class="chip chip-green">OK</span>`
}

const templateMatches = (t: PdfTemplateEntry, q: string): boolean => {
  const hay = [t.id, t.group, t.label, t.searchText ?? ''].join(' ').toLowerCase()
  return hay.includes(q)
}

const filteredTemplates = () => {
  const q = searchQuery.toLowerCase()
  return q ? templates.filter(t => templateMatches(t, q)) : templates
}

const renderTree = (): string => {
  const list = filteredTemplates()
  if (!list.length) return `<div class="empty">No templates</div>`

  if (treeMode === 'flat') {
    return list.map(t => `
      <div class="row ${t.id === selectedId ? 'active' : ''}" data-id="${escapeHtml(t.id)}">
        <span class="row-name">${escapeHtml(t.id)}</span>
        ${statusChip(t.id)}
      </div>
    `).join('')
  }

  const groups = new Map<string, PdfTemplateEntry[]>()
  for (const t of list) {
    const g = groups.get(t.group) ?? []
    g.push(t)
    groups.set(t.group, g)
  }

  return [...groups.entries()].map(([group, entries]) => `
    <div class="group-header">${escapeHtml(group)}</div>
    ${entries.map(t => `
      <div class="row ${t.id === selectedId ? 'active' : ''}" data-id="${escapeHtml(t.id)}">
        <span class="row-name">${escapeHtml(t.label)}</span>
        ${statusChip(t.id)}
      </div>
    `).join('')}
  `).join('')
}

const openIcon = `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 3H3.5A1.5 1.5 0 0 0 2 4.5v8A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V10M10 2h4v4M7 9l7-7"/></svg>`
const renderIcon = `<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M4 2.5v11l9-5.5L4 2.5z"/></svg>`
const ICON_TREE = `<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M2 2h5v2H2zm7 5h5v2H9zm0 5h5v2H9zM4 4v9h1.5V8.5H9V7H5.5V4z"/></svg>`
const ICON_LIST = `<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M2 3h12v1.5H2zm0 4.25h12v1.5H2zM2 11.5h12V13H2z"/></svg>`
const ICON_RUN_ALL = `<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M2 2.5v11l5.5-5.5L2 2.5zm7 0v11l5.5-5.5L9 2.5z"/></svg>`

const renderMainPanel = (): string => {
  if (!selectedId) return `<div class="empty">Select a template</div>`

  const description = describedOk(selectedId)
  const inputCount = description ? Object.keys(description.schema.properties).length : 0
  const inputBadge = description?.unit ? inputCount + 1 : inputCount
  const canOpen = Boolean(description?.openUrl)

  const tabs = `
    <div class="tabs">
      <div class="tab ${selectedTab === 'input' ? 'active' : ''}" data-tab="input">Input${inputBadge ? ` (${inputBadge})` : ''}</div>
      <div class="tab ${selectedTab === 'pdf' ? 'active' : ''}" data-tab="pdf">PDF</div>
      <div class="tab ${selectedTab === 'diagnostics' ? 'active' : ''}" data-tab="diagnostics">Diagnostics</div>
      <div class="tab-actions">
        <button class="icon-btn primary" id="btn-render" title="Render" ${rendering ? 'disabled' : ''}>${renderIcon}</button>
        ${canOpen ? `<button class="icon-btn" id="btn-open" title="Open via host HTTP route">${openIcon}</button>` : ''}
      </div>
    </div>
  `

  if (selectedTab === 'input') {
    if (!description) {
      const failed = descriptions.get(selectedId)
      const message = failed && !failed.ok ? failed.error : 'Loading contract…'
      return `${tabs}<div class="panel"><div class="empty">${escapeHtml(message)}</div></div>`
    }
    return `${tabs}<div class="panel"><div class="form-wrap" id="form-wrap"></div></div>`
  }

  if (selectedTab === 'pdf') {
    const panel = pdfBlobUrl
      ? `<div class="panel"><iframe src="${pdfBlobUrl}" title="PDF preview"></iframe></div>`
      : `<div class="panel"><div class="empty">${rendering ? 'Rendering…' : 'No PDF yet — click Render'}</div></div>`
    return `${tabs}${panel}`
  }

  const d = diagByTemplate.get(selectedId)
  if (!d) {
    return `${tabs}<div class="panel"><div class="empty">Not yet rendered</div></div>`
  }

  const items = [
    ...d.diagnostics.errors.map(e => `<div class="diag-item diag-error">✕ ${escapeHtml(e)}</div>`),
    ...d.diagnostics.warnings.map(w => `<div class="diag-item diag-warn">⚠ ${escapeHtml(w)}</div>`),
    ...(d.diagnostics.errors.length === 0 && d.diagnostics.warnings.length === 0
      ? [`<div class="diag-item diag-ok">✓ No issues</div>`]
      : []),
  ].join('')

  return `${tabs}<div class="panel"><div class="diagnostics">${items}</div></div>`
}

const openSelected = () => {
  const description = describedOk(selectedId)
  if (!description?.openUrl) return
  const url = new URL(description.openUrl, siteOrigin())
  const unit = unitByTemplate.get(selectedId)
  if (unit) url.searchParams.set('unit', unit)
  window.open(url.toString(), '_blank', 'noopener,noreferrer')
}

const render = () => {
  if (!root) return
  const activeId = document.activeElement instanceof HTMLElement ? document.activeElement.id : ''
  const searchEl = root.querySelector('#search') as HTMLInputElement | null
  const caret = searchEl ? searchEl.selectionStart : null

  root.innerHTML = `
    <style>${CSS}</style>
    <aside>
      <div class="toolbar">
        <input id="search" type="search" placeholder="Filter templates…" autocomplete="off" value="${escapeHtml(searchQuery)}" />
        <button type="button" id="btn-mode" class="icon-btn" title="Toggle view" aria-label="Toggle view">${treeMode === 'flat' ? ICON_LIST : ICON_TREE}</button>
        <button type="button" id="btn-run-all" class="icon-btn" title="Render all" aria-label="Render all">${ICON_RUN_ALL}</button>
      </div>
      <div class="tree" id="tree">${renderTree()}</div>
    </aside>
    <main>${renderMainPanel()}</main>
  `

  root.querySelector('#search')?.addEventListener('input', (e) => {
    searchQuery = (e.target as HTMLInputElement).value
    render()
  })

  root.querySelector('#btn-mode')?.addEventListener('click', () => {
    treeMode = treeMode === 'tree' ? 'flat' : 'tree'
    sessionStorage.setItem(`${SCOPE}-mode`, treeMode)
    render()
  })

  root.querySelector('#btn-run-all')?.addEventListener('click', runAll)

  root.querySelectorAll('.row[data-id]').forEach((el) => {
    el.addEventListener('click', () => {
      const id = (el as HTMLElement).dataset.id!
      selectedId = id
      pdfBlobUrl = ''
      selectedTab = 'pdf'
      render()
      void selectTemplate(id)
    })
  })

  root.querySelectorAll('.tab[data-tab]').forEach((el) => {
    el.addEventListener('click', () => {
      selectedTab = (el as HTMLElement).dataset.tab as typeof selectedTab
      render()
    })
  })

  root.querySelector('#btn-render')?.addEventListener('click', renderSelected)
  root.querySelector('#btn-open')?.addEventListener('click', openSelected)

  mountInputForm()

  if (activeId) {
    const selector = typeof globalThis.CSS?.escape === 'function'
      ? globalThis.CSS.escape(activeId)
      : activeId.replace(/[^a-zA-Z0-9_-]/g, '\\$&')
    const restored = root.querySelector(`#${selector}`) as HTMLInputElement | null
    restored?.focus()
    if (restored && caret != null && typeof restored.setSelectionRange === 'function') {
      restored.setSelectionRange(caret, caret)
    }
  }
}

const mountInputForm = () => {
  const mount = root?.querySelector('#form-wrap')
  const description = describedOk(selectedId)
  if (!mount || !description) return

  const value = inputByTemplate.get(selectedId) ?? {}
  inputByTemplate.set(selectedId, value)

  const actions = document.createElement('div')
  actions.className = 'form-actions'
  actions.innerHTML = `
    <button type="button" class="btn" id="btn-mode-form" ${inputMode === 'form' ? 'disabled' : ''}>Form</button>
    <button type="button" class="btn" id="btn-mode-json" ${inputMode === 'json' ? 'disabled' : ''}>JSON</button>
    <span class="spacer"></span>
    ${Object.keys(description.sample).length ? `<button type="button" class="btn" id="btn-sample">Load sample</button>` : ''}
    <button type="button" class="btn" id="btn-clear">Clear</button>
    <button type="button" class="btn primary" id="btn-form-render">Render</button>
  `
  mount.replaceChildren(actions)

  if (description.unit) {
    const field = document.createElement('div')
    field.className = 'field'
    const selected = unitByTemplate.get(selectedId) ?? ''
    field.innerHTML = `
      <label>${escapeHtml(description.unit.title)}<span class="req">*</span></label>
      <select id="unit-select">
        <option value="">— ${description.unit.options.length} available —</option>
        ${description.unit.options
          .map(option => `<option value="${escapeHtml(option.value)}" ${option.value === selected ? 'selected' : ''}>${escapeHtml(option.label)}</option>`)
          .join('')}
      </select>
    `
    field.querySelector('#unit-select')?.addEventListener('change', (event) => {
      unitByTemplate.set(selectedId, (event.target as HTMLSelectElement).value)
    })
    mount.append(field)
  }

  mount.append(buildInputForm({
    schema: description.schema as FormSchema,
    value,
    mode: inputMode,
    onChange: () => {},
  }))

  actions.querySelector('#btn-mode-form')?.addEventListener('click', () => {
    inputMode = 'form'
    mountInputForm()
  })
  actions.querySelector('#btn-mode-json')?.addEventListener('click', () => {
    inputMode = 'json'
    mountInputForm()
  })
  actions.querySelector('#btn-sample')?.addEventListener('click', () => {
    inputByTemplate.set(selectedId, structuredClone(description.sample))
    mountInputForm()
  })
  actions.querySelector('#btn-clear')?.addEventListener('click', () => {
    inputByTemplate.set(selectedId, {})
    mountInputForm()
  })
  actions.querySelector('#btn-form-render')?.addEventListener('click', renderSelected)
}

const selectTemplate = async (id: string) => {
  await describeSelected(id).catch(err => console.error('[comark-pdf] describe failed', err))
  if (selectedId !== id) return
  await renderSelected()
}

const renderSelected = async () => {
  if (!selectedId || !scoped) return

  const token = ++renderToken
  const id = selectedId
  rendering = true
  selectedTab = 'pdf'
  render()

  try {
    const result = await scoped.rpc.call(
      'render-template',
      {
        templateId: id,
        unit: unitByTemplate.get(id) || undefined,
        input: inputByTemplate.get(id) ?? {},
      },
    ) as RenderResult

    if (token !== renderToken) return

    diagByTemplate.set(id, {
      id,
      ok: result.ok,
      diagnostics: result.diagnostics,
    })

    if (result.ok && result.pdfBase64) {
      const bytes = Uint8Array.from(atob(result.pdfBase64), c => c.charCodeAt(0))
      const blob = new Blob([bytes], { type: 'application/pdf' })
      if (pdfBlobUrl) URL.revokeObjectURL(pdfBlobUrl)
      pdfBlobUrl = URL.createObjectURL(blob)
    }
    else {
      pdfBlobUrl = ''
      if (result.error || result.diagnostics.errors.length) {
        selectedTab = 'diagnostics'
      }
    }
  }
  catch (err) {
    if (token !== renderToken) return
    diagByTemplate.set(id, {
      id,
      ok: false,
      diagnostics: { errors: [String(err)], warnings: [] },
    })
    pdfBlobUrl = ''
    selectedTab = 'diagnostics'
  }

  if (token !== renderToken) return
  rendering = false
  render()
}

const runAll = async () => {
  if (!scoped) return
  try {
    const results = await scoped.rpc.call('render-all') as DiagnosticsResult[]
    for (const r of results) {
      diagByTemplate.set(r.id, r)
    }
    render()
  }
  catch (err) {
    console.error('[comark-pdf] render-all failed', err)
  }
}

;(async () => {
  root = document.getElementById('app')
  if (!root) return

  root.innerHTML = `<style>${CSS}</style><div class="empty">Connecting…</div>`

  try {
    const client = await connectDevframe()
    scoped = client.scope(SCOPE)

    const list = await scoped.rpc.call('list-templates') as PdfTemplateEntry[]
    templates.push(...list)

    render()
    runAll().catch(() => {})
  }
  catch (err) {
    root.innerHTML = `<style>${CSS}</style><div class="empty">Connection failed: ${err}</div>`
  }
})()
