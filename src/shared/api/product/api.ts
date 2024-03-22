import { z } from 'zod'
import type { ApiEndpointsAndSchemas } from '../lib'

import { ProductSchema } from './types'
import { normalizeProduct } from './normalizers'

const endpoints = {
  getProducts: {
    url: '/api/products',
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
