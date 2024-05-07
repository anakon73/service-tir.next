import { HttpResponse, http } from 'msw'
import services from '../db/services'

export const serviceHandlers = [
  http.get('/api/services', ({ request }) => {
    const url = new URL(request.url)

    const category = url.searchParams.get('category')

    if (category === 'TIR Сервіс') {
      return HttpResponse.json(services)
    }
    else {
      return HttpResponse.json(
        services.filter((service) => service.category === category),
      )
    }
  }),
  http.get('/api/services/:id', ({ params }) => {
    const { id } = params
    const item = services.find((i) => i.id === +id)
    return HttpResponse.json(item)
  }),
]
