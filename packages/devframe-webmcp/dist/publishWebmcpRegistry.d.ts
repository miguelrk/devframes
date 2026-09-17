import type { WebmcpRegistryPublisher, WebmcpSnapshot } from './types.js';
export declare const DEFAULT_WEBMCP_REGISTRY_KEY = "__DEVFRAME_WEBMCP_REGISTRY__";
export type PublishWebmcpRegistryOptions = {
    key?: string;
};
export declare const publishWebmcpRegistry: (getSnapshot: () => WebmcpSnapshot, options?: PublishWebmcpRegistryOptions) => WebmcpRegistryPublisher;
//# sourceMappingURL=publishWebmcpRegistry.d.ts.map