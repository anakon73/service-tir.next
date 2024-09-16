<script setup lang="ts">
import { ProductRemoveFromCart } from '@/features/product/remove-from-cart'

export interface Props {
  code: number
  image: string
  name: string
  price: number
  priceWithDiscount: number | null
}

defineProps<Props>()
</script>

<template>
  <div
    class="
      relative w-full rounded-2xl border border-slate-300 bg-white p-3

      md:max-w-[415px]

      min-[415px]:flex
    "
  >
    <ProductRemoveFromCart :code="code" />
    <div
      class="
        mr-4 inline-flex rounded-xl bg-indigo-100

        md:flex md:items-center md:justify-center
      "
    >
      <img
        :src="image"
        :alt="`${name} image`"
        class="h-[75px] w-[88px] object-cover"
      >
    </div>
    <div>
      <h2
        class="
          w-full text-sm font-semibold leading-small

          max:w-[189px]
        "
      >
        {{ name }}
      </h2>
      <p class="font-semibold text-gray-900">
        {{ priceWithDiscount ? priceWithDiscount : price }} &#8372;
      </p>
    </div>
  </div>
</template>
