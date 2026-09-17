import type { DevframeBaseOptions } from './types.js';
export declare const DEFAULT_QUERY_ID = "devframe-tanstack-query";
export declare const DEFAULT_QUERY_GROUP_ID = "devframes";
export declare const DEFAULT_QUERY_CLIENT_KEY = "__TANSTACK_QUERY_CLIENT__";
export type CreateQueryDevframeOptions = DevframeBaseOptions & {
    clientKey?: string;
};
export declare const createQueryDevframe: (options?: CreateQueryDevframeOptions) => Promise<import("devframe").DevframeDefinition>;
//# sourceMappingURL=createQueryDevframe.d.ts.map