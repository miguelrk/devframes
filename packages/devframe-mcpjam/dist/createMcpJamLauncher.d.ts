import type { Plugin } from 'vite';
import type { DevframeBaseOptions, McpJamHttpOptions, McpJamStdioOptions, McpJamTransport } from './types.js';
export declare const DEFAULT_MCPJAM_ID = "devframe-mcpjam";
export declare const DEFAULT_MCPJAM_GROUP_ID = "devframes";
export declare const DEFAULT_MCPJAM_HOSTED_URL = "https://app.mcpjam.com";
export type CreateMcpJamLauncherOptions = DevframeBaseOptions & {
    cwd?: string;
    inspectorPort?: number;
    inspectorPackage?: string;
    hostedUrl?: string;
    transports?: McpJamTransport[];
    stdio?: McpJamStdioOptions;
    http?: McpJamHttpOptions;
};
export declare const createMcpJamLauncher: (options: CreateMcpJamLauncherOptions) => Plugin;
//# sourceMappingURL=createMcpJamLauncher.d.ts.map