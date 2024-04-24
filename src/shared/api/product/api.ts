import { z } from 'zod'
import type { ApiEndpointsAndSchemas, ToKeyParams } from '../lib'

import { ProductSchema } from './types'
import { normalizeProduct } from './normalizers'

const endpoints = {
  getProducts: {
    url: '/api/products',
    method: 'get',
    schema: ProductSchema,
  },
  byCode: {
    url: ({ code }: ProductByCodeParams) => `/api/products/${code}`,
    method: 'get',
    schema: ProductSchema,
  },
} satisfies ApiEndpointsAndSchemas

export { endpoints as productEndpoints }

export async function getProducts() {
  const { url, method, schema } = endpoints.getProducts

  return z.array(schema)
    .parse(await fetch(url, { method }).then((r) => r.json()))
    .map((product) => normalizeProduct(product))
}

export type ProductByCodeParams = { code: number }
export type ProductByCodeKeyParams = ToKeyParams<ProductByCodeParams>
export async function productByCode({ code }: ProductByCodeParams) {
  const { url, method, schema } = endpoints.byCode

  return normalizeProduct(
    schema.parse(await fetch(url({ code }), { method }).then((r) => r.json())),
  )
}
