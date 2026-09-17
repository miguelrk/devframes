# devframes

Vite DevTools panels and launchers.

> [!NOTE]
> DevTools is the dock that opens DevFrames. A codebase keeps a `devtools/` folder that imports or defines the local DevFrames. DevTools embeds DevFrames. Each tool is a DevFrame. DevTools is the host that mounts them.

## Packages

| Package | Kind | Description |
| --- | --- | --- |
| `devframe-tanstack-query` | iframe | TanStack Query inspector |
| `devframe-scripts` | iframe | Host script runner |
| `devframe-webmcp` | iframe | WebMCP tools |
| `devframe-mcp-inspector` | launcher | MCP Inspector |
| `devframe-drizzle-studio` | launcher | Drizzle Studio |
| `devframe-node-modules` | launcher | node_modules inspector |

## Install in a consumer (no npm)

```bash
pnpm add github:miguelrk/devframes#path:/packages/devframe-scripts
pnpm add "github:miguelrk/devframes#main&path:/packages/devframe-tanstack-query"
pnpm add file:../devframes/packages/devframe-scripts
```

Run `pnpm build` in this repo before a `file:` or `github:` install. Client assets live under each package `dist/client/`. Commit `dist/` or add a `prepare` script if you install from GitHub without a build step.

## Development

### Root

- `pnpm install`
- `pnpm build`
- `pnpm typecheck`

### Package

- `pnpm --dir packages/<package> build`
- `pnpm --dir packages/<package> build:client`
- `pnpm --dir packages/<package> build:node`
- `pnpm --dir packages/<package> typecheck`
