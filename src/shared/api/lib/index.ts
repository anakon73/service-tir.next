import type { MaybeRef } from 'vue'
import { and } from '@vueuse/math'
import { z } from 'zod'

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

// Error handling
export class FetchError extends Error {
  constructor(
    public response: Response,
    message?: string,
  ) {
    super(message ?? response.statusText)
  }
}

export async function handleError<T>(
  response: Response,
  schema: z.ZodType<T>,
): Promise<T> {
  if (response.ok) {
    return schema.parse(await response.json())
  }
  throw new FetchError(await response.json())
}
