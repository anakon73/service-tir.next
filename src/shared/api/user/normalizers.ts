import type { z } from 'zod'
import { objectPick } from '@antfu/utils'

import type { User } from '@/shared/types'
import { normalizeCartItem } from '../cart'
import type { UserSchema } from './types'

export function normalizeUser(user: z.infer<typeof UserSchema>): User {
  return {
    ...objectPick(user, ['name', 'email', 'password', 'likedProducts', 'orders']),
    cart: user.cart.map(item => normalizeCartItem(item)),
  }
}
