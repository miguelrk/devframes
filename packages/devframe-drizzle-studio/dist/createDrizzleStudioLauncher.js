import { createServer } from 'node:http';
import { createProcessLauncher } from '@vitejs/devtools-kit/node';
import { waitForUrl } from './waitForUrl.js';
export const DEFAULT_DRIZZLE_STUDIO_ID = 'devframe-drizzle-studio';
export const DEFAULT_DRIZZLE_STUDIO_GROUP_ID = 'devframes';
const DEFAULT_API_PORT = 4983;
const DEFAULT_UI_PROXY_PORT = 4984;
const DEFAULT_UI_ORIGIN = 'https://local.drizzle.studio';
let studioUiProxyReady;
const ensureStudioUiProxy = (uiProxyPort, uiOrigin) => {
    if (studioUiProxyReady)
        return studioUiProxyReady;
    const url = `http://127.0.0.1:${uiProxyPort}/`;
    studioUiProxyReady = new Promise((resolve, reject) => {
        const server = createServer((req, res) => {
            void (async () => {
                try {
                    const incoming = new URL(req.url ?? '/', url);
                    const target = new URL(incoming.pathname + incoming.search, uiOrigin);
                    const upstream = await fetch(target, {
                        redirect: 'follow',
                        headers: { accept: req.headers.accept ?? '*/*' },
                    });
                    const headers = { 'cache-control': 'no-store' };
                    const contentType = upstream.headers.get('content-type');
                    if (contentType)
                        headers['content-type'] = contentType;
                    res.writeHead(upstream.status, headers);
                    res.end(Buffer.from(await upstream.arrayBuffer()));
                }
                catch (error) {
                    if (!res.headersSent) {
                        res.writeHead(502, { 'content-type': 'text/plain; charset=utf-8' });
                    }
                    res.end(error instanceof Error ? error.message : String(error));
                }
            })();
        });
        server.once('error', (error) => {
            if (error.code === 'EADDRINUSE') {
                resolve(url);
                return;
            }
            studioUiProxyReady = undefined;
            reject(error);
        });
        server.listen(uiProxyPort, '127.0.0.1', () => {
            resolve(url);
        });
    });
    return studioUiProxyReady;
};
const defaultCommand = (apiPort, envFile) => ({
    command: 'pnpm',
    args: [
        'exec',
        'dotenv',
        '-e',
        envFile,
        '--',
        'drizzle-kit',
        'studio',
        '--host',
        '127.0.0.1',
        '--port',
        String(apiPort),
    ],
});
export const createDrizzleStudioLauncher = (options = {}) => {
    const cwd = options.cwd ?? process.cwd();
    const apiPort = options.apiPort ?? DEFAULT_API_PORT;
    const uiProxyPort = options.uiProxyPort ?? DEFAULT_UI_PROXY_PORT;
    const envFile = options.envFile ?? '.env';
    const uiOrigin = options.uiOrigin ?? DEFAULT_UI_ORIGIN;
    const useProxy = options.proxy ?? true;
    const studioApiUrl = `http://127.0.0.1:${apiPort}`;
    const processSpec = options.command ?? defaultCommand(apiPort, envFile);
    return createProcessLauncher({
        id: options.id ?? DEFAULT_DRIZZLE_STUDIO_ID,
        title: options.name ?? 'Drizzle Studio',
        icon: options.icon ?? 'ph:database-duotone',
        groupId: options.groupId ?? DEFAULT_DRIZZLE_STUDIO_GROUP_ID,
        description: options.description ?? 'Browse rows via drizzle-kit studio. UI is served from 127.0.0.1.',
        process: {
            command: processSpec.command,
            args: processSpec.args,
            cwd,
        },
        serve: {
            onReady: async () => {
                await waitForUrl(studioApiUrl);
                if (!useProxy)
                    return studioApiUrl;
                return await ensureStudioUiProxy(uiProxyPort, uiOrigin);
            },
        },
    });
};
//# sourceMappingURL=createDrizzleStudioLauncher.js.map