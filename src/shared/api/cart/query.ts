import { queryOptions, useMutation, useQuery } from '@tanstack/vue-query'
import { createOrder, getCart, productToCart, removeFromCart } from './api'

const entity = 'cart'
const Scopes = { All: 'all' } as const

const keys = {
  getCart: () => [{ entity, scope: Scopes.All }],
} as const

export {
  entity as cartEntity,
  Scopes as cartScopes,
  keys as cartKeys,
}

export function useCartQuery() {
  return queryOptions({
    queryKey: keys.getCart(),
    queryFn: getCart,
  })
}

export function useCart() {
  return useQuery(useCartQuery())
}

export function useProductToCart() {
  return useMutation({ mutationFn: productToCart })
}

export function useRemoveFromCart() {
  return useMutation({ mutationFn: removeFromCart })
}

export function useCreateOrder() {
  return useMutation({ mutationFn: createOrder })
}
