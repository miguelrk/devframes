export type DevframeBaseOptions = {
    id?: string;
    groupId?: string;
    name?: string;
    icon?: string;
    description?: string;
    homepage?: string;
    clientAssets?: string;
};
/** JSON Schema subset the input form can render. */
export type JsonSchemaNode = {
    type?: string;
    title?: string;
    description?: string;
    enum?: Array<string | number>;
    default?: unknown;
    format?: string;
    properties?: Record<string, JsonSchemaNode>;
    required?: string[];
    items?: JsonSchemaNode;
    anyOf?: JsonSchemaNode[];
    oneOf?: JsonSchemaNode[];
    $ref?: string;
    $defs?: Record<string, JsonSchemaNode>;
    additionalProperties?: unknown;
};
export type FormSchema = {
    type: 'object';
    properties: Record<string, JsonSchemaNode>;
    required: string[];
};
export declare const EMPTY_FORM_SCHEMA: FormSchema;
export type PdfTemplateEntry = {
    id: string;
    /** Sidebar group heading in tree mode. */
    group: string;
    /** Sidebar row label. */
    label: string;
    /** Extra searchable text (ids, aliases). */
    searchText?: string;
    status?: string | null;
};
export type PdfTemplateUnit = {
    title: string;
    required: boolean;
    options: Array<{
        value: string;
        label: string;
    }>;
};
export type PdfTemplateDescription = {
    templateId: string;
    unit?: PdfTemplateUnit | null;
    previewUnit?: string | null;
    schema: FormSchema;
    sample: Record<string, unknown>;
    /**
     * HTTP path or absolute URL for the Open button.
     * The client appends `?unit=` when a unit is selected.
     * Omit or leave null to hide Open.
     */
    openUrl?: string | null;
    /**
     * Raw Comark markdown for the Template tab.
     * Omit or leave null when the host has no source to show.
     */
    source?: string | null;
};
export type PdfDiagnostics = {
    errors: string[];
    warnings: string[];
};
export type PdfRenderArgs = {
    templateId: string;
    unit?: string;
    input?: Record<string, unknown>;
};
export type PdfRenderResult = {
    ok: boolean;
    pdfBase64?: string;
    error?: string;
    diagnostics: PdfDiagnostics;
};
export type PdfRenderAllResult = {
    id: string;
    ok: boolean;
    diagnostics: PdfDiagnostics;
};
/**
 * Host adapter. The dock does not know where templates live or how they render.
 */
export type PdfTemplatesProvider = {
    list: () => Promise<PdfTemplateEntry[]> | PdfTemplateEntry[];
    describe: (args: {
        templateId: string;
    }) => Promise<({
        ok: true;
    } & PdfTemplateDescription) | {
        ok: false;
        error: string;
    }>;
    render: (args: PdfRenderArgs) => Promise<PdfRenderResult>;
    renderAll?: () => Promise<PdfRenderAllResult[]>;
};
//# sourceMappingURL=types.d.ts.map