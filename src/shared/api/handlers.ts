import { articlesHandlers } from './article/mock'
import { productsHandlers } from './product/mock'
import { reviewHandlers } from './review/mock'

export const handlers = [
  ...productsHandlers,
  ...articlesHandlers,
  ...reviewHandlers,
]
