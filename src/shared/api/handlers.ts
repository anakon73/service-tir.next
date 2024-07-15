import { articlesHandlers } from './article/mock'
import { productsHandlers } from './product/mock'
import { reviewHandlers } from './review/mock'
import { serviceHandlers } from './service/mock'
import { userHandlers } from './user/mock'

export const handlers = [
  ...productsHandlers,
  ...articlesHandlers,
  ...reviewHandlers,
  ...serviceHandlers,
  ...userHandlers,
]
