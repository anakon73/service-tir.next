import { z } from 'zod'
import { ProductSchema } from '../product'

export const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  liked_products: z.array(ProductSchema),
  orders: z.array(z.any()),
  cart: z.array(ProductSchema),
})
