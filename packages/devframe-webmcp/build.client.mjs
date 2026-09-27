import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import ui from '@nuxt/ui/vite'
import vue from '@vitejs/plugin-vue'
import { build } from 'vite'

const root = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(root, 'dist/client')

await build({
  root: path.join(root, 'client'),
  base: './',
  configFile: false,
  plugins: [
    vue(),
    ui({
      colorMode: false,
      router: false,
      dts: false,
      ui: {
        colors: {
          primary: 'blue',
          neutral: 'zinc',
        },
      },
    }),
  ],
  build: {
    outDir,
    emptyOutDir: true,
    cssCodeSplit: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        entryFileNames: 'hub-client.js',
        assetFileNames: 'hub-client.[ext]',
      },
    },
  },
})

const indexPath = path.join(outDir, 'index.html')
let html = fs.readFileSync(indexPath, 'utf8')
if (!html.includes('./config.js')) {
  html = html.replace('<head>', '<head>\n    <script src="./config.js"></script>')
}

// Hub prepareClientAssets historically copies only index.html + hub-client.js.
// Inline CSS so styles work even when hub-client.css is not served.
const cssPath = path.join(outDir, 'hub-client.css')
if (fs.existsSync(cssPath)) {
  const css = fs.readFileSync(cssPath, 'utf8')
  html = html
    .replace(/<link[^>]*hub-client\.css[^>]*>\s*/i, '')
    .replace('</head>', `    <style>${css}</style>\n  </head>`)
}

fs.writeFileSync(indexPath, html)
