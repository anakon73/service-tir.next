import type { z } from 'zod'
import { objectPick } from '@antfu/utils'

import type { User } from '@/shared/types'
import type { UserSchema } from './types'
import { normalizeProduct } from '../product'

export function normalizeUser(user: z.infer<typeof UserSchema>): User {
  return {
    ...objectPick(user, ['name', 'email', 'password', 'orders']),
    likedProducts: user.liked_products.map(product => normalizeProduct(product)),
    cart: user.cart.map(product => normalizeProduct(product)),
  }
}
