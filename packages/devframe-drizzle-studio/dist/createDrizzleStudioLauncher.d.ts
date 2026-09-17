import type { Plugin } from 'vite';
import type { DevframeBaseOptions, ProcessSpec } from './types.js';
export declare const DEFAULT_DRIZZLE_STUDIO_ID = "devframe-drizzle-studio";
export declare const DEFAULT_DRIZZLE_STUDIO_GROUP_ID = "devframes";
export type CreateDrizzleStudioLauncherOptions = DevframeBaseOptions & {
    cwd?: string;
    apiPort?: number;
    uiProxyPort?: number;
    envFile?: string;
    uiOrigin?: string;
    proxy?: boolean;
    command?: ProcessSpec;
};
export declare const createDrizzleStudioLauncher: (options?: CreateDrizzleStudioLauncherOptions) => Plugin;
//# sourceMappingURL=createDrizzleStudioLauncher.d.ts.map