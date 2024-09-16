import { z } from 'zod'
import { type ApiEndpointsAndSchemas, type ToKeyParams, handleError } from '../lib'
import { UserSchema, normalizeUser } from '../user'

import { ProductSchema } from './types'
import { normalizeProduct } from './normalizers'

const endpoints = {
  getProducts: {
    url: '/api/products',
    method: 'get',
    schema: ProductSchema,
  },
  hotProducts: {
    url: '/api/products/hot-deals',
    method: 'get',
    schema: ProductSchema,
  },
  byCode: {
    url: ({ code }: ProductByCodeParams) => `/api/products/${code}`,
    method: 'get',
    schema: ProductSchema,
  },
  search: {
    url: ({ search }: ProductsSearchParams) => `/api/products?search=${search}`,
    method: 'get',
    schema: ProductSchema,
  },
  likedProducts: {
    url: '/api/products/liked',
    method: 'get',
    schema: ProductSchema,
  },
  likeProduct: {
    url: '/api/like-product',
    method: 'post',
    schema: z.lazy(() => UserSchema),
  },
} satisfies ApiEndpointsAndSchemas

export { endpoints as productEndpoints }

export async function getProducts() {
  const { url, method, schema } = endpoints.getProducts

  return z.array(schema)
    .parse(await fetch(url, { method }).then(r => r.json()))
    .map(product => normalizeProduct(product))
}

export async function getHotProducts() {
  const { url, method, schema } = endpoints.hotProducts

  return z.array(schema)
    .parse(await fetch(url, { method }).then(r => r.json()))
    .map(product => normalizeProduct(product))
}

export type ProductByCodeParams = { code: number }
export type ProductByCodeKeyParams = ToKeyParams<ProductByCodeParams>
export async function productByCode({ code }: ProductByCodeParams) {
  const { url, method, schema } = endpoints.byCode

  return normalizeProduct(
    schema.parse(await fetch(url({ code }), { method }).then(r => r.json())),
  )
}

export type ProductsSearchParams = { search: string }
export type ProductsSearchKeyParams = ToKeyParams<ProductsSearchParams>
export async function productsSearch({ search }: ProductsSearchParams) {
  const { url, method, schema } = endpoints.search

  return z.array(schema)
    .parse(await fetch(url({ search }), { method }).then(r => r.json()))
    .map(product => normalizeProduct(product))
}

export async function getLikedProducts() {
  const { url, method, schema } = endpoints.likedProducts

  return z.array(schema)
    .parse(await fetch(url, { method }).then(r => r.json()))
    .map(product => normalizeProduct(product))
}

export type LikeProductParams = { email: string, code: number }
export async function likeProduct({ email, code }: LikeProductParams) {
  const { url, method, schema } = endpoints.likeProduct

  const response = await fetch(url, { method, body: JSON.stringify({ email, code }) })

  return normalizeUser(await handleError(response, schema))
}
