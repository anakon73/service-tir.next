import { z } from 'zod'

export const ReviewSchema = z.object({
  rate: z.object({
    rate: z.number(),
    quantity: z.number(),
  }),
  author: z.string(),
  product_name: z.string(),
  comment: z.string(),
})
