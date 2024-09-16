import { articlesHandlers } from './article/mock'
import { cartHandlers } from './cart/mock'
import { productsHandlers } from './product/mock'
import { reviewHandlers } from './review/mock'
import { serviceHandlers } from './service/mock'
import { userHandlers } from './user/mock'

export const handlers = [
  ...articlesHandlers,
  ...cartHandlers,
  ...productsHandlers,
  ...reviewHandlers,
  ...serviceHandlers,
  ...userHandlers,
]
