import type { PdfTemplatesProvider } from './types.js';
export type WriteTemplatePdfsOptions = {
    provider: PdfTemplatesProvider;
    outDir: string;
    onlyIds?: string[];
    concurrency?: number;
    log?: (line: string) => void;
};
/**
 * Render every host template (or a subset) to `{outDir}/{id}.{locale}.pdf`.
 * One file per locale. Uses `describe` sample + preview unit, then `render`.
 */
export declare const writeTemplatePdfs: (options: WriteTemplatePdfsOptions) => Promise<{
    ok: number;
    fail: number;
    paths: string[];
}>;
//# sourceMappingURL=generate.d.ts.map