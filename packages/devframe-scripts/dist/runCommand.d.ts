export type RunCommand = readonly [string, string];
export declare const detectRunCommand: (packageManager?: string) => RunCommand;
export declare const formatRunCommand: (runCommand: RunCommand, scriptId: string) => string;
//# sourceMappingURL=runCommand.d.ts.map