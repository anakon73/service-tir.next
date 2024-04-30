import { z } from 'zod'
import { ReviewSchema } from '../review'

export const SpecsSchema = z.array(z.object({
  name: z.string(),
  value: z.string(),
}))

export const BaseProductSchema = z.object({
  code: z.number(),
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
  specs: SpecsSchema,
})

export const ProductSimilarSchema = BaseProductSchema.omit({ specs: true })

export const ProductSchema = BaseProductSchema.extend({
  similar_products: z.array(ProductSimilarSchema),
  full_description: z.string(),
  images: z.array(z.string()),
  reviews: z.array(ReviewSchema),
  quantity: z.number(),
})
