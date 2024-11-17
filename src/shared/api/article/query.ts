import { queryOptions, useQuery } from '@tanstack/vue-query'
import {
  type ArticleByIdKeyParams,
  type GetArticlesKeyParams,
  articleById,
  getArticles,
} from './api'
import { paramsAnd } from '../lib'

const entity = 'article'
const Scopes = { All: 'all', ById: 'by-id' } as const

const keys = {
  getArticles: (
    params: GetArticlesKeyParams,
  ) => [{ entity, scope: Scopes.All, ...params }],
  byId: (
    params: ArticleByIdKeyParams,
  ) => [{ entity, scope: Scopes.ById, ...params }],
} as const

export {
  entity as articleEntity,
  Scopes as articleScopes,
  keys as articleKeys,
}

export function useArticlesQuery(params: GetArticlesKeyParams) {
  return queryOptions({
    queryKey: keys.getArticles(params),
    queryFn: ({ queryKey: [{ page }] }) => getArticles({ page: page! }),
  })
}

export function useArticles(params: GetArticlesKeyParams) {
  return useQuery(useArticlesQuery(params))
}

export function useArticleByIdQuery(params: ArticleByIdKeyParams) {
  return queryOptions({
    queryKey: keys.byId(params),
    queryFn: ({ queryKey: [{ id }] }) => articleById({ id: id! }),
    enabled: paramsAnd(params),
  })
}

export function useArticleById(params: ArticleByIdKeyParams) {
  return useQuery(useArticleByIdQuery(params))
}
