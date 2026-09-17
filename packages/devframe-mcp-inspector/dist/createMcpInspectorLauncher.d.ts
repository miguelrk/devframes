import type { Plugin } from 'vite';
import type { DevframeBaseOptions, McpHttpOptions, McpStdioOptions, McpTransport } from './types.js';
export declare const DEFAULT_MCP_INSPECTOR_ID = "devframe-mcp-inspector";
export declare const DEFAULT_MCP_INSPECTOR_GROUP_ID = "devframes";
export type CreateMcpInspectorLauncherOptions = DevframeBaseOptions & {
    cwd?: string;
    inspectorPort?: number;
    transports?: McpTransport[];
    stdio?: McpStdioOptions;
    http?: McpHttpOptions;
};
export declare const createMcpInspectorLauncher: (options: CreateMcpInspectorLauncherOptions) => Plugin;
//# sourceMappingURL=createMcpInspectorLauncher.d.ts.map