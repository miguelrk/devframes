import { ServerResponse as NodeServerResponse } from 'node:http';
/**
 * `@mcpjam/inspector` sets `frame-ancestors 'self'` and `X-Frame-Options: SAMEORIGIN`.
 * The DevTools hub is a different origin, so the iframe stays blank.
 * This preload rewrites those headers in the inspector process only.
 */
const relaxCsp = (value) => value.replace(/frame-ancestors\s+[^;]*/gi, 'frame-ancestors *');
const relaxOne = (value) => {
    if (typeof value === 'string')
        return relaxCsp(value);
    if (Array.isArray(value))
        return value.map(item => typeof item === 'string' ? relaxCsp(item) : item);
    return value;
};
const dropOrRelax = (name, value) => {
    const lower = name.toLowerCase();
    if (lower === 'x-frame-options')
        return undefined;
    if (lower === 'content-security-policy')
        return relaxOne(value);
    return value;
};
const relaxOutgoing = (headers) => {
    for (const key of Object.keys(headers)) {
        const next = dropOrRelax(key, headers[key]);
        if (next === undefined)
            delete headers[key];
        else
            headers[key] = next;
    }
};
const response = NodeServerResponse.prototype;
const originalSetHeader = response.setHeader;
response.setHeader = function (name, value) {
    const next = dropOrRelax(name, value);
    if (next === undefined)
        return this;
    return originalSetHeader.call(this, name, next);
};
const originalAppendHeader = response.appendHeader;
response.appendHeader = function (name, value) {
    const next = dropOrRelax(name, value);
    if (next === undefined || typeof next === 'number')
        return this;
    return originalAppendHeader.call(this, name, next);
};
const originalWriteHead = response.writeHead;
response.writeHead = function (statusCode, statusMessage, headers) {
    if (typeof statusMessage === 'string') {
        if (headers && typeof headers === 'object' && !Array.isArray(headers)) {
            relaxOutgoing(headers);
        }
        return originalWriteHead.call(this, statusCode, statusMessage, headers);
    }
    if (statusMessage && typeof statusMessage === 'object' && !Array.isArray(statusMessage)) {
        relaxOutgoing(statusMessage);
    }
    return originalWriteHead.call(this, statusCode, statusMessage);
};
//# sourceMappingURL=relaxFraming.js.map