import { z } from 'zod'

type JsonSchema = {
  type?: string | string[]
  description?: string
  title?: string
  enum?: unknown[]
  properties?: Record<string, JsonSchema>
  required?: string[]
  items?: JsonSchema
  anyOf?: JsonSchema[]
  oneOf?: JsonSchema[]
}

export type FieldKind = 'string' | 'number' | 'integer' | 'boolean' | 'enum' | 'json'

export type FieldInfo = {
  key: string
  description?: string
  required: boolean
  kind: FieldKind
  enumValues?: string[]
}

const isSchema = (value: unknown): value is JsonSchema =>
  Boolean(value) && typeof value === 'object'

const unwrap = (schema: JsonSchema): JsonSchema => {
  const variants = schema.anyOf ?? schema.oneOf
  if (!variants?.length) return schema
  const concrete = variants.find((variant) => {
    if (variant.type === 'null') return false
    if (Array.isArray(variant.type) && variant.type.every(item => item === 'null')) return false
    return true
  })
  return concrete ?? schema
}

const typeNames = (schema: JsonSchema): string[] => {
  const raw = schema.type
  const list = Array.isArray(raw) ? raw : raw ? [raw] : []
  return list.filter(name => name !== 'null')
}

export const fieldsFromSchema = (schema: unknown): FieldInfo[] => {
  if (!isSchema(schema)) return []
  const root = unwrap(schema)
  if (!root.properties) return []
  const required = new Set(Array.isArray(root.required) ? root.required : [])
  return Object.entries(root.properties).map(([key, prop]) => {
    const field = unwrap(prop ?? {})
    const enumValues = (field.enum ?? []).filter((item): item is string => typeof item === 'string')
    const types = typeNames(field)
    let kind: FieldKind = 'json'
    if (enumValues.length) kind = 'enum'
    else if (types.includes('boolean')) kind = 'boolean'
    else if (types.includes('integer')) kind = 'integer'
    else if (types.includes('number')) kind = 'number'
    else if (types.length === 1 && types[0] === 'string') kind = 'string'
    return {
      key,
      description: field.description ?? field.title ?? prop.description,
      required: required.has(key),
      kind,
      enumValues: enumValues.length ? enumValues : undefined,
    }
  })
}

const jsonText = (required: boolean) =>
  z.string().superRefine((value, ctx) => {
    if (!value.trim()) {
      if (required) ctx.addIssue({ code: 'custom', message: 'Required' })
      return
    }
    try {
      JSON.parse(value)
    } catch {
      ctx.addIssue({ code: 'custom', message: 'Invalid JSON' })
    }
  }).transform((value) => {
    if (!value.trim()) return undefined
    return JSON.parse(value) as unknown
  })

const stringField = (required: boolean) => {
  if (required) return z.string().min(1, 'Required')
  return z.preprocess(
    value => (value === '' || value === null ? undefined : value),
    z.string().optional(),
  )
}

const numberField = (required: boolean, integer: boolean) => {
  const message = (issue: { input?: unknown }) => {
    if (issue.input === undefined) return 'Required'
    if (integer && typeof issue.input === 'number' && !Number.isInteger(issue.input)) return 'Use an integer'
    return 'Enter a number'
  }
  const base = z.number({ error: message })
  const parsed = integer ? base.int('Use an integer') : base
  return z.preprocess((value) => {
    if (value === '' || value === null || value === undefined) return undefined
    const next = typeof value === 'number' ? value : Number(value)
    return Number.isNaN(next) ? value : next
  }, required ? parsed : parsed.optional())
}

const enumField = (values: string[], required: boolean) => {
  const entry = z.enum(values as [string, ...string[]], { error: 'Select a value' })
  return z.preprocess(
    value => (value === '' || value === null ? undefined : value),
    required ? entry : entry.optional(),
  )
}

const fieldSchema = (field: FieldInfo): z.ZodType => {
  if (field.kind === 'boolean') return z.boolean()
  if (field.kind === 'integer') return numberField(field.required, true)
  if (field.kind === 'number') return numberField(field.required, false)
  if (field.kind === 'enum' && field.enumValues?.length) return enumField(field.enumValues, field.required)
  if (field.kind === 'string') return stringField(field.required)
  return jsonText(field.required)
}

export const formSchemaFor = (schema: unknown) => {
  const shape: Record<string, z.ZodType> = {}
  for (const field of fieldsFromSchema(schema)) shape[field.key] = fieldSchema(field)
  return z.object(shape)
}

export const emptyFormState = (schema: unknown): Record<string, unknown> => {
  const state: Record<string, unknown> = {}
  for (const field of fieldsFromSchema(schema)) {
    state[field.key] = field.kind === 'boolean' ? false : ''
  }
  return state
}

export const payloadFromState = (
  data: Record<string, unknown>,
  fields: FieldInfo[],
): Record<string, unknown> => {
  const payload: Record<string, unknown> = {}
  for (const field of fields) {
    const value = data[field.key]
    if (field.kind === 'boolean') {
      payload[field.key] = Boolean(value)
      continue
    }
    if (value === undefined || value === '') continue
    payload[field.key] = value
  }
  return payload
}
