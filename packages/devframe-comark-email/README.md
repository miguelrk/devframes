# devframe-comark-email

Repo-agnostic dock for Comark email templates. The host supplies a `EmailTemplatesProvider`. The dock lists templates, builds an input form from JSON Schema, renders HTML, and shows diagnostics.

```ts
import { createComarkEmailDevframe, writeTemplateEmails } from 'devframe-comark-email'

const provider = {
  list: () => [{ id: 'welcome', group: 'auth', label: 'welcome' }],
  describe: async ({ templateId }) => ({
    ok: true,
    templateId,
    schema: { type: 'object', properties: {}, required: [] },
    sample: {},
    source: '**{{ title }}**\n',
  }),
  render: async ({ templateId, unit, input }) => hostRender({ templateId, unit, input }),
}

await createComarkEmailDevframe({ id: 'devframe-comark-email', groupId: 'app', provider })
await writeTemplateEmails({ provider, outDir: '.data/email' })
```

`schema` may be empty. `openUrl` is optional; the Open button is hidden when it is absent. `source` is the raw Comark markdown for the Template tab. `sourcePath` opens that file in the user's editor through `@devframes/service-open`. Optional `watch(emit)` pushes file changes into shared state so the dock re-describes and re-renders without a reload. `render` returns compiled HTML plus optional `subject` and `previewText`.
