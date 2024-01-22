<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/16/solid'

export interface Props {
  active?: boolean
}

defineProps<Props>()
</script>

<template>
  <StarIcon
    class="size-4 text-blue-600"
    :class="active ? 'opacity-100' : 'opacity-60'"
  />
</template>
