import { z } from 'zod'

import { type ApiEndpointsAndSchemas, handleError } from '../lib'
import { UserSchema, normalizeUser } from '../user'

import { CartItemSchema } from './types'
import { normalizeCartItem } from './normalizers'

const endpoints = {
  getCart: {
    url: '/api/cart',
    method: 'get',
    schema: CartItemSchema,
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

  return z.array(schema)
    .parse((await fetch(url, { method }).then(r => r.json())))
    .map(item => normalizeCartItem(item))
}

export type ProductToCartParams = { email: string, productCode: number }
export async function productToCart({ email, productCode }: ProductToCartParams) {
  const { url, method, schema } = endpoints.productToCart

  const response = await fetch(
    url,
    { method, body: JSON.stringify({ email, productCode }) },
  )

  return normalizeUser(await handleError(response, schema))
}

export type RemoveFromCartParams = { email: string, productCode: number }
export async function removeFromCart({ email, productCode }: RemoveFromCartParams) {
  const { url, method, schema } = endpoints.removeFromCart

  const response = await fetch(
    url,
    { method, body: JSON.stringify({ email, productCode }) },
  )

  return normalizeUser(await handleError(response, schema))
}

export type CreateOrderParams = { email: string }
export async function createOrder({ email }: CreateOrderParams) {
  const { url, method, schema } = endpoints.createOrder

  const response = await fetch(
    url,
    { method, body: JSON.stringify({ email }) },
  )

  return normalizeUser(await handleError(response, schema))
}
