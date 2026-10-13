export type DevframeBaseOptions = {
    id?: string;
    groupId?: string;
    name?: string;
    icon?: string;
    description?: string;
};
export type ProcessSpec = {
    command: string;
    args: string[];
    env?: Record<string, string>;
};
export type McpJamTransport = {
    id: string;
    label: string;
    description?: string;
    process: ProcessSpec;
};
export type McpJamStdioOptions = {
    label?: string;
    description?: string;
    command?: string;
    args: string[];
    env?: Record<string, string>;
};
export type McpJamHttpOptions = {
    label?: string;
    description?: string;
    serverUrl: string;
    command?: string;
    extraArgs?: string[];
    env?: Record<string, string>;
};
//# sourceMappingURL=types.d.ts.map