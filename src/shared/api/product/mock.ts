import { HttpResponse, http } from 'msw'

import products from '../db/products'

export const productsHandlers = [
  http.get('/api/products', () => {
    return HttpResponse.json(products)
  }),
  http.get('/api/products/:code', ({ params }) => {
    const { code } = params
    const item = products.find((p) => p.code === +code)
    return HttpResponse.json(item)
  }),
]
