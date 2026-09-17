import type { DevframeBaseOptions } from './types.js';
export declare const DEFAULT_WEBMCP_ID = "devframe-webmcp";
export declare const DEFAULT_WEBMCP_GROUP_ID = "devframes";
export type CreateWebmcpDevframeOptions = DevframeBaseOptions & {
    registryKey?: string;
};
export declare const createWebmcpDevframe: (options?: CreateWebmcpDevframeOptions) => Promise<import("devframe").DevframeDefinition>;
//# sourceMappingURL=createWebmcpDevframe.d.ts.map