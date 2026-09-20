import { defaultKeymap } from '@codemirror/commands'
import { markdown } from '@codemirror/lang-markdown'
import { highlightSelectionMatches, searchKeymap } from '@codemirror/search'
import { EditorState } from '@codemirror/state'
import { oneDark } from '@codemirror/theme-one-dark'
import {
  Decoration,
  drawSelection,
  EditorView,
  highlightActiveLine,
  highlightActiveLineGutter,
  highlightSpecialChars,
  keymap,
  lineNumbers,
  MatchDecorator,
  ViewPlugin,
} from '@codemirror/view'

const blockDirective = Decoration.mark({ class: 'cm-comark-block' })
const inlineDirective = Decoration.mark({ class: 'cm-comark-inline' })
const bindingTag = Decoration.mark({ class: 'cm-comark-binding' })

const blockDecorator = new MatchDecorator({
  regexp: /:{2,}[a-z$][\w$.-]*(?:\{[^}\n]*\})?/g,
  decoration: () => blockDirective,
})

const inlineDecorator = new MatchDecorator({
  regexp: /(?<![:\w$]):[a-z$][\w$.-]*(?:\{[^}\n]*\})?/g,
  decoration: () => inlineDirective,
})

const bindingDecorator = new MatchDecorator({
  regexp: /\{\{[^{}\n]*\}\}/g,
  decoration: () => bindingTag,
})

const createHighlightPlugin = (decorator: MatchDecorator) =>
  ViewPlugin.define(
    view => ({
      decorations: decorator.createDeco(view),
      update(update) {
        this.decorations = decorator.updateDeco(update, this.decorations)
      },
    }),
    { decorations: value => value.decorations },
  )

const comarkHighlight = [
  createHighlightPlugin(blockDecorator),
  createHighlightPlugin(inlineDecorator),
  createHighlightPlugin(bindingDecorator),
  EditorView.baseTheme({
    '&light .cm-comark-block': { color: '#4078f2', fontWeight: '600' },
    '&dark .cm-comark-block': { color: '#61afef', fontWeight: '600' },
    '&light .cm-comark-inline': { color: '#a626a4', fontWeight: '500' },
    '&dark .cm-comark-inline': { color: '#c678dd', fontWeight: '500' },
    '&light .cm-comark-binding': { color: '#c18401' },
    '&dark .cm-comark-binding': { color: '#d19a66' },
  }),
]

export const createTemplateEditor = (parent: HTMLElement, doc: string): EditorView =>
  new EditorView({
    parent,
    state: EditorState.create({
      doc,
      extensions: [
        lineNumbers(),
        highlightActiveLine(),
        highlightActiveLineGutter(),
        highlightSpecialChars(),
        drawSelection(),
        highlightSelectionMatches(),
        keymap.of([...defaultKeymap, ...searchKeymap]),
        EditorView.lineWrapping,
        EditorState.readOnly.of(true),
        markdown(),
        oneDark,
        ...comarkHighlight,
        EditorView.theme({
          '&': { height: '100%', backgroundColor: '#0f0f10' },
          '.cm-gutters': { backgroundColor: '#0f0f10', border: 'none' },
          '.cm-scroller': {
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            fontSize: '12px',
            lineHeight: '1.5',
          },
        }),
      ],
    }),
  })
