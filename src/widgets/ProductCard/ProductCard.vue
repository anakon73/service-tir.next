<script setup lang="ts">
import { ref } from 'vue'
import { ProductAddToWishlist } from '@/features/product/add-to-wishlist'
import { SRating } from '@/entities/Product'

import type { Rating } from '@/shared/types'
import { SButton } from '@/shared/ui/SButton'

export interface Props {
  name: string
  description: string
  rate: Rating
  image: string
  price: number
  discount?: boolean
  priceWithDiscount: number | null
}

defineProps<Props>()

const liked = ref(false)
</script>

<template>
  <div
    class="
    card relative inline-flex h-full select-none flex-col justify-between
    rounded-2xl px-3 pb-6 pt-3 text-gray-900 lg:max-w-none
    "
  >
    <div>
      <div
        class="
        relative mb-3 flex h-[130px] w-auto items-center justify-center
        rounded-2xl border bg-white lg:h-[188px] lg:max-w-none
        "
      >
        <button class="absolute right-2 top-2 z-10">
          <ProductAddToWishlist
            :liked="liked"
            @like="liked = $event"
          />
        </button>
        <img
          class="max-h-[130px] object-cover p-1 lg:max-h-[188px]"
          :src="image"
          alt="product image"
        >
      </div>
      <h1 class="mb-2 text-sm font-bold leading-7 lg:text-lg">
        {{ name }}
      </h1>
      <div class="mb-2 flex flex-wrap items-center">
        <SRating
          quantity
          :rating="rate"
        />
      </div>
      <div
        class="
        mb-4 line-clamp-4 text-[10px] leading-4 text-neutral-500/70
        min-[400px]:max-w-[244px] lg:text-xs lg:leading-5
        "
      >
        {{ description }}
      </div>
    </div>
    <div class="flex flex-col justify-between gap-3 lg:flex-row lg:items-end">
      <div
        v-if="discount"
        class="max-w-[122px]"
      >
        <div class="mb-1 flex gap-2">
          <p
            class="
            whitespace-nowrap text-[10px] font-bold leading-5
            text-gray-400 line-through opacity-50 lg:text-xs
            "
          >
            {{ price }} ₴
          </p>
        </div>
        <div class="text-xl font-bold leading-none lg:text-2xl">
          {{ priceWithDiscount }} ₴
        </div>
      </div>
      <div
        v-if="!discount"
        class="text-xl font-bold leading-none lg:text-2xl"
      >
        {{ price }} ₴
      </div>
      <SButton>
        В кошик
      </SButton>
    </div>
  </div>
</template>
