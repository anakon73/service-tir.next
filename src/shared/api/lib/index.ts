import { z } from 'zod'
import type { MaybeRef } from 'vue'
import { and } from '@vueuse/math'
import { objectPick } from '@vueuse/core'

import type { Pagination } from '@/shared/types'
import { RestClient } from './RestClient'

export const client = new RestClient()

export function normalizePagination<T, RawItem>(
  rawData: {
    data: RawItem[]
    total: number
    current_page: number
    last_page: number
    per_page: number
  },
  itemNormalizer: (item: RawItem) => T,
): Pagination<T> {
  const { data, current_page, last_page, per_page } = rawData

  return {
    ...objectPick(rawData, ['total']),
    data: data.map(itemNormalizer),
    currentPage: current_page,
    lastPage: last_page,
    perPage: per_page,
  }
}

// Endpoints
type EndpointAndSchema = {
  url: string | ((...args: any) => string)
  method: 'get' | 'post' | 'put' | 'patch' | 'delete'
  schema?: z.ZodTypeAny
}

export type ApiEndpointsAndSchemas = Record<string, EndpointAndSchema>

// Query keys
type KeyParam<T = number> = MaybeRef<T | null | undefined>

export type ToKeyParams<T extends Record<string, unknown>> = {
  [K in keyof T]: KeyParam<T[K]>
}

export function paramsAnd(params: Record<string, KeyParam<unknown>>) {
  return and(...Object.values(params))
}

// Misc
export const SuccessfulResponse = z.object({ status: z.literal('success') })
export const SuccessfulResponseMock = {
  status: 'success',
} satisfies z.infer<typeof SuccessfulResponse>
