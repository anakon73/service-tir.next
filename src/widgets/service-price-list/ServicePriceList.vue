<script setup lang="ts">
import type { Price } from '@/shared/types'
import { ServicePriceListItem } from './ui/item'

defineProps<{ items: Price[] }>()
</script>

<template>
  <div
    class="
    w-full rounded-2xl border border-slate-300 bg-white p-1.5
    [filter:_drop-shadow(0px_4px_8px_rgba(0,_0,_0,_0.06))_drop-shadow(0px_0px_4px_rgba(0,_0,_0,_0.04))]
    "
  >
    <div
      class="
      flex rounded-t-2xl bg-[#EAEDF2] text-sm
      font-medium tracking-[0.28px] text-gray-900
      "
    >
      <p class="block w-full max-w-[63%] p-3 md:hidden">
        Ціни на послуги
      </p>
      <p class="hidden w-full max-w-[63%] p-3 md:block">
        Назва послуги
      </p>
      <div class="flex w-full max-w-[37%]">
        <p class="hidden w-full max-w-[63.6%] p-3 md:block">
          Тривалість робот
        </p>
        <p class="hidden w-full max-w-[36.4%] p-3 md:block">
          Вартість
        </p>
      </div>
    </div>
    <ServicePriceListItem
      v-for="({ name, duration, price }, i) in items"
      :key="name"
      :secondary="i % 2 !== 0"
      :class="i + 1 === items.length && 'overflow-hidden rounded-b-2xl'"
      v-bind="{
        name,
        duration,
        price,
      }"
    />
  </div>
</template>
