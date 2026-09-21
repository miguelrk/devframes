import type { EmailTemplatesProvider } from './types.js';
export type WriteTemplateEmailsOptions = {
    provider: EmailTemplatesProvider;
    outDir: string;
    onlyIds?: string[];
    concurrency?: number;
    log?: (line: string) => void;
};
/**
 * Render every host template (or a subset) to `{outDir}/{id}.{locale}.html`.
 * One file per locale. Uses `describe` sample + preview unit, then `render`.
 */
export declare const writeTemplateEmails: (options: WriteTemplateEmailsOptions) => Promise<{
    ok: number;
    fail: number;
    paths: string[];
}>;
//# sourceMappingURL=generate.d.ts.map