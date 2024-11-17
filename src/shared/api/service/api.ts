import { z } from 'zod'
import type { Categories } from '@/features/service/category/types'
import { type ApiEndpointsAndSchemas, type ToKeyParams, client } from '../lib'

import { ServiceSchema } from './types'
import { normalizeService } from './normalizers'

const endpoints = {
  byCategory: {
    url: (
      { category }: ServicesByCategoryParams,
    ) => `/api/services?category=${category}`,
    method: 'get',
    schema: z.array(ServiceSchema),
  },
  popularServices: {
    url: '/api/services/popular',
    method: 'get',
    schema: z.array(ServiceSchema),
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

  const data = await client[method](url({ category }), schema)

  return data.map(normalizeService)
}

export async function getPopularServices() {
  const { url, method, schema } = endpoints.popularServices

  const data = await client[method](url, schema)

  return data.map(normalizeService)
}

export type ServiceByIdParams = { id: number }
export type ServiceByIdKeyParams = ToKeyParams<ServiceByIdParams>
export async function serviceById({ id }: ServiceByIdParams) {
  const { url, method, schema } = endpoints.byId

  const data = await client[method](url({ id }), schema)

  return normalizeService(data)
}
