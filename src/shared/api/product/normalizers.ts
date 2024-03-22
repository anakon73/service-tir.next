import type { z } from 'zod'
import { objectPick } from '@antfu/utils'

import type { Product } from '@/shared/types'
import type { ProductSchema } from './types'

export function normalizeProduct(
  product: z.infer<typeof ProductSchema>,
): Product {
  return {
    ...objectPick(product, [
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
