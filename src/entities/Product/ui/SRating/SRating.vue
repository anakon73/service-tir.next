<script setup lang="ts">
import type { Rating } from '@/shared/types'
import { SStar } from '@/shared/ui/SStar'

export interface Props {
  rating: Rating
  quantity?: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="flex items-center">
    <SStar :active="rating.rate >= 0.5" />
    <SStar
      class="-ml-1"
      :active="rating.rate >= 1.5"
    />
    <SStar
      class="-ml-1"
      :active="rating.rate >= 2.5"
    />
    <SStar
      class="-ml-1"
      :active="rating.rate >= 3.5"
    />
    <SStar
      class="-ml-1"
      :active="rating.rate >= 4.5"
    />

    <p
      v-if="quantity"
      aria-label="quantity"
      class="whitespace-nowrap text-[10px] lg:text-xs"
    >
      <span class="font-medium leading-5 text-blue-600">{{
        rating.rate
      }}</span>
      ({{ rating.quantity }}
      відгуків)
    </p>
  </div>
</template>
