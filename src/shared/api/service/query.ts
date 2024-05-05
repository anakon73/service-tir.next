import { queryOptions, useQuery } from '@tanstack/vue-query'
import { paramsAnd } from '../lib'
import {
  type ServicesByCategoryKeyParams,
  servicesByCategory,
} from './api'

const entity = 'service'
const Scopes = { ByCategory: 'by-category' } as const

const keys = {
  byCategory: (
    params: ServicesByCategoryKeyParams,
  ) => [{ entity, scope: Scopes.ByCategory, ...params }],
} as const

export {
  entity as serviceEntity,
  Scopes as serviceScopes,
  keys as serviceKeys,
}

export function useServicesByCategoryQuery(params: ServicesByCategoryKeyParams) {
  return queryOptions({
    queryKey: keys.byCategory(params),
    queryFn: (
      { queryKey: [{ category }] },
    ) => servicesByCategory({ category: category! }),
    enabled: paramsAnd(params),
  })
}

export function useServicesByCategory(params: ServicesByCategoryKeyParams) {
  return useQuery(useServicesByCategoryQuery(params))
}
