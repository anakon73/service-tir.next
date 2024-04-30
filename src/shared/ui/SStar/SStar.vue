<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/16/solid'
import { cn } from '@/shared/lib/styles'
import type { Size } from './types'

export interface Props {
  active?: boolean
  size?: Size
}

defineProps<Props>()
</script>

<template>
  <StarIcon
    :class="cn(
      'text-blue-600',
      active ? 'opacity-100' : 'opacity-60',
      size === 'sm' && 'size-3',
      size === 'lg' && 'size-6',
    )"
  />
</template>
