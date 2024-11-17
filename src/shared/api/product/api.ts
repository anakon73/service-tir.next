import { z } from 'zod'
import { type ApiEndpointsAndSchemas, type ToKeyParams, client } from '../lib'
import { UserSchema, normalizeUser } from '../user'

import { ProductSchema } from './types'
import { normalizeProduct } from './normalizers'

const endpoints = {
  getProducts: {
    url: '/api/products',
    method: 'get',
    schema: z.array(ProductSchema),
  },
  hotProducts: {
    url: '/api/products/hot-deals',
    method: 'get',
    schema: z.array(ProductSchema),
  },
  byCode: {
    url: ({ code }: ProductByCodeParams) => `/api/products/${code}`,
    method: 'get',
    schema: ProductSchema,
  },
  search: {
    url: ({ search }: ProductsSearchParams) => `/api/products?search=${search}`,
    method: 'get',
    schema: z.array(ProductSchema),
  },
  likedProducts: {
    url: '/api/products/liked',
    method: 'get',
    schema: z.array(ProductSchema),
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

  const data = await client[method](url, schema)

  return data.map(normalizeProduct)
}

export async function getHotProducts() {
  const { url, method, schema } = endpoints.hotProducts

  const data = await client[method](url, schema)

  return data.map(normalizeProduct)
}

export type ProductByCodeParams = { code: number }
export type ProductByCodeKeyParams = ToKeyParams<ProductByCodeParams>
export async function productByCode({ code }: ProductByCodeParams) {
  const { url, method, schema } = endpoints.byCode

  const data = await client[method](url({ code }), schema)

  return normalizeProduct(data)
}

export type ProductsSearchParams = { search: string }
export type ProductsSearchKeyParams = ToKeyParams<ProductsSearchParams>
export async function productsSearch({ search }: ProductsSearchParams) {
  const { url, method, schema } = endpoints.search

  const data = await client[method](url({ search }), schema)

  return data.map(normalizeProduct)
}

export async function getLikedProducts() {
  const { url, method, schema } = endpoints.likedProducts

  const data = await client[method](url, schema)

  return data.map(normalizeProduct)
}

export type LikeProductParams = { email: string, code: number }
export async function likeProduct({ email, code }: LikeProductParams) {
  const { url, method, schema } = endpoints.likeProduct

  const data = await client[method](url, { email, code }, schema)

  return normalizeUser(data)
}
