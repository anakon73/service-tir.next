<script setup lang="ts">
import type { Product } from '@/shared/types'

export interface Props {
  code: number
  date: Date
  fullPrice: number
  products: Product[]
}

defineProps<Props>()
</script>

<template>
  <div
    class="max-w-[848px] rounded-2xl border border-gray-100 bg-white card"
  >
    <div
      class="
        flex items-center justify-between rounded-2xl bg-gray-100 p-4

        md:px-6
      "
    >
      <div>
        <p
          class="
            mb-2 text-xs font-semibold tracking-[0.24px] text-gray-900

            md:text-sm md:tracking-[0.28px]
          "
        >
          Заказ № {{ code }}
        </p>
        <p class="text-xs tracking-[0.24px] text-gray-900">
          {{
            date.toLocaleDateString(
              'ru',
              { day: 'numeric', month: 'long', year: 'numeric' })
          }}ІІ
        </p>
      </div>
      <div>
        <p
          class="
            mb-2 text-xs font-semibold tracking-[0.24px] text-gray-900

            md:text-sm md:tracking-[0.28px]
          "
        >
          10 029 &#8372;
        </p>
        <p class="text-xs font-medium tracking-[0.24px] text-emerald-500">
          Оплачено
        </p>
      </div>
    </div>
    <div
      class="
        flex grid-cols-7 flex-wrap items-center gap-3 rounded-b-2xl bg-white
        px-3 py-4

        md:grid md:px-4
      "
    >
      <div
        v-for="product in products"
        :key="product.code"
        class="
          flex aspect-square max-w-24 items-center justify-center rounded-xl
          bg-indigo-100 p-4
        "
      >
        <img
          :src="product.image"
          alt="result product image"
        >
      </div>
    </div>
  </div>
</template>
