import type { z } from 'zod'
import { HttpResponse, http } from 'msw'
import { fakerUK as f } from '@faker-js/faker'

import { API_URL } from '@/shared/config'
import type { Review } from '@/shared/types'
import { SuccessfulResponseMock } from '../lib'

import type { ReviewSchema } from './types'
import { normalizeReview } from './normalizers'

export function makeReviewSchemaMock(): z.infer<typeof ReviewSchema> {
  return {
    author: f.person.fullName(),
    product_name: f.lorem.words({ min: 1, max: 4 }),
    comment: f.lorem.words({ min: 40, max: 68 }),
    rate: {
      quantity: f.number.int({ max: 130 }),
      rate: f.number.float({ min: 0.5, max: 5, fractionDigits: 1 }),
    },
  }
}

export function makeReviewMock(): Review {
  return normalizeReview(makeReviewSchemaMock())
}

export const reviewHandlers = [
  http.get(`${API_URL}/api/reviews`, () => {
    return HttpResponse.json(
      Array.from({ length: 37 }, () => makeReviewSchemaMock()),
    )
  }),
  http.post(`${API_URL}/api/reviews`, () => {
    return HttpResponse.json(SuccessfulResponseMock)
  }),
]
