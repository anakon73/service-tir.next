<script setup lang="ts">
import { SStar } from '@/shared/ui/SStar'

export interface Props {
  rate: number
  quantity?: number
}

defineProps<Props>()
</script>

<template>
  <div class="flex items-center">
    <SStar :active="rate >= 0.5" />
    <SStar
      :active="rate >= 1.5"
    />
    <SStar
      :active="rate >= 2.5"
    />
    <SStar
      :active="rate >= 3.5"
    />
    <SStar
      :active="rate >= 4.5"
    />

    <p
      v-if="quantity"
      aria-label="quantity"
      class="
        ml-1 whitespace-nowrap text-[10px]

        lg:text-xs
      "
    >
      <span class="font-medium leading-5 text-blue-600">{{
        rate
      }}</span>
      ({{ quantity }}
      відгуків)
    </p>
  </div>
</template>
