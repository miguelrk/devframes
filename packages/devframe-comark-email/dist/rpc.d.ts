import type { DevframeNodeContext } from 'devframe';
import type { EmailTemplatesProvider } from './types.js';
export type ComarkEmailRpcOptions = {
    id: string;
    provider: EmailTemplatesProvider;
};
export declare const registerComarkEmailRpc: (ctx: DevframeNodeContext, options: ComarkEmailRpcOptions) => void;
//# sourceMappingURL=rpc.d.ts.map