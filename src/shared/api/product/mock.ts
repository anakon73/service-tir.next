import type { z } from 'zod'
import { faker as f } from '@faker-js/faker'
import { HttpResponse, http } from 'msw'

import type { Product, User } from '@/shared/types'

import products from '../db/products'
import { getUsersFromLocalStorage, updateUserInLocalStorage } from '../user/mock'

import type { ProductSchema } from './types'
import { normalizeProduct } from './normalizers'
import type { LikeProductParams } from './api'

function makeProductSchemaMock(): z.infer<typeof ProductSchema> {
  const name = f.commerce.productName()
  const price = +f.commerce.price({ min: 1000, max: 10000, dec: 2 })
  const discountPercentage = f.number.int({ min: 10, max: 90 })
  const price_with_discount = Math.trunc(price - (price * discountPercentage / 100))

  return {
    code: f.number.int({ min: 1000000, max: 9999999 }),
    name,
    description: f.commerce.productDescription(),
    discount: f.datatype.boolean(),
    image: f.image.urlLoremFlickr({ category: 'truck' }),
    price,
    rate: {
      quantity: f.number.int({ min: 1, max: 1000 }),
      rate: f.number.float({ min: 1, max: 5, precision: 0.1 }),
    },
    price_with_discount: f.datatype.boolean()
      ? price_with_discount
      : null,
    specs: Array.from({ length: 5 }, () => ({
      name: f.commerce.productMaterial(),
      value: f.commerce.productAdjective(),
    })),
    similar_products: Array.from({ length: 3 }, () => ({
      code: f.number.int({ min: 1000000, max: 9999999 }),
      name: f.commerce.productName(),
      description: f.commerce.productDescription(),
      discount: f.datatype.boolean(),
      image: f.image.urlLoremFlickr({ category: 'truck' }),
      price: +f.commerce.price({ min: 10, max: 10000, dec: 2 }),
      rate: {
        quantity: f.number.int({ min: 1, max: 1000 }),
        rate: f.number.float({ min: 1, max: 5, precision: 0.1 }),
      },
      price_with_discount: f.datatype.boolean()
        ? price_with_discount
        : null,
    })),
    full_description: f.lorem.paragraphs(3),
    images: Array.from(
      { length: 5 },
      () => f.image.urlLoremFlickr({ category: 'truck' }),
    ),
    reviews: Array.from({ length: 3 }, () => ({
      rate: {
        rate: f.number.float({ min: 1, max: 5, precision: 0.1 }),
        quantity: f.number.int({ min: 1, max: 100 }),
      },
      author: f.person.fullName(),
      product_name: name,
      comment: f.lorem.sentences(),
    })),
    quantity: f.number.int({ min: 1, max: 100 }),
  }
}

export const makeProductMock = (): Product => normalizeProduct(makeProductSchemaMock())

export const productsHandlers = [
  http.get('/api/products', ({ request }) => {
    const url = new URL(request.url)

    const searchValue = url.searchParams.get('search')

    if (searchValue) {
      const filteredProducts = products.filter(p => (
        p.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      ))

      return HttpResponse.json(filteredProducts)
    }
    else {
      return HttpResponse.json(products)
    }
  }),
  http.get('/api/products/hot-deals', () => {
    return HttpResponse.json(products.slice(0, 6))
  }),
  http.get('/api/products/liked', () => {
    const user = JSON.parse(localStorage.getItem('user')!) as User
    const filteredProducts = products.filter(p => user.likedProducts.includes(p.code))
    return HttpResponse.json(filteredProducts)
  }),
  http.get('/api/products/:code', ({ params }) => {
    const { code } = params
    const item = products.find(p => p.code === +code)
    return HttpResponse.json(item)
  }),
  http.post('/api/like-product', async ({ request }) => {
    const { code, email } = await request.json() as LikeProductParams

    const users = getUsersFromLocalStorage()

    const userIndex = users.findIndex(u => u.email === email)
    const user = users[userIndex]

    if (!user.likedProducts.includes(code)) {
      user.likedProducts.push(code)
      updateUserInLocalStorage(user, userIndex)
      return HttpResponse.json(user, { status: 200 })
    }
    else {
      const productIndex = user.likedProducts.findIndex(c => c === code)
      user.likedProducts.splice(productIndex, 1)
      updateUserInLocalStorage(user, userIndex)
      return HttpResponse.json(user, { status: 200 })
    }
  }),
]
