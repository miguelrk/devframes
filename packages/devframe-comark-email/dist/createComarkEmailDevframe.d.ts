import type { DevframeBaseOptions, EmailTemplatesProvider } from './types.js';
export declare const DEFAULT_COMARK_EMAIL_ID = "devframe-comark-email";
export declare const DEFAULT_COMARK_EMAIL_GROUP_ID = "devframes";
export type CreateComarkEmailDevframeOptions = DevframeBaseOptions & {
    provider: EmailTemplatesProvider;
};
export declare const createComarkEmailDevframe: (options: CreateComarkEmailDevframeOptions) => Promise<import("devframe").DevframeDefinition>;
export default createComarkEmailDevframe;
//# sourceMappingURL=createComarkEmailDevframe.d.ts.map