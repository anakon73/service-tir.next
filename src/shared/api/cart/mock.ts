import { HttpResponse, http } from 'msw'

import { API_URL } from '@/shared/config'
import type { User } from '@/shared/types'

import products from '../db/products'
import {
  getUsersFromLocalStorage,
  updateUserInLocalStorage,
} from '../user/mock'
import { normalizeProduct } from '../product'

import type {
  CreateOrderParams,
  ProductToCartParams,
  RemoveFromCartParams,
} from './api'

export const cartHandlers = [
  http.get(`${API_URL}/api/cart`, () => {
    const user = JSON.parse(localStorage.getItem('user')!) as User

    return HttpResponse.json(user.cart, { status: 200 })
  }),
  http.post(`${API_URL}/api/product-to-cart`, async ({ request }) => {
    const { email, productCode } = await request.json() as ProductToCartParams

    const product = products.find(p => p.code === productCode)!

    const users = getUsersFromLocalStorage()

    const userIndex = users.findIndex(u => u.email === email)
    const user = users[userIndex]

    if (userIndex !== -1 && !user.cart.some(
      item => item.productCode === product.code,
    )) {
      user.cart.push({ count: 1, productCode })
      updateUserInLocalStorage(user, userIndex)
      return HttpResponse.json(user, { status: 200 })
    }
    else {
      return HttpResponse.json(user, { status: 409 })
    }
  }),
  http.delete(`${API_URL}/api/remove-from-cart`, async ({ request }) => {
    const { email, productCode } = await request.json() as RemoveFromCartParams

    const users = getUsersFromLocalStorage()

    const userIndex = users.findIndex(u => u.email === email)
    const user = users[userIndex]

    const cartItemIndex = user.cart.findIndex(
      item => item.productCode === productCode,
    )

    if (cartItemIndex !== -1) {
      user.cart.splice(cartItemIndex, 1)
      updateUserInLocalStorage(user, userIndex)

      return HttpResponse.json(user, { status: 200 })
    }
    else {
      return HttpResponse.json(
        { message: 'Product not found in cart' },
        { status: 404 },
      )
    }
  }),
  http.post(`${API_URL}/api/create-order`, async ({ request }) => {
    const { email } = await request.json() as CreateOrderParams

    const users = getUsersFromLocalStorage()

    const userIndex = users.findIndex(u => u.email === email)
    const user = users[userIndex]

    if (user.cart.length > 0) {
      const date = new Date()

      const orderProducts = products
        .filter(product => user.cart.some(
          item => item.productCode === product.code,
        ))

      const fullPrice = orderProducts.reduce((total, item) => {
        return total + (
          item.price_with_discount !== null
            ? item.price_with_discount
            : item.price
        )
      }, 0) ?? 0

      user.orders.push({
        code: Date.now(),
        date,
        products: orderProducts.map(p => normalizeProduct(p)),
        fullPrice,
      })
      user.cart = []

      updateUserInLocalStorage(user, userIndex)

      return HttpResponse.json(user, { status: 200 })
    }
    else {
      return HttpResponse.json(
        { message: 'add products to cart' },
        { status: 409 },
      )
    }
  }),
]
