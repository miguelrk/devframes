import type { DevframeNodeContext } from 'devframe';
import type { PdfTemplatesProvider } from './types.js';
export type ComarkPdfRpcOptions = {
    id: string;
    provider: PdfTemplatesProvider;
};
export declare const registerComarkPdfRpc: (ctx: DevframeNodeContext, options: ComarkPdfRpcOptions) => Promise<void>;
//# sourceMappingURL=rpc.d.ts.map