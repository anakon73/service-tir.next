<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/16/solid'
import { cn } from '@/shared/lib/styles'

export interface Props {
  active?: boolean
}

defineProps<Props>()
</script>

<template>
  <StarIcon
    :class="cn('size-3 text-blue-600', active ? 'opacity-100' : 'opacity-60')"
  />
</template>
