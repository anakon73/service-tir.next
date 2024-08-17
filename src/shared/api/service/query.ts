import { queryOptions, useQuery } from '@tanstack/vue-query'
import { paramsAnd } from '../lib'
import {
  type ServiceByIdKeyParams,
  type ServicesByCategoryKeyParams,
  getPopularServices,
  serviceById,
  servicesByCategory,
} from './api'

const entity = 'service'
const Scopes = { ByCategory: 'by-category', Popular: 'popular', ById: 'by-id' } as const

const keys = {
  byCategory: (
    params: ServicesByCategoryKeyParams,
  ) => [{ entity, scope: Scopes.ByCategory, ...params }],
  popularServices: () => [{ entity, scope: Scopes.Popular }],
  byId: (
    params: ServiceByIdKeyParams,
  ) => [{ entity, scope: Scopes.ById, ...params }],
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

export function usePopularServicesQuery() {
  return queryOptions({
    queryKey: keys.popularServices(),
    queryFn: getPopularServices,
  })
}

export function usePopularServices() {
  return useQuery(usePopularServicesQuery())
}

export function useServiceByIdQuery(params: ServiceByIdKeyParams) {
  return queryOptions({
    queryKey: keys.byId(params),
    queryFn: (
      { queryKey: [{ id }] },
    ) => serviceById({ id: id! }),
    enabled: paramsAnd(params),
  })
}

export function useServiceById(params: ServiceByIdKeyParams) {
  return useQuery(useServiceByIdQuery(params))
}
