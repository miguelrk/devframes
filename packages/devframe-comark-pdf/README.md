# devframe-comark-pdf

Repo-agnostic dock for Comark PDF templates. The host supplies a `PdfTemplatesProvider`. The dock lists templates, builds an input form from JSON Schema, renders a PDF, and shows diagnostics.

```ts
import { createComarkPdfDevframe, writeTemplatePdfs } from 'devframe-comark-pdf'

const provider = {
  list: () => [{ id: 'quote', group: 'quote', label: 'quote' }],
  describe: async ({ templateId }) => ({
    ok: true,
    templateId,
    schema: { type: 'object', properties: {}, required: [] },
    sample: {},
    source: '::datatable{}\n::\n',
  }),
  render: async ({ templateId, unit, input }) => hostRender({ templateId, unit, input }),
}

await createComarkPdfDevframe({ id: 'devframe-comark-pdf', groupId: 'app', provider })
await writeTemplatePdfs({ provider, outDir: '.data/pdf' })
```

`schema` may be empty. `openUrl` is optional; the Open button is hidden when it is absent. `source` is the raw Comark markdown for the Template tab.
