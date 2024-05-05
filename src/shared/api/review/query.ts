import { queryOptions, useMutation, useQuery } from '@tanstack/vue-query'
import { createReview, getReviews } from './api'

const entity = 'review'
const Scopes = { All: 'all' } as const

const keys = {
  getReviews: () => [{ entity, scope: Scopes.All }],
} as const

export {
  entity as reviewEntity,
  Scopes as reviewScopes,
  keys as reviewKeys,
}

export function useReviewsQuery() {
  return queryOptions({
    queryKey: keys.getReviews(),
    queryFn: getReviews,
  })
}

export function useReviews() {
  return useQuery(useReviewsQuery())
}

export function useCreateReview() {
  return useMutation({
    mutationFn: createReview,
  })
}
