# devframes

Vite DevTools panels and launchers. DevFrames are the tools that live in the DevTools dock. They are mounted by DevTools. Each tool is a DevFrame. DevTools is the host that mounts them.

## Packages

| Package | Kind | Description |
| --- | --- | --- |
| `devframe-tanstack-query` | iframe | TanStack Query inspector |
| `devframe-scripts` | iframe | Host script runner |
| `devframe-webmcp` | iframe | WebMCP tools |
| `devframe-mcp-inspector` | launcher | MCP Inspector |
| `devframe-drizzle-studio` | launcher | Drizzle Studio |
| `devframe-node-modules` | launcher | node_modules inspector |

## Install (from GitHub)

These packages are not on [npm](https://npmjs.com).

```bash
# default branch
pnpm add "<package>@github:miguelrk/devframes#path:/packages/<package>"
# tag
pnpm add "<package>@github:miguelrk/devframes#v0.2.0&path:/packages/<package>"
# commit
pnpm add "<package>@github:miguelrk/devframes#a1b2c3d&path:/packages/<package>"
```

> [!WARNING]
> `path:` works with pnpm only.

## Development

Run `pnpm build` in this repo before a `github:` install. Client assets live under `dist/client/`. Commit `dist/` or add a `prepare` script if you install from GitHub without a local build.

### Root

- `pnpm install`
- `pnpm build`
- `pnpm typecheck`

### Package

- `pnpm --dir packages/<package> build`
- `pnpm --dir packages/<package> build:client`
- `pnpm --dir packages/<package> build:node`
- `pnpm --dir packages/<package> typecheck`
