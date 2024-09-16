import { z } from 'zod'

export const CartItemSchema = z.object({
  count: z.number(),
  productCode: z.number(),
})
