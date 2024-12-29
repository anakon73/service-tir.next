import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

import type { User } from '@/shared/types'
import { useCart } from '@/shared/api/cart'
import { useProducts } from '@/shared/api/product'

export const useUserStore = defineStore('user', () => {
  // const user = useLocalStorage<User | null>(
  //   'user',
  //   null,
  //   {
  //     serializer: {
  //       read: (v: any) => v ? JSON.parse(v) : null,
  //       write: (v: any) => JSON.stringify(v),
  //     },
  //   },
  // )

  // const emailForResetPassword = useLocalStorage<string | null>(
  //   'emailForPasswordReset',
  //   null,
  // )

  // function setUser(newUser: User) {
  //   user.value = newUser
  // }

  // function logout() {
  //   user.value = null
  // }

  // const { data: cart } = useCart()
  // const { data: products } = useProducts()

  // const cartList = computed(() => {
  //   return products.value
  //     ?.filter(product => cart.value?.some(item => item.productCode === product.code))
  //     .map((product) => {
  //       const cartItem = cart.value?.find(item => item.productCode === product.code)

  //       return {
  //         ...product,
  //         count: cartItem?.count ?? 1,
  //       }
  //     })
  // })

  // const price = computed(() => {
  //   return cartList.value?.reduce((total, item) => total + item.price, 0) ?? 0
  // })

  // const totalDiscount = computed(() => {
  //   return cartList.value?.reduce((total, item) => {
  //     if (item.priceWithDiscount !== null) {
  //       return total + (item.price - item.priceWithDiscount)
  //     }
  //     return total
  //   }, 0) ?? 0
  // })

  // const totalPrice = computed(() => {
  //   return cartList.value?.reduce((total, item) => {
  //     return total + (
  //       item.priceWithDiscount !== null
  //         ? item.priceWithDiscount
  //         : item.price
  //     )
  //   }, 0) ?? 0
  // })

  // function setEmail(email: string | null) {
  //   emailForResetPassword.value = email
  // }

  // return {
  //   user,
  //   setUser,
  //   logout,
  //   emailForResetPassword,
  //   setEmail,
  //   totalPrice,
  //   price,
  //   cartList,
  //   totalDiscount,
  // }
})
