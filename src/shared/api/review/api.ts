import { z } from 'zod'
import { type ApiEndpointsAndSchemas, SuccessfulResponse, client } from '../lib'

import { ReviewSchema } from './types'
import { normalizeReview } from './normalizers'

const endpoints = {
  getReviews: {
    url: '/api/reviews',
    method: 'get',
    schema: z.array(ReviewSchema),
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

  const data = await client[method](url, schema)

  return data.map(normalizeReview)
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

  const data = await client[method](url, { author, comment, rate }, schema)

  return data
}
