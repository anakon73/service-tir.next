<script setup lang="ts">
import type { Rating } from '@/shared/types'
import { SRating } from '../SRating'

export interface Props {
  name: string
  image: string
  rate: Rating
  code: number
  price: number
}

defineProps<Props>()
</script>

<template>
  <RouterLink
    :to="{ name: 'Product', params: { code } }"
    class="
    flex w-full max-w-[504px] items-center
    justify-between rounded-2xl bg-white px-4 py-3
    "
  >
    <div class="flex items-center gap-3">
      <div
        class="
        flex h-16 w-20 items-center
        justify-center rounded-xl border bg-white
        "
      >
        <img
          class="rounded-xl object-cover p-2"
          :src="image"
          alt="result product image"
        >
      </div>
      <div>
        <h2 class="text-sm font-semibold leading-small text-gray-900">
          {{ name }}
        </h2>
        <div class="flex items-center gap-4">
          <p class="text-xs leading-5 text-neutral-500">
            Код: {{ code }}
          </p>
          <SRating
            with-quantity
            :rating="rate"
          />
        </div>
      </div>
    </div>
    <div class="text-xl font-semibold text-gray-900">
      {{ price }} &#8372;
    </div>
  </RouterLink>
</template>
