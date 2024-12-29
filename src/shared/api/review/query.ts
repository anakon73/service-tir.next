import { queryOptions, useMutation, useQuery } from '@tanstack/vue-query'
import { type GetReviewsKeyParams, createReview, getReviews } from './api'

const entity = 'review'
const Scopes = { All: 'all' } as const

const keys = {
  getReviews: (
    params: GetReviewsKeyParams,
  ) => [{ entity, scope: Scopes.All, ...params }],
} as const

export {
  entity as reviewEntity,
  Scopes as reviewScopes,
  keys as reviewKeys,
}

export function useReviewsQuery(params: GetReviewsKeyParams) {
  return queryOptions({
    queryKey: keys.getReviews(params),
    queryFn: ({ queryKey: [{ page }] }) => getReviews({ page: page! }),
  })
}

export function useReviews(params: GetReviewsKeyParams) {
  return useQuery(useReviewsQuery(params))
}

export function useCreateReview() {
  return useMutation({
    mutationFn: createReview,
  })
}
