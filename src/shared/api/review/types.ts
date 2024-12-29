import { z } from 'zod'
import { PaginatedResponseSchema, dateValidation } from '@/shared/lib/validation'

export const ReviewSchema = z.object({
  id: z.number(),
  created_at: dateValidation,
  updated_at: dateValidation,
  author: z.string(),
  product: z.object({
    id: z.number(),
    name: z.string(),
  }),
  comment: z.string(),
  rate: z.number(),
})

export const PaginatedReviewsSchema = PaginatedResponseSchema(ReviewSchema)
