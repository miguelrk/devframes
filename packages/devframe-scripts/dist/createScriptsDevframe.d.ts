import type { DevframeBaseOptions, ScriptAllowlistEntry } from './types.js';
import type { RunCommand } from './runCommand.js';
export declare const DEFAULT_SCRIPTS_ID = "devframe-scripts";
export declare const DEFAULT_SCRIPTS_GROUP_ID = "devframes";
export type CreateScriptsDevframeOptions = DevframeBaseOptions & {
    cwd?: string;
    packageJsonPath?: string;
    scripts?: ScriptAllowlistEntry[];
    include?: string[];
    exclude?: string[];
    includeLifecycle?: boolean;
    runCommand?: RunCommand;
    timeoutMs?: number;
};
export declare const createScriptsDevframe: (options?: CreateScriptsDevframeOptions) => Promise<import("devframe").DevframeDefinition>;
//# sourceMappingURL=createScriptsDevframe.d.ts.map