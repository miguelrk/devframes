import type { DevframeBaseOptions, PdfTemplatesProvider } from './types.js';
export declare const DEFAULT_COMARK_PDF_ID = "devframe-comark-pdf";
export declare const DEFAULT_COMARK_PDF_GROUP_ID = "devframes";
export type CreateComarkPdfDevframeOptions = DevframeBaseOptions & {
    provider: PdfTemplatesProvider;
};
export declare const createComarkPdfDevframe: (options: CreateComarkPdfDevframeOptions) => Promise<import("devframe").DevframeDefinition>;
export default createComarkPdfDevframe;
//# sourceMappingURL=createComarkPdfDevframe.d.ts.map