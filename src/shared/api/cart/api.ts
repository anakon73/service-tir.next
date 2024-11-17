import { z } from 'zod'

import { type ApiEndpointsAndSchemas, client } from '../lib'
import { UserSchema, normalizeUser } from '../user'

import { CartItemSchema } from './types'
import { normalizeCartItem } from './normalizers'

const endpoints = {
  getCart: {
    url: '/api/cart',
    method: 'get',
    schema: z.array(CartItemSchema),
  },
  productToCart: {
    url: '/api/product-to-cart',
    method: 'post',
    schema: z.lazy(() => UserSchema),
  },
  removeFromCart: {
    url: '/api/remove-from-cart',
    method: 'delete',
    schema: z.lazy(() => UserSchema),
  },
  createOrder: {
    url: '/api/create-order',
    method: 'post',
    schema: z.lazy(() => UserSchema),
  },
} satisfies ApiEndpointsAndSchemas

export { endpoints as cartEndpoints }

export async function getCart() {
  const { url, method, schema } = endpoints.getCart

  const data = await client[method](url, schema)

  return data.map(normalizeCartItem)
}

export type ProductToCartParams = { email: string, productCode: number }
export async function productToCart(
  { email, productCode }: ProductToCartParams,
) {
  const { url, method, schema } = endpoints.productToCart

  const data = await client[method](url, { email, productCode }, schema)

  return normalizeUser(data)
}

export type RemoveFromCartParams = { email: string, productCode: number }
export async function removeFromCart(
  { email, productCode }: RemoveFromCartParams,
) {
  const { url, method, schema } = endpoints.removeFromCart

  const data = await client[method](url, { email, productCode }, schema)

  return normalizeUser(data)
}

export type CreateOrderParams = { email: string }
export async function createOrder({ email }: CreateOrderParams) {
  const { url, method, schema } = endpoints.createOrder

  const data = await client[method](url, { email }, schema)

  return normalizeUser(data)
}
