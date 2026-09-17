import type { QueryClient } from '@tanstack/query-core'

export type PublishQueryClientOptions = {
  key?: string
}

export const publishQueryClient = (
  client: QueryClient,
  options?: PublishQueryClientOptions,
): void => {
  const key = options?.key ?? '__TANSTACK_QUERY_CLIENT__'
  Object.assign(window, { [key]: client })
}
