import { HttpResponse, http } from 'msw'
import products from '../db/products'

export const productsHandlers = [
  http.get('/api/products', ({ request }) => {
    const url = new URL(request.url)

    const searchValue = url.searchParams.get('search')

    if (searchValue) {
      const filteredProducts = products.filter((p) => (
        p.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      ))

      return HttpResponse.json(filteredProducts)
    }
    else {
      return HttpResponse.json(products)
    }
  }),
  http.get('/api/products/:code', ({ params }) => {
    const { code } = params
    const item = products.find((p) => p.code === +code)
    return HttpResponse.json(item)
  }),
]
