import { queryOptions, useQuery } from '@tanstack/vue-query'
import { type ArticleByIdKeyParams, articleById, getArticles } from './api'
import { paramsAnd } from '../lib'

const entity = 'article'
const Scopes = { All: 'all', ById: 'by-id' } as const

const keys = {
  getArticles: () => [{ entity, scope: Scopes.All }],
  byId: (
    params: ArticleByIdKeyParams,
  ) => [{ entity, scope: Scopes.ById, ...params }],
}

export {
  entity as articleEntity,
  Scopes as articleScopes,
  keys as articleKeys,
}

export function useArticlesQuery() {
  return queryOptions({
    queryKey: keys.getArticles(),
    queryFn: getArticles,
  })
}

export function useArticles() {
  return useQuery(useArticlesQuery())
}

export function useArticleByIdQuery(params: ArticleByIdKeyParams) {
  return queryOptions({
    queryKey: keys.byId(params),
    queryFn: (
      { queryKey: [{ id }] },
    ) => articleById({
      id: id!,
    }),
    enabled: paramsAnd(params),
  })
}

export function useArticleById(params: ArticleByIdKeyParams) {
  return useQuery(useArticleByIdQuery(params))
}
