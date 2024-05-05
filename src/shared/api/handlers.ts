import { articlesHandlers } from './article/mock'
import { productsHandlers } from './product/mock'
import { reviewHandlers } from './review/mock'
import { serviceHandlers } from './service/mock'

export const handlers = [
  ...productsHandlers,
  ...articlesHandlers,
  ...reviewHandlers,
  ...serviceHandlers,
]
