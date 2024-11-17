import type { z } from 'zod'
import { objectPick } from '@antfu/utils'

import type { CartItem } from '@/shared/types'
import type { CartItemSchema } from './types'

export function normalizeCartItem(
  cartItem: z.infer<typeof CartItemSchema>,
): CartItem {
  return {
    ...objectPick(cartItem, ['count', 'productCode']),
  }
}
