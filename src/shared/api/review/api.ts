import {
  type ApiEndpointsAndSchemas,
  SuccessfulResponse,
  type ToKeyParams,
  client,
} from '../lib'

import { normalizePaginatedReviews } from './normalizers'
import { PaginatedReviewsSchema } from './types'

const endpoints = {
  getReviews: {
    url: '/api/reviews',
    method: 'get',
    schema: PaginatedReviewsSchema,
  },
  create: {
    url: '/api/reviews',
    method: 'post',
    schema: SuccessfulResponse,
  },
} satisfies ApiEndpointsAndSchemas

export { endpoints as reviewEndpoints }

export type GetReviewsParams = { page: number }
export type GetReviewsKeyParams = ToKeyParams<GetReviewsParams>
export async function getReviews({ page }: GetReviewsParams) {
  const { url, method, schema } = endpoints.getReviews

  const queryParams = new URLSearchParams({ page: String(page) }).toString()

  const data = await client[method](`${url}?${queryParams}`, schema)

  return normalizePaginatedReviews(data)
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
