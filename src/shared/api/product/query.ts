import { queryOptions, useQuery } from '@tanstack/vue-query'
import {
  type ProductByCodeKeyParams,
  type ProductsSearchKeyParams,
  getProducts,
  productByCode,
  productsSearch,
} from './api'
import { paramsAnd } from '../lib'

const entity = 'product'
const Scopes = { All: 'all', ByCode: 'by-code', Search: 'search' } as const

const keys = {
  getProducts: () => [{ entity, scope: Scopes.All }],
  byCode: (
    params: ProductByCodeKeyParams,
  ) => [{ entity, scope: Scopes.ByCode, ...params }],
  search: (
    params: ProductsSearchKeyParams,
  ) => [{ entity, scope: Scopes.Search, ...params }],
} as const

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

export function useProductByCodeQuery(params: ProductByCodeKeyParams) {
  return queryOptions({
    queryKey: keys.byCode(params),
    queryFn: (
      { queryKey: [{ code }] },
    ) => productByCode({
      code: code!,
    }),
    enabled: paramsAnd(params),
  })
}

export function useProductByCode(params: ProductByCodeKeyParams) {
  return useQuery(useProductByCodeQuery(params))
}

export function useProductsSearchQuery(params: ProductsSearchKeyParams) {
  return queryOptions({
    queryKey: keys.search(params),
    queryFn: (
      { queryKey: [{ search }] },
    ) => productsSearch({
      search: search!,
    }),
    enabled: paramsAnd(params),
  })
}

export function useProductsSearch(params: ProductsSearchKeyParams) {
  return useQuery(useProductsSearchQuery(params))
}
