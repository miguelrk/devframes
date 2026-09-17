# devframes

Private pnpm workspace of portable **Devframe factories** for Vite DevTools. Each package exports a `createXDevframe` or `createXLauncher` factory. The host wraps iframe factories with `createPluginFromDevframe` from `@vitejs/devtools-kit/node`.

These packages are **not published to npm**. Install via `github:` subdirectory or local `file:`.

## Packages

| Package | Kind | Factory |
|---|---|---|
| `devframe-tanstack-query` | iframe | `createQueryDevframe` |
| `devframe-scripts` | iframe + RPC | `createScriptsDevframe` |
| `devframe-webmcp` | iframe | `createWebmcpDevframe` |
| `devframe-mcp-inspector` | launcher | `createMcpInspectorLauncher` |
| `devframe-drizzle-studio` | launcher | `createDrizzleStudioLauncher` |
| `devframe-node-modules` | launcher | `createNodeModulesLauncher` |

## Setup

```bash
pnpm install
pnpm build
pnpm typecheck
```

Build one package:

```bash
pnpm --filter devframe-scripts run build
```

## Install in a consumer (no npm)

```bash
pnpm add github:miguelrk/devframes#path:/packages/devframe-scripts
pnpm add "github:miguelrk/devframes#main&path:/packages/devframe-tanstack-query"
pnpm add file:../devframes/packages/devframe-scripts
```

Run `pnpm build` in this repo before `file:` or `github:` install. Client assets live under each package `dist/client/`. Commit `dist/` or add a `prepare` script if you install from GitHub without a build step.

## Host usage

```typescript
import { createPluginFromDevframe } from '@vitejs/devtools-kit/node'
import { createQueryDevframe, publishQueryClient } from 'devframe-tanstack-query'

publishQueryClient(queryClient)

const definition = await createQueryDevframe({ groupId: 'my-app' })
addVitePlugin(createPluginFromDevframe(definition, { dock: { groupId: 'my-app' } }))
```

WebMCP reads `document.modelContext.getTools()` when available. Optional fallback: `publishWebmcpRegistry` from `devframe-webmcp`.

Launcher packages expect host CLIs on PATH (`mcp-inspector`, `drizzle-kit`, `node-modules-inspector`) unless you pass a custom `command` or `transports`.
