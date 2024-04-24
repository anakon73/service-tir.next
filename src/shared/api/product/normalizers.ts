import type { z } from 'zod'
import { objectPick } from '@antfu/utils'

import type { Product } from '@/shared/types'
import type {
  BaseProductSchema,
  ProductSchema,
  ProductSimilarSchema,
} from './types'

export function normalizeBaseProduct(
  product: z.infer<typeof BaseProductSchema>,
): Omit<Product, 'similarProducts' | 'fullDescription' | 'images' | 'reviews' | 'quantity'> {
  return {
    ...objectPick(product, [
      'code',
      'description',
      'discount',
      'image',
      'name',
      'price',
      'rate',
      'specs',
    ]),
    priceWithDiscount: product.price_with_discount,
  }
}

export function normalizeProductSimilar(
  product: z.infer<typeof ProductSimilarSchema>,
): Omit<Product, 'specs' | 'similarProducts' | 'fullDescription' | 'images' | 'reviews' | 'quantity'> {
  return {
    ...objectPick(product, [
      'code',
      'description',
      'discount',
      'image',
      'name',
      'price',
      'rate',
    ]),
    priceWithDiscount: product.price_with_discount,
  }
}

export function normalizeProduct(
  product: z.infer<typeof ProductSchema>,
): Product {
  return {
    ...objectPick(product, ['images', 'reviews', 'quantity']),
    ...normalizeBaseProduct(product),
    similarProducts: product.similar_products.map((p) => normalizeProductSimilar(p)),
    fullDescription: product.full_description,
  }
}
