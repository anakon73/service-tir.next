import { z } from 'zod'
import { Categories } from '@/features/service/category/types'

export const PriceSchema = z.object({
  name: z.string(),
  duration: z.object({
    min: z.number().nullable(),
    max: z.number().nullable(),
  }),
  price: z.number(),
})

export const ServiceSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  full_description: z.string(),
  image: z.string().url(),
  category: z.enum(Categories),
  prices: z.array(PriceSchema),
})
