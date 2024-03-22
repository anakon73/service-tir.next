import { queryOptions, useQuery } from '@tanstack/vue-query'
import { getProducts } from './api'

const entity = 'product'
const Scopes = { All: 'all' } as const

const keys = {
  getProducts: () => [{ entity, scope: Scopes.All }],
}

export {
  entity as productEntity,
  Scopes as productScopes,
  keys as productKeys,
}

export function useProductsQuery() {
  return queryOptions({
    queryKey: keys.getProducts(),
    queryFn: getProducts,
  })
}

export function useProducts() {
  return useQuery(useProductsQuery())
}
