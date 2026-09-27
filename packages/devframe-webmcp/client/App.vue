<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import type { PageContextState, WebmcpSyncStatus, WebmcpToolRow } from './model'
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { iconColor, iconPath } from './icons'
import { asPageContext, bindToolchange, executeNamedTool, resolveContext } from './model'
import { emptyFormState, fieldsFromSchema, formSchemaFor, payloadFromState } from './schema'

type ChipColor = 'success' | 'error' | 'warning' | 'info' | 'neutral' | 'primary'

type StatusChip = {
  key: string
  label: string
  color: ChipColor
  hint: string
}

const tab = ref<'tools' | 'state'>('tools')
const search = ref('')
const searchWrap = ref<HTMLElement | null>(null)
const tools = ref<WebmcpToolRow[]>([])
const source = ref<'document' | 'navigator' | 'snapshot' | 'none'>('none')
const hasGetTools = ref(false)
const canExecute = ref(false)
const liveToolCount = ref(0)
const syncStatus = ref<WebmcpSyncStatus | undefined>()
const activeName = ref<string | null>(null)
const formState = reactive<Record<string, unknown>>({})
const busy = ref(false)
const resultOk = ref<boolean | null>(null)
const resultText = ref('')
const copied = ref(false)
const stateBusy = ref(false)
const stateError = ref('')
const pageState = ref<PageContextState | null>(null)
const pageStateRaw = ref('')

let pollTimer: ReturnType<typeof setInterval> | undefined
let stateTimer: ReturnType<typeof setInterval> | undefined
let toolchangeCleanup: (() => void) | undefined

const activeTool = computed(() => tools.value.find(tool => tool.name === activeName.value))
const formFields = computed(() => fieldsFromSchema(activeTool.value?.inputSchema))
const formSchema = computed(() => formSchemaFor(activeTool.value?.inputSchema))

const chips = computed((): StatusChip[] => {
  const list: StatusChip[] = [
    {
      key: 'source',
      label: source.value === 'none' ? 'no source' : source.value,
      color: source.value === 'document' || source.value === 'navigator' ? 'success' : source.value === 'snapshot' ? 'warning' : 'error',
      hint: 'Where the tool list comes from',
    },
    {
      key: 'getTools',
      label: 'getTools',
      color: hasGetTools.value ? 'success' : 'error',
      hint: hasGetTools.value ? 'modelContext.getTools is available' : 'modelContext.getTools is missing',
    },
    {
      key: 'execute',
      label: 'executeTool',
      color: canExecute.value ? 'success' : 'error',
      hint: canExecute.value ? 'modelContext.executeTool is available' : 'modelContext.executeTool is missing',
    },
    {
      key: 'count',
      label: `${tools.value.length} tools`,
      color: tools.value.length > 0 ? 'neutral' : 'warning',
      hint: liveToolCount.value > 0
        ? 'Tools visible to this frame via getTools'
        : 'Tools in this list (host registry and/or getTools)',
    },
  ]
  if (liveToolCount.value === 0 && (tools.value.length > 0 || syncStatus.value)) {
    list.push({
      key: 'live',
      label: 'getTools empty',
      color: 'warning',
      hint: 'This frame sees no tools on modelContext.getTools yet. Execute needs a live registration.',
    })
  }
  const status = syncStatus.value
  if (!status) return list
  list.push(
    {
      key: 'model',
      label: 'modelContext',
      color: status.supported ? 'success' : 'error',
      hint: status.supported ? 'The host registered tools on modelContext' : 'This browser has no modelContext.registerTool',
    },
    {
      key: 'registered',
      label: `${status.registered} registered`,
      color: status.failed > 0 ? 'warning' : status.registered > 0 ? 'success' : 'neutral',
      hint: 'Tools accepted by modelContext.registerTool on the host',
    },
    {
      key: 'failed',
      label: `${status.failed} failed`,
      color: status.failed > 0 ? 'error' : 'success',
      hint: status.lastError || 'Tools that registerTool rejected',
    },
  )
  if (status.busy) {
    list.push({ key: 'busy', label: 'syncing', color: 'warning', hint: 'Registration is in progress' })
  }
  if (status.lastRun) {
    list.push({
      key: 'last',
      label: status.lastRun,
      color: status.lastRun === 'success' ? 'success' : 'error',
      hint: 'Last registration run',
    })
  }
  return list
})

const filteredGroups = computed(() => {
  const query = search.value.trim().toLowerCase()
  const filtered = tools.value.filter((tool) => {
    if (!query) return true
    const hay = `${tool.name} ${tool.description} ${tool.group ?? ''} ${tool.type ?? ''} ${tool.scope ?? ''}`.toLowerCase()
    return hay.includes(query)
  })
  const groups: Array<{ label: string, tools: WebmcpToolRow[] }> = []
  const index = new Map<string, number>()
  for (const tool of filtered) {
    const label = tool.group || tool.type || 'Tools'
    const existing = index.get(label)
    if (existing === undefined) {
      index.set(label, groups.length)
      groups.push({ label, tools: [tool] })
    } else {
      groups[existing]!.tools.push(tool)
    }
  }
  return { groups, empty: filtered.length === 0 }
})

const annotationChips = computed((): StatusChip[] => {
  const tool = activeTool.value
  if (!tool) return []
  const list: StatusChip[] = []
  if (tool.scopeLabel) {
    list.push({ key: 'scope', label: tool.scopeLabel, color: 'info', hint: tool.scope ?? '' })
  }
  if (tool.type) {
    list.push({ key: 'type', label: tool.type, color: tool.type === 'command' ? 'warning' : 'neutral', hint: 'Tool type' })
  }
  if (tool.annotations?.readOnlyHint) {
    list.push({ key: 'ro', label: 'read-only', color: 'success', hint: 'Does not change data' })
  }
  if (tool.annotations?.consequentialHint) {
    list.push({ key: 'cons', label: 'consequential', color: 'error', hint: 'The person must confirm this action' })
  }
  if (tool.annotations?.untrustedContentHint) {
    list.push({ key: 'untrusted', label: 'untrusted', color: 'warning', hint: 'Result text is untrusted content' })
  }
  if (tool.needsApproval) {
    list.push({ key: 'approval', label: 'approval', color: 'warning', hint: 'Chrome asks before this tool runs' })
  }
  return list
})

const selectedIds = computed(() => {
  const selected = pageState.value?.view?.selected ?? []
  return selected.map(item => typeof item === 'string' ? item : JSON.stringify(item))
})

const viewBlocks = computed(() => {
  const view = pageState.value?.view
  if (!view) return []
  return [
    { label: 'Filters', value: view.filters },
    { label: 'Sort', value: view.sort },
    { label: 'Group by', value: view.groupBy },
  ]
})

const resetForm = (tool: WebmcpToolRow | undefined) => {
  for (const key of Object.keys(formState)) delete formState[key]
  if (!tool) return
  Object.assign(formState, emptyFormState(tool.inputSchema))
  resultOk.value = null
  resultText.value = ''
  copied.value = false
}

watch(activeName, () => {
  resetForm(activeTool.value)
})

const refresh = async () => {
  const context = await resolveContext()
  tools.value = context.tools
  source.value = context.source
  hasGetTools.value = context.hasGetTools
  canExecute.value = Boolean(context.modelContext?.executeTool)
  liveToolCount.value = context.liveToolCount
  syncStatus.value = context.snapshot?.status
  if (activeName.value && !context.tools.some(tool => tool.name === activeName.value)) {
    activeName.value = null
  }
}

const loadState = async () => {
  pageState.value = null
  pageStateRaw.value = ''
  if (!canExecute.value) {
    stateError.value = 'executeTool is not available in this frame, so page_context cannot run.'
    return
  }
  stateBusy.value = true
  const result = await executeNamedTool('page_context', {})
  stateBusy.value = false
  if (!result.ok) {
    stateError.value = result.text
    return
  }
  pageStateRaw.value = result.text
  const parsed = asPageContext(result.data)
  if (!parsed) {
    stateError.value = 'page_context did not return page state.'
    return
  }
  stateError.value = ''
  pageState.value = parsed
}

const onSubmit = async (event: FormSubmitEvent<Record<string, unknown>>) => {
  if (!activeName.value || busy.value) return
  if (!canExecute.value) {
    resultOk.value = false
    resultText.value = 'executeTool is not available on this page.'
    return
  }
  const payload = payloadFromState(event.data, formFields.value)
  busy.value = true
  const result = await executeNamedTool(activeName.value, payload)
  busy.value = false
  resultOk.value = result.ok
  resultText.value = result.text
}

const selectTool = (name: string) => {
  activeName.value = name
}

const copyResult = async () => {
  if (!resultText.value) return
  await navigator.clipboard.writeText(resultText.value)
  copied.value = true
  window.setTimeout(() => {
    copied.value = false
  }, 1200)
}

const textValue = (key: string): string => {
  const value = formState[key]
  if (value === undefined || value === null) return ''
  return String(value)
}

const formatValue = (value: unknown): string => {
  if (value === undefined || value === null || value === '') return 'None'
  if (Array.isArray(value) && value.length === 0) return 'None'
  if (typeof value === 'string') return value
  return JSON.stringify(value, null, 2)
}

const onKeydown = (event: KeyboardEvent) => {
  const target = event.target
  const typing = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement
  if (event.key === '/' && !typing && tab.value === 'tools') {
    event.preventDefault()
    searchWrap.value?.querySelector('input')?.focus()
  }
  if (event.key === 'Escape' && !typing && activeName.value && tab.value === 'tools') {
    activeName.value = null
  }
}

onMounted(() => {
  toolchangeCleanup = bindToolchange(() => {
    void refresh()
  })
  void refresh().then(() => {
    if (!toolchangeCleanup) {
      pollTimer = setInterval(() => {
        void refresh()
      }, 2000)
    }
  })
  window.addEventListener('keydown', onKeydown)
})

watch(tab, (next) => {
  if (stateTimer) clearInterval(stateTimer)
  stateTimer = undefined
  if (next !== 'state') return
  void loadState()
  stateTimer = setInterval(() => {
    void loadState()
  }, 2000)
})

onBeforeUnmount(() => {
  if (pollTimer) clearInterval(pollTimer)
  if (stateTimer) clearInterval(stateTimer)
  toolchangeCleanup?.()
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <UApp>
    <div class="shell flex h-full min-h-0 flex-col bg-default text-default">
      <header class="flex shrink-0 flex-wrap items-center gap-2 border-b border-default bg-elevated px-3 py-2">
        <h1 class="text-sm font-semibold text-highlighted">
          WebMCP
        </h1>
        <div class="flex min-w-0 flex-1 flex-wrap gap-1">
          <UTooltip
            v-for="chip in chips"
            :key="chip.key"
            :text="chip.hint"
          >
            <UBadge
              :color="chip.color"
              variant="subtle"
              size="sm"
              :label="chip.label"
            />
          </UTooltip>
        </div>
      </header>

      <nav class="flex shrink-0 gap-1 border-b border-default px-3 py-2">
        <UButton
          size="sm"
          color="neutral"
          icon="i-lucide-wrench"
          :variant="tab === 'tools' ? 'soft' : 'ghost'"
          :label="`Tools (${tools.length})`"
          @click="tab = 'tools'"
        />
        <UButton
          size="sm"
          color="neutral"
          icon="i-lucide-layers"
          :variant="tab === 'state' ? 'soft' : 'ghost'"
          label="Client state"
          @click="tab = 'state'"
        />
      </nav>

      <div
        v-if="tab === 'tools'"
        class="workspace min-h-0 flex-1"
        :class="{ split: true, 'has-tool': Boolean(activeTool) }"
      >
        <section class="tool-list flex min-h-0 flex-col">
          <div
            ref="searchWrap"
            class="shrink-0 p-3"
          >
            <UInput
              v-model="search"
              icon="i-lucide-search"
              placeholder="Search tools"
              size="sm"
              class="w-full"
            />
          </div>
          <div class="min-h-0 flex-1 overflow-auto pb-3">
            <p
              v-if="filteredGroups.empty"
              class="px-3 text-sm text-muted"
            >
              {{ tools.length ? 'No tools match this search.' : 'No tools available yet.' }}
            </p>
            <div
              v-for="group in filteredGroups.groups"
              :key="group.label"
            >
              <p class="px-3 pt-2 pb-1 text-xs font-semibold tracking-wide text-muted uppercase">
                {{ group.label }}
              </p>
              <button
                v-for="tool in group.tools"
                :key="tool.name"
                type="button"
                class="flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-muted"
                :class="tool.name === activeName ? 'bg-accented' : ''"
                @click="selectTool(tool.name)"
              >
                <span
                  class="inline-flex size-4 shrink-0"
                  :style="{ color: iconColor(tool.color) }"
                >
                  <svg
                    viewBox="0 0 24 24"
                    class="size-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path :d="iconPath(tool.icon)" />
                  </svg>
                </span>
                <span class="min-w-0 flex-1">
                  <span class="block truncate text-sm font-medium">{{ tool.name }}</span>
                  <span class="block truncate text-xs text-muted">{{ tool.description || '—' }}</span>
                </span>
                <UIcon
                  name="i-lucide-chevron-right"
                  class="size-4 shrink-0 text-muted"
                />
              </button>
            </div>
          </div>
        </section>

        <section class="tool-detail flex min-h-0 flex-col">
          <div
            v-if="!activeTool"
            class="flex flex-1 items-center justify-center p-6 text-sm text-muted"
          >
            Select a tool to run it.
          </div>
          <template v-else>
            <div class="flex shrink-0 flex-wrap items-center gap-2 border-b border-default px-3 py-2">
              <UButton
                class="back-narrow"
                size="xs"
                color="neutral"
                variant="ghost"
                icon="i-lucide-arrow-left"
                label="Tools"
                @click="activeName = null"
              />
              <h2 class="min-w-0 truncate text-sm font-semibold text-highlighted">
                {{ activeTool.name }}
              </h2>
              <UBadge
                v-for="chip in annotationChips"
                :key="chip.key"
                :color="chip.color"
                variant="subtle"
                size="sm"
                :label="chip.label"
              />
            </div>

            <UForm
              id="tool-form"
              :key="activeTool.name"
              :schema="formSchema"
              :state="formState"
              class="flex min-h-0 flex-1 flex-col"
              @submit="onSubmit"
            >
              <div class="min-h-0 flex-1 space-y-4 overflow-auto p-3">
                <p
                  v-if="activeTool.description"
                  class="text-sm text-muted"
                >
                  {{ activeTool.description }}
                </p>

                <section class="space-y-3">
                  <h3 class="text-xs font-semibold tracking-wide text-muted uppercase">
                    Request
                  </h3>
                  <p
                    v-if="formFields.length === 0"
                    class="text-sm text-muted"
                  >
                    This tool has no parameters.
                  </p>
                  <UFormField
                    v-for="field in formFields"
                    :key="field.key"
                    :name="field.key"
                    :label="field.key"
                    :description="field.description"
                    :required="field.required"
                  >
                    <USwitch
                      v-if="field.kind === 'boolean'"
                      :model-value="formState[field.key] === true"
                      @update:model-value="formState[field.key] = $event"
                    />
                    <UInput
                      v-else-if="field.kind === 'number' || field.kind === 'integer'"
                      :model-value="textValue(field.key)"
                      type="number"
                      :step="field.kind === 'integer' ? 1 : 'any'"
                      size="sm"
                      class="w-full"
                      @update:model-value="formState[field.key] = $event"
                    />
                    <USelect
                      v-else-if="field.kind === 'enum'"
                      :model-value="textValue(field.key)"
                      :items="field.enumValues"
                      placeholder="Select a value"
                      size="sm"
                      class="w-full"
                      @update:model-value="formState[field.key] = $event"
                    />
                    <UTextarea
                      v-else-if="field.kind === 'json'"
                      :model-value="textValue(field.key)"
                      :rows="4"
                      autoresize
                      placeholder="JSON"
                      size="sm"
                      class="w-full font-mono"
                      @update:model-value="formState[field.key] = $event"
                    />
                    <UInput
                      v-else
                      :model-value="textValue(field.key)"
                      size="sm"
                      class="w-full"
                      @update:model-value="formState[field.key] = $event"
                    />
                  </UFormField>
                </section>

                <section class="space-y-2">
                  <div class="flex items-center gap-2">
                    <h3 class="text-xs font-semibold tracking-wide text-muted uppercase">
                      Response
                    </h3>
                    <UBadge
                      v-if="resultOk !== null"
                      :color="resultOk ? 'success' : 'error'"
                      variant="subtle"
                      size="sm"
                      :label="resultOk ? 'Success' : 'Error'"
                    />
                    <UButton
                      v-if="resultText"
                      size="xs"
                      color="neutral"
                      variant="ghost"
                      class="ms-auto"
                      icon="i-lucide-copy"
                      :label="copied ? 'Copied' : 'Copy'"
                      @click="copyResult"
                    />
                  </div>
                  <p
                    v-if="resultOk === null"
                    class="text-sm text-muted"
                  >
                    Run the tool to see a result.
                  </p>
                  <pre
                    v-else
                    class="max-h-80 overflow-auto rounded-md border border-default bg-elevated p-3 font-mono text-xs whitespace-pre-wrap"
                  >{{ resultText }}</pre>
                </section>
              </div>

              <footer class="shrink-0 border-t border-default bg-elevated p-3">
                <UTooltip
                  class="block w-full"
                  :text="canExecute ? 'Validate the form, then call executeTool' : 'executeTool is not available'"
                >
                  <UButton
                    type="submit"
                    icon="i-lucide-play"
                    :label="busy ? 'Running' : 'Execute'"
                    :loading="busy"
                    :disabled="!canExecute"
                    block
                    class="justify-center"
                  />
                </UTooltip>
              </footer>
            </UForm>
          </template>
        </section>
      </div>

      <section
        v-else
        class="min-h-0 flex-1 space-y-4 overflow-auto p-3"
      >
        <div class="flex items-start justify-between gap-3">
          <div>
            <h2 class="text-sm font-semibold text-highlighted">
              Shared client state
            </h2>
            <p class="mt-1 text-sm text-muted">
              Runs the live <span class="font-mono">page_context</span> tool. Menus, shortcuts, and WebMCP tools share the same view, record, and overlays.
            </p>
          </div>
          <UButton
            size="sm"
            color="neutral"
            variant="soft"
            icon="i-lucide-refresh-cw"
            label="Refresh"
            :loading="stateBusy"
            @click="loadState"
          />
        </div>

        <UAlert
          v-if="stateError"
          color="warning"
          variant="subtle"
          icon="i-lucide-info"
          title="page_context is not available"
          :description="stateError"
        />

        <template v-if="pageState">
          <section class="space-y-2">
            <h3 class="text-xs font-semibold tracking-wide text-muted uppercase">
              Page
            </h3>
            <dl class="grid grid-cols-[8rem_minmax(0,1fr)] gap-x-3 gap-y-1 text-sm">
              <dt class="text-muted">
                Path
              </dt>
              <dd class="truncate font-mono text-xs">
                {{ pageState.path || '—' }}
              </dd>
              <dt class="text-muted">
                Module
              </dt>
              <dd>{{ pageState.moduleLabel || pageState.moduleUid || '—' }}</dd>
              <dt class="text-muted">
                Table
              </dt>
              <dd>{{ pageState.tableLabel || pageState.tableUid || '—' }}</dd>
              <dt class="text-muted">
                Record id
              </dt>
              <dd class="font-mono text-xs">
                {{ pageState.id || '—' }}
              </dd>
            </dl>
          </section>

          <section class="space-y-2">
            <h3 class="text-xs font-semibold tracking-wide text-muted uppercase">
              View
            </h3>
            <p
              v-if="!pageState.view"
              class="text-sm text-muted"
            >
              No active table view. Open a table index or a subview.
            </p>
            <template v-else>
              <dl class="grid grid-cols-[8rem_minmax(0,1fr)] gap-x-3 gap-y-1 text-sm">
                <dt class="text-muted">
                  Table
                </dt>
                <dd class="font-mono text-xs">
                  {{ pageState.view.tableUid || '—' }}
                </dd>
                <dt class="text-muted">
                  Type
                </dt>
                <dd>{{ pageState.view.type || '—' }}</dd>
                <dt class="text-muted">
                  Search
                </dt>
                <dd>{{ pageState.view.search || 'None' }}</dd>
              </dl>
              <div>
                <p class="mb-1 text-sm text-muted">
                  Selected
                </p>
                <p
                  v-if="selectedIds.length === 0"
                  class="text-sm"
                >
                  None
                </p>
                <div
                  v-else
                  class="flex flex-wrap gap-1"
                >
                  <UBadge
                    v-for="id in selectedIds"
                    :key="id"
                    color="neutral"
                    variant="subtle"
                    size="sm"
                    :label="id"
                  />
                </div>
              </div>
              <div
                v-for="block in viewBlocks"
                :key="block.label"
              >
                <p class="mb-1 text-sm text-muted">
                  {{ block.label }}
                </p>
                <pre class="overflow-auto rounded-md border border-default bg-elevated p-2 font-mono text-xs whitespace-pre-wrap">{{ formatValue(block.value) }}</pre>
              </div>
            </template>
          </section>

          <section class="space-y-2">
            <h3 class="text-xs font-semibold tracking-wide text-muted uppercase">
              Record
            </h3>
            <p
              v-if="!pageState.record"
              class="text-sm text-muted"
            >
              No open record.
            </p>
            <dl
              v-else
              class="grid grid-cols-[8rem_minmax(0,1fr)] gap-x-3 gap-y-1 text-sm"
            >
              <dt class="text-muted">
                Table
              </dt>
              <dd class="font-mono text-xs">
                {{ pageState.record.tableUid }}
              </dd>
              <dt class="text-muted">
                Id
              </dt>
              <dd class="font-mono text-xs">
                {{ pageState.record.id }}
              </dd>
              <dt class="text-muted">
                Label
              </dt>
              <dd>{{ pageState.record.label || '—' }}</dd>
            </dl>
          </section>

          <section class="space-y-2">
            <h3 class="text-xs font-semibold tracking-wide text-muted uppercase">
              Overlays
            </h3>
            <p
              v-if="!pageState.overlays?.length"
              class="text-sm text-muted"
            >
              No open form or confirm dialog.
            </p>
            <ul
              v-else
              class="space-y-1"
            >
              <li
                v-for="(overlay, index) in pageState.overlays"
                :key="index"
                class="flex flex-wrap items-center gap-2 text-sm"
              >
                <span class="font-mono text-xs">{{ overlay.tableUid || '—' }}</span>
                <span>{{ overlay.procedure || '—' }}</span>
                <UBadge
                  :color="overlay.isOpen ? 'success' : 'neutral'"
                  variant="subtle"
                  size="sm"
                  :label="overlay.isOpen ? 'open' : 'closed'"
                />
              </li>
            </ul>
          </section>
        </template>

        <details
          v-if="pageState && pageStateRaw"
          class="text-sm"
        >
          <summary class="cursor-pointer text-muted">
            Raw page_context
          </summary>
          <pre class="mt-2 overflow-auto rounded-md border border-default bg-elevated p-3 font-mono text-xs whitespace-pre-wrap">{{ pageStateRaw }}</pre>
        </details>
      </section>
    </div>
  </UApp>
</template>
