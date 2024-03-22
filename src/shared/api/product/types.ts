import { z } from 'zod'

export const ProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  discount: z.boolean(),
  image: z.string(),
  price: z.number(),
  rate: z.object({
    quantity: z.number(),
    rate: z.number(),
  }),
  price_with_discount: z.number().nullable(),
})
