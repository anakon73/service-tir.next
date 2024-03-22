import { HttpResponse, http } from 'msw'

import products from './products.json'

function productsResolve() {
  return HttpResponse.json(products)
}

export const productsHandler = http.get('/api/products', productsResolve)

export const productsHandlers = [productsHandler]
