/**
 * JSON Schema → DOM form for the Comark PDF dock.
 * The schema comes from `describe-template`. A field exists only when the host
 * declares caller input.
 */

import type { FormSchema, JsonSchemaNode } from '../src/types'

export const FORM_CSS = `
  .form-wrap { padding: 12px 14px 24px; overflow-y: auto; height: 100%; }
  .form-actions { display: flex; gap: 6px; align-items: center; margin-bottom: 12px; }
  .form-actions .spacer { flex: 1; }
  .btn { background: #18181b; border: 1px solid #3f3f46; border-radius: 4px; color: #e5e7eb; padding: 4px 10px; font: inherit; font-size: 12px; cursor: pointer; }
  .btn:hover { background: #27272a; }
  .btn.primary { background: #2563eb; border-color: #2563eb; color: #fff; }
  .btn.primary:hover { background: #1d4ed8; }
  .btn:disabled { opacity: 0.4; cursor: not-allowed; }
  .field { margin-bottom: 10px; }
  .field > label { display: block; color: #a1a1aa; font-size: 11px; margin-bottom: 3px; }
  .field > label .req { color: #f87171; margin-left: 2px; }
  .field .hint { color: #52525b; font-size: 11px; margin-top: 2px; }
  .field input[type="text"], .field input[type="number"], .field input[type="date"], .field select, .field textarea {
    width: 100%; background: #18181b; border: 1px solid #3f3f46; border-radius: 4px;
    color: #e5e7eb; padding: 4px 8px; font: inherit; font-size: 12px;
  }
  .field textarea { min-height: 72px; resize: vertical; font-family: ui-monospace, SFMono-Regular, monospace; }
  .field input:focus, .field select:focus, .field textarea:focus { outline: none; border-color: #2563eb; }
  .field-bool { display: flex; align-items: center; gap: 6px; }
  .field-bool label { color: #e5e7eb; font-size: 12px; margin: 0; }
  fieldset { border: 1px solid #27272a; border-radius: 5px; padding: 8px 10px; margin-bottom: 10px; min-width: 0; }
  legend { color: #d4d4d8; font-size: 11px; font-weight: 600; padding: 0 4px; text-transform: uppercase; letter-spacing: 0.04em; }
  fieldset.collapsed > *:not(legend) { display: none; }
  legend .toggle { cursor: pointer; user-select: none; }
  legend .count { color: #52525b; font-weight: 400; text-transform: none; letter-spacing: 0; margin-left: 4px; }
  .array-item { border: 1px solid #27272a; border-radius: 5px; padding: 8px 10px; margin-bottom: 8px; position: relative; }
  .array-item > .array-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; }
  .array-item > .array-head span { color: #71717a; font-size: 11px; }
  .json-editor { width: 100%; min-height: 320px; background: #18181b; border: 1px solid #3f3f46; border-radius: 4px; color: #e5e7eb; padding: 8px; font: 12px/1.5 ui-monospace, SFMono-Regular, monospace; resize: vertical; }
  .json-error { color: #f87171; font-size: 11px; margin-top: 6px; }
  .form-empty { color: #52525b; font-size: 12px; padding: 8px 0; }
`

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value)

const el = <K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs: Record<string, string> = {},
  children: Array<Node | string> = [],
): HTMLElementTagNameMap[K] => {
  const node = document.createElement(tag)
  for (const [key, value] of Object.entries(attrs)) node.setAttribute(key, value)
  for (const child of children) node.append(child)
  return node
}

const labelOf = (name: string, schema: JsonSchemaNode): string =>
  schema.title ?? name.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/^./, c => c.toUpperCase())

const normalize = (schema: JsonSchemaNode, defs: Record<string, JsonSchemaNode>): JsonSchemaNode => {
  let node = schema

  if (node.$ref) {
    const key = node.$ref.replace('#/$defs/', '')
    node = defs[key] ?? {}
  }

  const union = node.anyOf ?? node.oneOf
  if (union?.length) {
    const branches = union.filter(branch => branch.type !== 'null')
    if (branches.every(branch => branch.type === 'string' && branch.enum)) {
      return { ...node, type: 'string', enum: branches.flatMap(branch => branch.enum ?? []) }
    }
    if (branches.length === 1 && branches[0]) return normalize(branches[0], defs)
    return { ...node, type: 'json' }
  }

  return node
}

type Ctx = {
  defs: Record<string, JsonSchemaNode>
  onChange: () => void
}

const setLeaf = (
  input: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
  parent: Record<string, unknown>,
  key: string,
  read: () => unknown,
  ctx: Ctx,
) => {
  const write = () => {
    const value = read()
    if (value === undefined) delete parent[key]
    else parent[key] = value
    ctx.onChange()
  }
  input.addEventListener('input', write)
  input.addEventListener('change', write)
}

const buildField = (
  name: string,
  schema: JsonSchemaNode,
  parent: Record<string, unknown>,
  required: boolean,
  ctx: Ctx,
): HTMLElement => {
  const node = normalize(schema, ctx.defs)
  const title = labelOf(name, schema)
  const current = parent[name]

  if (node.type === 'object' && node.properties) {
    if (!isPlainObject(parent[name])) parent[name] = { ...(node.default as object ?? {}) }
    const value = parent[name] as Record<string, unknown>
    const set = new Set(node.required ?? [])

    const legend = el('legend', {}, [
      el('span', { class: 'toggle' }, [title]),
    ])
    const fieldset = el('fieldset', {}, [legend])
    for (const [childName, childSchema] of Object.entries(node.properties)) {
      fieldset.append(buildField(childName, childSchema, value, set.has(childName), ctx))
    }
    legend.addEventListener('click', () => fieldset.classList.toggle('collapsed'))
    return fieldset
  }

  if (node.type === 'array' && node.items) {
    if (!Array.isArray(parent[name])) parent[name] = Array.isArray(node.default) ? [...node.default] : []
    const list = parent[name] as unknown[]
    const items = node.items

    const legend = el('legend', {}, [el('span', { class: 'toggle' }, [title])])
    const fieldset = el('fieldset', {}, [legend])
    const body = el('div')
    const addButton = el('button', { type: 'button', class: 'btn' }, ['+ Add'])

    const paint = () => {
      body.replaceChildren()
      list.forEach((_, index) => {
        const head = el('div', { class: 'array-head' }, [el('span', {}, [`#${index + 1}`])])
        const remove = el('button', { type: 'button', class: 'btn' }, ['Remove'])
        remove.addEventListener('click', () => {
          list.splice(index, 1)
          paint()
          ctx.onChange()
        })
        head.append(remove)

        const row = el('div', { class: 'array-item' }, [head])
        row.append(buildField(String(index), items, list as unknown as Record<string, unknown>, false, ctx))
        body.append(row)
      })
      legend.querySelector('.count')?.remove()
      legend.append(el('span', { class: 'count' }, [`(${list.length})`]))
    }

    addButton.addEventListener('click', () => {
      const child = normalize(items, ctx.defs)
      list.push(child.type === 'object' ? {} : child.type === 'array' ? [] : '')
      paint()
      ctx.onChange()
    })

    fieldset.append(body, addButton)
    paint()
    return fieldset
  }

  const wrap = el('div', { class: 'field' })

  if (node.type === 'boolean') {
    const input = el('input', { type: 'checkbox', id: `f-${name}` })
    input.checked = current === true || (current === undefined && node.default === true)
    parent[name] = input.checked
    input.addEventListener('change', () => {
      parent[name] = input.checked
      ctx.onChange()
    })
    wrap.className = 'field field-bool'
    wrap.append(input, el('label', { for: `f-${name}` }, [title]))
    return wrap
  }

  const label = el('label', {}, [title])
  if (required) label.append(el('span', { class: 'req' }, ['*']))
  wrap.append(label)

  if (node.enum?.length) {
    const select = el('select')
    if (!required) select.append(el('option', { value: '' }, ['—']))
    for (const option of node.enum) {
      select.append(el('option', { value: String(option) }, [String(option)]))
    }
    select.value = String(current ?? node.default ?? '')
    setLeaf(select, parent, name, () => (select.value === '' ? undefined : select.value), ctx)
    wrap.append(select)
  }
  else if (node.type === 'json' || node.type === 'object' || node.type === 'array') {
    const area = el('textarea', { spellcheck: 'false' })
    area.value = current === undefined ? '' : JSON.stringify(current, null, 2)
    const error = el('div', { class: 'json-error' })
    area.addEventListener('input', () => {
      if (area.value.trim() === '') {
        delete parent[name]
        error.textContent = ''
      }
      else {
        try {
          parent[name] = JSON.parse(area.value)
          error.textContent = ''
        }
        catch (err) {
          error.textContent = String(err)
        }
      }
      ctx.onChange()
    })
    wrap.append(area, error)
  }
  else if (node.type === 'number' || node.type === 'integer') {
    const input = el('input', { type: 'number', step: node.type === 'integer' ? '1' : 'any' })
    input.value = current === undefined ? String(node.default ?? '') : String(current)
    setLeaf(input, parent, name, () => (input.value === '' ? undefined : Number(input.value)), ctx)
    wrap.append(input)
  }
  else if (node.format === 'markdown') {
    const area = el('textarea', { spellcheck: 'false' })
    area.value = String(current ?? node.default ?? '')
    setLeaf(area, parent, name, () => (area.value === '' ? undefined : area.value), ctx)
    wrap.append(area)
  }
  else {
    const type = node.format === 'date' ? 'date' : 'text'
    const input = el('input', { type })
    input.value = String(current ?? node.default ?? '')
    setLeaf(input, parent, name, () => (input.value === '' ? undefined : input.value), ctx)
    wrap.append(input)
  }

  if (node.description) wrap.append(el('div', { class: 'hint' }, [node.description]))
  return wrap
}

/**
 * Build the input editor for one template.
 * `value` is mutated in place, so the caller always holds the current input object.
 */
export const buildInputForm = (options: {
  schema: FormSchema
  value: Record<string, unknown>
  mode: 'form' | 'json'
  onChange: () => void
}): HTMLElement => {
  const { schema, value, mode, onChange } = options
  const container = el('div')

  if (mode === 'json') {
    const area = el('textarea', { class: 'json-editor', spellcheck: 'false' })
    area.value = JSON.stringify(value, null, 2)
    const error = el('div', { class: 'json-error' })
    area.addEventListener('input', () => {
      try {
        const parsed = JSON.parse(area.value)
        if (!isPlainObject(parsed)) throw new TypeError('Input must be a JSON object')
        for (const key of Object.keys(value)) delete value[key]
        Object.assign(value, parsed)
        error.textContent = ''
        onChange()
      }
      catch (err) {
        error.textContent = String(err)
      }
    })
    container.append(area, error)
    return container
  }

  const names = Object.keys(schema.properties)
  if (!names.length) {
    container.append(el('div', { class: 'form-empty' }, ['This template has no caller inputs.']))
    return container
  }

  const defs = Object.values(schema.properties).reduce<Record<string, JsonSchemaNode>>(
    (acc, node) => Object.assign(acc, node.$defs ?? {}),
    {},
  )
  const required = new Set(schema.required)
  const ctx: Ctx = { defs, onChange }

  for (const name of names) {
    container.append(buildField(name, schema.properties[name]!, value, required.has(name), ctx))
  }

  return container
}
