<script setup lang="ts">
import { toRefs } from 'vue'
import { storeToRefs } from 'pinia'
import { useQueryClient } from '@tanstack/vue-query'
import { XMarkIcon } from '@heroicons/vue/24/solid'

import { useUserStore } from '@/entities/user'
import { useRemoveFromCart } from '@/shared/api/cart'

const props = defineProps<{ code: number }>()

const { code } = toRefs(props)

const store = useUserStore()

const { user } = storeToRefs(store)

const queryClient = useQueryClient()

const { mutate } = useRemoveFromCart()

function handleClick() {
  mutate(
    { email: user.value!.email, productCode: code.value },
    { onSuccess: (newUser) => {
      store.setUser(newUser)
      queryClient.invalidateQueries({ queryKey: [{ entity: 'cart' }] })
    } },
  )
}
</script>

<template>
  <button class="absolute right-3 top-3" @click="handleClick">
    <XMarkIcon class="size-3 text-gray-900" />
  </button>
</template>
