import type { DevframeNodeContext } from 'devframe';
import type { ScriptAllowlistEntry } from './types.js';
import type { RunCommand } from './runCommand.js';
export type ScriptsRpcOptions = {
    id: string;
    cwd?: string;
    packageJsonPath?: string;
    scripts?: ScriptAllowlistEntry[];
    include?: string[];
    exclude?: string[];
    includeLifecycle?: boolean;
    runCommand?: RunCommand;
    timeoutMs?: number;
};
export declare const registerScriptsRpc: (ctx: DevframeNodeContext, options: ScriptsRpcOptions) => Promise<void>;
//# sourceMappingURL=rpc.d.ts.map