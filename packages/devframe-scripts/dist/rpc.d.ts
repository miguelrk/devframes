import type { DevframeNodeContext } from 'devframe';
import { type RunCommand } from './runCommand.js';
import type { ScriptAllowlistEntry } from './types.js';
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
export declare const registerScriptsRpc: (ctx: DevframeNodeContext, options: ScriptsRpcOptions) => void;
//# sourceMappingURL=rpc.d.ts.map