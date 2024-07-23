import { z } from 'zod'
import { type ApiEndpointsAndSchemas, SuccessfulResponse } from '../lib'

import { ReviewSchema } from './types'
import { normalizeReview } from './normalizers'

const endpoints = {
  getReviews: {
    url: '/api/reviews',
    method: 'get',
    schema: ReviewSchema,
  },
  create: {
    url: '/api/reviews',
    method: 'post',
    schema: SuccessfulResponse,
  },
} satisfies ApiEndpointsAndSchemas

export { endpoints as reviewEndpoints }

export async function getReviews() {
  const { url, method, schema } = endpoints.getReviews

  return z.array(schema)
    .parse(await fetch(url, { method }).then(r => r.json()))
    .map(review => normalizeReview(review))
}

export type CreateReviewParams = {
  author: string
  comment: string
  rate: number
}
export async function createReview(
  { author, comment, rate }: CreateReviewParams,
) {
  const { url, method, schema } = endpoints.create

  await fetch(url, { method, body: JSON.stringify({ author, comment, rate }) })

  return schema
}
