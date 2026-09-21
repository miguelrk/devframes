export type DevframeBaseOptions = {
  id?: string
  groupId?: string
  name?: string
  icon?: string
  description?: string
  homepage?: string
  clientAssets?: string
}

/** JSON Schema subset the input form can render. */
export type JsonSchemaNode = {
  type?: string
  title?: string
  description?: string
  enum?: Array<string | number>
  default?: unknown
  format?: string
  properties?: Record<string, JsonSchemaNode>
  required?: string[]
  items?: JsonSchemaNode
  anyOf?: JsonSchemaNode[]
  oneOf?: JsonSchemaNode[]
  $ref?: string
  $defs?: Record<string, JsonSchemaNode>
  additionalProperties?: unknown
}

export type FormSchema = {
  type: 'object'
  properties: Record<string, JsonSchemaNode>
  required: string[]
}

export const EMPTY_FORM_SCHEMA: FormSchema = {
  type: 'object',
  properties: {},
  required: [],
}

export type EmailTemplateEntry = {
  id: string
  /** Sidebar group heading in tree mode. */
  group: string
  /** Sidebar row label. */
  label: string
  /** Extra searchable text (ids, aliases). */
  searchText?: string
  status?: string | null
}

export type EmailTemplateUnit = {
  title: string
  required: boolean
  options: Array<{ value: string, label: string }>
}

export type EmailTemplateDescription = {
  templateId: string
  unit?: EmailTemplateUnit | null
  previewUnit?: string | null
  schema: FormSchema
  sample: Record<string, unknown>
  /**
   * HTTP path or absolute URL for the Open button.
   * The client appends `?unit=` when a unit is selected.
   * Omit or leave null to hide Open.
   */
  openUrl?: string | null
  /**
   * Raw Comark markdown for the Template tab.
   * Omit or leave null when the host has no source to show.
   */
  source?: string | null
  /** Locales that have a template file. Folder name is the locale. */
  locales?: string[]
  /** Locale of `source` and of this describe result. */
  locale?: string
}

export type EmailDiagnostics = {
  errors: string[]
  warnings: string[]
}

export type EmailRenderArgs = {
  templateId: string
  unit?: string
  locale?: string
  input?: Record<string, unknown>
}

export type EmailRenderResult = {
  ok: boolean
  html?: string
  subject?: string
  previewText?: string
  error?: string
  diagnostics: EmailDiagnostics
}

export type EmailRenderAllResult = {
  id: string
  ok: boolean
  diagnostics: EmailDiagnostics
}

/**
 * Host adapter. The dock does not know where templates live or how they render.
 */
export type EmailTemplatesProvider = {
  list: () => Promise<EmailTemplateEntry[]> | EmailTemplateEntry[]
  describe: (args: { templateId: string, locale?: string }) => Promise<
    | ({ ok: true } & EmailTemplateDescription)
    | { ok: false, error: string }
  >
  render: (args: EmailRenderArgs) => Promise<EmailRenderResult>
  renderAll?: () => Promise<EmailRenderAllResult[]>
}
