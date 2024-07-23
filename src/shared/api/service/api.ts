import { z } from 'zod'
import type { Categories } from '@/features/service/category/types'
import type { ApiEndpointsAndSchemas, ToKeyParams } from '../lib'

import { ServiceSchema } from './types'
import { normalizeService } from './normalizers'

const endpoints = {
  byCategory: {
    url: (
      { category }: ServicesByCategoryParams,
    ) => `/api/services?category=${category}`,
    method: 'get',
    schema: ServiceSchema,
  },
  byId: {
    url: ({ id }: ServiceByIdParams) => `/api/services/${id}`,
    method: 'get',
    schema: ServiceSchema,
  },
} satisfies ApiEndpointsAndSchemas

export { endpoints as serviceEndpoints }

export type ServicesByCategoryParams = { category: Categories }
export type ServicesByCategoryKeyParams = ToKeyParams<ServicesByCategoryParams>
export async function servicesByCategory(
  { category }: ServicesByCategoryParams,
) {
  const { url, method, schema } = endpoints.byCategory

  return z.array(schema)
    .parse(await fetch(url({ category }), { method }).then(r => r.json()))
    .map(service => normalizeService(service))
}

export type ServiceByIdParams = { id: number }
export type ServiceByIdKeyParams = ToKeyParams<ServiceByIdParams>
export async function serviceById({ id }: ServiceByIdParams) {
  const { url, method, schema } = endpoints.byId

  return normalizeService(
    schema.parse(await fetch(url({ id }), { method }).then(r => r.json())),
  )
}
