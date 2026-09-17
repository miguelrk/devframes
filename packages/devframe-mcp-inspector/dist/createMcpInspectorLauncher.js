import { createProcessLauncher } from '@vitejs/devtools-kit/node';
import { waitForUrl } from './waitForUrl.js';
export const DEFAULT_MCP_INSPECTOR_ID = 'devframe-mcp-inspector';
export const DEFAULT_MCP_INSPECTOR_GROUP_ID = 'devframes';
const DEFAULT_INSPECTOR_PORT = 6274;
const buildTransports = (options) => {
    if (options.transports?.length)
        return options.transports;
    const transports = [];
    if (options.stdio) {
        transports.push({
            id: 'stdio',
            label: options.stdio.label ?? 'stdio',
            description: options.stdio.description,
            process: {
                command: options.stdio.command ?? 'pnpm',
                args: options.stdio.args,
                env: options.stdio.env,
            },
        });
    }
    if (options.http) {
        const command = options.http.command ?? 'pnpm';
        transports.push({
            id: 'http',
            label: options.http.label ?? 'HTTP',
            description: options.http.description,
            process: {
                command,
                args: [
                    'exec',
                    'mcp-inspector',
                    '--transport',
                    'http',
                    '--server-url',
                    options.http.serverUrl,
                    ...(options.http.headers ?? []),
                    ...(options.http.extraArgs ?? []),
                ],
                env: options.http.env,
            },
        });
    }
    if (!transports.length) {
        throw new Error('createMcpInspectorLauncher requires transports or stdio/http options');
    }
    return transports;
};
export const createMcpInspectorLauncher = (options) => {
    const transports = buildTransports(options);
    const cwd = options.cwd ?? process.cwd();
    const inspectorPort = options.inspectorPort ?? DEFAULT_INSPECTOR_PORT;
    const inspectorUrl = `http://127.0.0.1:${inspectorPort}`;
    return createProcessLauncher({
        id: options.id ?? DEFAULT_MCP_INSPECTOR_ID,
        title: options.name ?? 'MCP Inspector',
        icon: options.icon ?? 'ph:plugs-connected-duotone',
        groupId: options.groupId ?? DEFAULT_MCP_INSPECTOR_GROUP_ID,
        description: options.description ?? 'Official MCP Inspector. Pick a transport, then Launch.',
        roots: transports.length > 1
            ? transports.map(transport => ({
                value: transport.id,
                label: transport.label,
                description: transport.description,
            }))
            : undefined,
        process: ({ root }) => {
            const transport = transports.find(item => item.id === root) ?? transports[0];
            if (!transport) {
                throw new Error('No MCP transport configured');
            }
            return {
                command: transport.process.command,
                args: transport.process.args,
                cwd,
                env: {
                    ...Object.fromEntries(Object.entries(process.env).filter((entry) => entry[1] != null)),
                    MCP_AUTO_OPEN_ENABLED: 'false',
                    ...transport.process.env,
                },
            };
        },
        serve: {
            onReady: async () => {
                await waitForUrl(inspectorUrl);
                return inspectorUrl;
            },
        },
    });
};
//# sourceMappingURL=createMcpInspectorLauncher.js.map