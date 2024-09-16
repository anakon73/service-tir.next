import { z } from 'zod'
import { CartItemSchema } from '../cart'

export const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  likedProducts: z.array(z.number()),
  orders: z.array(z.any()),
  cart: z.array(z.lazy(() => CartItemSchema)),
})
