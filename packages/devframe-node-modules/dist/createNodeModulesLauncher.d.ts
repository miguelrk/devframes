import type { Plugin } from 'vite';
import type { DevframeBaseOptions, ProcessSpec } from './types.js';
export declare const DEFAULT_NODE_MODULES_ID = "devframe-node-modules";
export declare const DEFAULT_NODE_MODULES_GROUP_ID = "devframes";
export type CreateNodeModulesLauncherOptions = DevframeBaseOptions & {
    cwd?: string;
    port?: number;
    extraArgs?: string[];
    command?: ProcessSpec;
};
export declare const createNodeModulesLauncher: (options?: CreateNodeModulesLauncherOptions) => Plugin;
//# sourceMappingURL=createNodeModulesLauncher.d.ts.map