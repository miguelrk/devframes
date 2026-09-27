import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
const packageDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const bundledClientDir = path.join(packageDir, 'dist/client');
const cacheNamespace = 'devframe-webmcp';
export const prepareClientAssets = async (config, cacheKey) => {
    const cacheRoot = path.join(process.cwd(), 'node_modules', '.cache', cacheNamespace, cacheKey);
    fs.rmSync(cacheRoot, { recursive: true, force: true });
    fs.cpSync(bundledClientDir, cacheRoot, { recursive: true });
    fs.writeFileSync(path.join(cacheRoot, 'config.js'), `globalThis.__DEVFRAME_CONFIG__ = ${JSON.stringify(config)};\n`);
    return cacheRoot;
};
//# sourceMappingURL=clientAssets.js.map