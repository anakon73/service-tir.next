import type { z } from 'zod'
import { HttpResponse, http } from 'msw'
import { fakerUK as f } from '@faker-js/faker'

import { Categories } from '@/features/service/category/types'

import { API_URL } from '@/shared/config'
import type { Service } from '@/shared/types'

import services from '../db/services'

import type { ServiceSchema } from './types'
import { normalizeService } from './normalizers'

function makePriceMock(): Service['prices'][0] {
  return {
    name: f.lorem.words({ min: 1, max: 3 }),
    price: f.number.int({ min: 1000, max: 5000 }),
    duration: {
      min: f.number.int({ min: 1, max: 5 }),
      max: f.number.int({ min: 1, max: 5 }),
    },
  }
}

export function makeServiceSchemaMock(): z.infer<typeof ServiceSchema> {
  return {
    id: f.number.int(),
    name: f.lorem.words({ min: 1, max: 5 }),
    image: f.image.urlLoremFlickr({ category: 'cars' }),
    full_description: f.lorem.words({ min: 20, max: 50 }),
    description: f.lorem.words({ min: 5, max: 10 }),
    prices: f.helpers.multiple(makePriceMock, { count: { min: 4, max: 8 } }),
    category: f.helpers.arrayElement(Categories),
  }
}

export function makeServiceMock(): Service {
  return normalizeService(makeServiceSchemaMock())
}

export const serviceHandlers = [
  http.get(`${API_URL}/api/services`, ({ request }) => {
    const url = new URL(request.url)

    const category = url.searchParams.get('category')

    if (category === 'TIR Сервіс') {
      return HttpResponse.json(services)
    }
    else {
      return HttpResponse.json(
        services.filter(service => service.category === category),
      )
    }
  }),
  http.get(`${API_URL}/api/services/popular`, () => {
    return HttpResponse.json(services.slice(0, 6))
  }),
  http.get(`${API_URL}/api/services/:id`, ({ params }) => {
    const { id } = params
    const item = services.find(i => i.id === +id)
    return HttpResponse.json(item)
  }),
]
