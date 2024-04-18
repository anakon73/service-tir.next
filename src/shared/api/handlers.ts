import { articlesHandlers } from './article/mock'
import { productsHandlers } from './product/mock'

export const handlers = [
  ...productsHandlers,
  ...articlesHandlers,
]
