import { z } from 'zod'
import type { ApiEndpointsAndSchemas, ToKeyParams } from '../lib'

import { ArticleSchema } from './types'
import { normalizeArticle } from './normalizers'

const endpoints = {
  getArticles: {
    url: '/api/articles',
    method: 'get',
    schema: ArticleSchema,
  },
  byId: {
    url: ({ id }: ArticleByIdParams) => `/api/articles/${id}`,
    method: 'get',
    schema: ArticleSchema,
  },
} satisfies ApiEndpointsAndSchemas

export { endpoints as articlesEndpoints }

export async function getArticles() {
  const { url, method, schema } = endpoints.getArticles

  return z.array(schema)
    .parse(await fetch(url, { method }).then((r) => r.json()))
    .map((article) => normalizeArticle(article))
}

export type ArticleByIdParams = { id: number }
export type ArticleByIdKeyParams = ToKeyParams<ArticleByIdParams>
export async function articleById({ id }: ArticleByIdParams) {
  const { url, method, schema } = endpoints.byId

  return normalizeArticle(
    schema.parse(await fetch(url({ id }), { method }).then((r) => r.json())),
  )
}
