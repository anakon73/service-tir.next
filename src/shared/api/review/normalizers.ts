import type { z } from 'zod'
import { objectPick } from '@antfu/utils'

import type { Pagination, Review } from '@/shared/types'
import { normalizePagination } from '../lib'
import type { PaginatedReviewsSchema, ReviewSchema } from './types'

export function normalizeReview(review: z.infer<typeof ReviewSchema>): Review {
  const { created_at, updated_at } = review

  return {
    ...objectPick(review, ['author', 'comment', 'rate', 'id', 'product']),
    createdAt: created_at,
    updatedAt: updated_at,
  }
}

export function normalizePaginatedReviews(
  rawData: z.infer<typeof PaginatedReviewsSchema>,
): Pagination<Review> {
  return normalizePagination(rawData, normalizeReview)
}
