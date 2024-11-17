import { type ApiEndpointsAndSchemas, type ToKeyParams, client } from '../lib'

import { ArticleSchema, PaginatedArticlesSchema } from './types'
import { normalizeArticle, normalizePaginatedArticles } from './normalizers'

const endpoints = {
  getArticles: {
    url: `/api/articles`,
    method: 'get',
    schema: PaginatedArticlesSchema,
  },
  byId: {
    url: ({ id }: ArticleByIdParams) => `/api/articles/${id}`,
    method: 'get',
    schema: ArticleSchema,
  },
} satisfies ApiEndpointsAndSchemas

export { endpoints as articlesEndpoints }

export type GetArticlesParams = { page: number }
export type GetArticlesKeyParams = ToKeyParams<GetArticlesParams>
export async function getArticles({ page }: GetArticlesParams) {
  const { url, method, schema } = endpoints.getArticles

  const queryParams = new URLSearchParams({ page: String(page) }).toString()

  const data = await client[method](`${url}?${queryParams}`, schema)

  return normalizePaginatedArticles(data)
}

export type ArticleByIdParams = { id: number }
export type ArticleByIdKeyParams = ToKeyParams<ArticleByIdParams>
export async function articleById({ id }: ArticleByIdParams) {
  const { url, method, schema } = endpoints.byId

  const data = await client[method](url({ id }), schema)

  return normalizeArticle(data)
}
