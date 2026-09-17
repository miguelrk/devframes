export const publishQueryClient = (client, options) => {
    const key = options?.key ?? '__TANSTACK_QUERY_CLIENT__';
    Object.assign(window, { [key]: client });
};
//# sourceMappingURL=publishQueryClient.js.map