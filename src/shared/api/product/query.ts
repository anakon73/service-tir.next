import { queryOptions, useMutation, useQuery } from '@tanstack/vue-query'
import { paramsAnd } from '../lib'
import {
  type ProductByCodeKeyParams,
  type ProductsSearchKeyParams,
  getHotProducts,
  getLikedProducts,
  getProducts,
  likeProduct,
  productByCode,
  productsSearch,
} from './api'

const entity = 'product'
const Scopes = {
  All: 'all',
  Hot: 'hot',
  ByCode: 'by-code',
  Search: 'search',
  Liked: 'liked',
} as const

const keys = {
  getProducts: () => [{ entity, scope: Scopes.All }],
  getHotProducts: () => [{ entity, scope: Scopes.Hot }],
  byCode: (
    params: ProductByCodeKeyParams,
  ) => [{ entity, scope: Scopes.ByCode, ...params }],
  search: (
    params: ProductsSearchKeyParams,
  ) => [{ entity, scope: Scopes.Search, ...params }],
  getLikedProducts: () => [{ entity, scope: Scopes.Liked }],
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

export function useHotProductsQuery() {
  return queryOptions({
    queryKey: keys.getHotProducts(),
    queryFn: getHotProducts,
  })
}

export function useHotProducts() {
  return useQuery(useHotProductsQuery())
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

export function useLikedProductsQuery() {
  return queryOptions({
    queryKey: keys.getLikedProducts(),
    queryFn: getLikedProducts,
  })
}

export function useLikedProducts() {
  return useQuery(useLikedProductsQuery())
}

export function useLikeProduct() {
  return useMutation({ mutationFn: likeProduct })
}
