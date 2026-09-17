export const DEFAULT_WEBMCP_REGISTRY_KEY = '__DEVFRAME_WEBMCP_REGISTRY__';
export const publishWebmcpRegistry = (getSnapshot, options) => {
    const key = options?.key ?? DEFAULT_WEBMCP_REGISTRY_KEY;
    const publisher = { getSnapshot };
    Object.assign(window, { [key]: publisher });
    return publisher;
};
//# sourceMappingURL=publishWebmcpRegistry.js.map