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

const { liked } = toRefs(props)

const emits = defineEmits<Emits>()

const computedIcon = computed(() => {
  return liked.value ? HeartIconSolid : HeartIcon
})
</script>

<template>
  <button
    :class="cn(
      'p-1.5 rounded-full transition-colors duration-300',
      liked
        ? 'text-white bg-blue-600 hover:text-zinc-100 hover:bg-blue-700'
        : 'text-blue-600 bg-white hover:text-blue-700 hover:bg-zinc-100',
    )"
    @click="emits('like', !liked)"
  >
    <component :is="computedIcon" class="size-3" />
  </button>
</template>
