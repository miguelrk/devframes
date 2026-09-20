# devframes

Vite DevTools panels and launchers. DevFrames are the tools that live in the DevTools dock. They are mounted by DevTools. Each tool is a DevFrame. DevTools is the host that mounts them.

## Packages

| Package | Kind | Description |
| --- | --- | --- |
| `devframe-tanstack-query` | iframe | TanStack Query inspector |
| `devframe-scripts` | iframe | Host script runner |
| `devframe-webmcp` | iframe | WebMCP tools |
| `devframe-comark-pdf` | iframe | Host Comark PDF templates |
| `devframe-comark-email` | iframe | Host Comark email templates |
| `devframe-mcp-inspector` | launcher | MCP Inspector |
| `devframe-drizzle-studio` | launcher | Drizzle Studio |
| `devframe-node-modules` | launcher | node_modules inspector |

## Install (from GitHub)

These packages are not on [npm](https://npmjs.com). Pin a commit. `path:` works with [pnpm](https://pnpm.io) only.

```bash
pnpm add -D "<package>@github:miguelrk/devframes#<commit>&path:/packages/<package>"
```

A tag also pins a revision:

```bash
pnpm add -D "<package>@github:miguelrk/devframes#v0.2.0&path:/packages/<package>"
```

Example:

```bash
pnpm add -D "devframe-webmcp@github:miguelrk/devframes#f346125160b40eedbafb749e363242d24aafbf6b&path:/packages/devframe-webmcp"
```

## Refresh

`pnpm install` does not move a GitHub `#<commit>` pin. After you push this repo, run the updater in the consumer (no install in that repo):

```bash
pnpm dlx github:miguelrk/devframes#main
```

That command reads `package.json` in the current directory, writes one SHA into every `github:miguelrk/devframes#…&path:` dock, then runs `pnpm install`.

`DEVFRAMES_REF` or `--ref=<branch>` selects the branch (default `main`). Restart the app after the install.

To run the file from GitHub without `dlx`:

```bash
curl -fsSL https://raw.githubusercontent.com/miguelrk/devframes/main/update.mjs | node --input-type=module
```

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
