<script setup lang="ts">
import { type ButtonHTMLAttributes, computed, toRefs } from 'vue'
import { HeartIcon } from '@heroicons/vue/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/vue/24/solid'

import { cn } from '@/shared/lib/styles'

export interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
  liked: boolean
}

export type Emits = {
  like: [value: boolean]
}

const props = defineProps<Props>()

const emits = defineEmits<Emits>()

const { liked } = toRefs(props)

function likeProduct(e: Event) {
  e.preventDefault()
  emits('like', !liked.value)
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
