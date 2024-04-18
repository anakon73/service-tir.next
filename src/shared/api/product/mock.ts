import { HttpResponse, http } from 'msw'

import products from '../db/products'

export const productsHandlers = [
  http.get('/api/products', () => {
    return HttpResponse.json(products)
  }),
]
