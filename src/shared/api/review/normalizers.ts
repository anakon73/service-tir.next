import type { z } from 'zod'
import { objectPick } from '@antfu/utils'

import type { Review } from '@/shared/types'
import type { ReviewSchema } from './types'

export function normalizeReview(review: z.infer<typeof ReviewSchema>): Review {
  return {
    ...objectPick(review, ['author', 'comment', 'rate']),
    productName: review.product_name,
  }
}
