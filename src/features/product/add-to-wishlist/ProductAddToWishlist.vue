<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { storeToRefs } from 'pinia'
import { useQueryClient } from '@tanstack/vue-query'
import { HeartIcon } from '@heroicons/vue/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid'

import { useUserStore } from '@/entities/user'

import { useLikeProduct } from '@/shared/api/product'
import { cn } from '@/shared/lib/styles'

export interface Props {
  code: number
  liked: boolean
}

export type Emits = {
  like: [value: boolean]
}

const props = defineProps<Props>()

const { code, liked } = toRefs(props)

const store = useUserStore()

const { user } = storeToRefs(store)

const { mutate } = useLikeProduct()

const queryClient = useQueryClient()

function likeProduct(e: Event) {
  e.preventDefault()
  mutate(
    { code: code.value, email: user.value!.email },
    { onSuccess: (updatedUser) => {
      store.setUser(updatedUser)
      queryClient.invalidateQueries({ queryKey: [{ scope: 'liked' }] })
    } },
  )
}

const computedIcon = computed(() => {
  return liked.value ? HeartIconSolid : HeartIcon
})
</script>

<template>
  <button
    :class="cn(
      'rounded-full p-1.5 transition-colors duration-300',
      liked
        ? `
          bg-blue-600 text-white

          hover:bg-blue-700 hover:text-zinc-100
        `
        : `
          bg-white text-blue-600

          hover:bg-zinc-100 hover:text-blue-700
        `,
    )"
    @click="likeProduct($event)"
  >
    <component :is="computedIcon" class="size-3" />
  </button>
</template>
