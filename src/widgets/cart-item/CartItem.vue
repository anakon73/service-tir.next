<script setup lang="ts">
import { ProductRemoveFromCart } from '@/features/product/remove-from-cart'

export interface Props {
  code: number
  image: string
  name: string
  count: number
  price: number
  priceWithDiscount: number | null
}

defineProps<Props>()
</script>

<template>
  <div
    class="
      relative flex flex-col justify-between gap-4 rounded-2xl border border-slate-300
      bg-white px-3.5 py-3

      md:flex-row md:items-center md:gap-0

      xl:max-w-[850px]
    "
  >
    <ProductRemoveFromCart :code="code" />
    <div class="mr-5 flex w-full max-w-[300px] items-start gap-5">
      <div
        class="rounded-xl bg-indigo-100 p-1"
      >
        <img
          :src="image"
          :alt="`${name} image`"
          class="h-[75px] w-[88px] object-cover"
        >
      </div>
      <div class="flex flex-col gap-2">
        <h2
          class="max-w-[184px] truncate text-sm font-semibold leading-small text-gray-900"
        >
          {{ name }}
        </h2>
        <p class="text-sm leading-5 text-neutral-500">
          Код: {{ code }}
        </p>
      </div>
    </div>
    <div>
      <div
        v-if="priceWithDiscount"
        class="
          w-full max-w-[102px]

          md:max-w-[160px]
        "
      >
        <div class="mb-1 flex items-center gap-2">
          <p
            class="
              whitespace-nowrap text-[10px] font-bold leading-4 text-gray-400 line-through
              opacity-50
            "
          >
            {{ price }} &#8372;
          </p>
        </div>
        <div class="text-xl font-semibold text-gray-900">
          {{ priceWithDiscount }} &#8372;
        </div>
      </div>
      <div
        v-else
        class="
          w-full text-xl font-semibold text-gray-900

          md:max-w-[160px]
        "
      >
        {{ price }} &#8372;
      </div>
    </div>
  </div>
</template>
