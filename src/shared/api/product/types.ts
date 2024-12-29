import { z } from 'zod'
import { PaginatedResponseSchema, dateValidation } from '@/shared/lib/validation'
import { ReviewSchema } from '../review'
// import { ReviewSchema } from '../review'

// export const SpecsSchema = z.array(z.object({
//   name: z.string(),
//   value: z.string(),
// }))

// export const BaseProductSchema = z.object({
//   code: z.number(),
//   name: z.string(),
//   description: z.string(),
//   discount: z.boolean(),
//   image: z.string(),
//   price: z.number(),
//   rate: z.object({
//     quantity: z.number(),
//     rate: z.number(),
//   }),
//   price_with_discount: z.number().nullable(),
//   specs: SpecsSchema,
// })

// export const ProductSimilarSchema = BaseProductSchema.omit({ specs: true })

// export const ProductSchema = BaseProductSchema.extend({
//   similar_products: z.array(ProductSimilarSchema),
//   full_description: z.string(),
//   images: z.array(z.string()),
//   reviews: z.array(ReviewSchema),
//   quantity: z.number(),
// })

export const SpecSchema = z.object({
  name: z.string(),
  value: z.string(),
})

export const RateSchema = z.object({
  rate: z.number(),
  quantity: z.number(),
})

export const SimilarProductSchema = z.object({
  id: z.number(),
  code: z.number(),
  name: z.string(),
  description: z.string(),
  image: z.string().url(),
  price: z.number(),
  rate: RateSchema,
  price_with_discount: z.number().nullable(),
})

export const ProductSchema = z.object({
  id: z.number(),
  created_at: dateValidation,
  updated_at: dateValidation,
  code: z.number(),
  name: z.string(),
  description: z.string(),
  image: z.string().url(),
  price: z.number(),
  rate: RateSchema,
  price_with_discount: z.number().nullable(),
  full_description: z.string(),
  specs: z.array(SpecSchema),
  reviews: z.array(ReviewSchema),
  similar_products: z.array(SimilarProductSchema),
  images: z.array(z.string()),
  quantity: z.number(),
})

export const PagiantedProductsSchema = PaginatedResponseSchema(ProductSchema)
