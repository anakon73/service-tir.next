<script setup lang="ts">
import { computed, ref } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

import { SSearchItem } from '@/entities/product'
import { useProductsSearch } from '@/shared/api/product'

defineProps<{
  mobile?: boolean
}>()

const isFocus = ref(false)
const searchValue = ref('')

const { data } = useProductsSearch({ search: searchValue })

const onBlur = () => setTimeout(() => isFocus.value = false, 100)

const products = computed(() => {
  return data.value ? data.value.slice(0, 3) : []
})
</script>

<template>
  <div
    v-if="!mobile"
    class="relative z-20 w-full max-w-lg"
  >
    <div
      class="
      relative z-10 flex w-full max-w-lg
      items-end gap-6 rounded-3xl bg-white
      "
    >
      <button
        class="
        rounded-[20px] bg-gray-100 p-3
        transition-colors duration-300 hover:bg-gray-200
        "
      >
        <MagnifyingGlassIcon class="size-6 text-slate-700" />
      </button>
      <input
        v-model="searchValue"
        class="
        w-1/3 border-x-0 border-b border-t-0 border-gray-100
        p-0 pb-2 text-xs font-medium leading-7 text-gray-900
        placeholder:text-slate-500 focus:ring-0"
        type="text"
        placeholder="Напишіть назву товару"
        @focus="isFocus = true"
        @blur="onBlur"
      >
    </div>
    <div
      v-if="searchValue && data?.length && isFocus"
      class="
      absolute top-[54px] z-10 flex w-full
      flex-col gap-1 rounded-2xl bg-white shadow-2xl
      "
    >
      <div
        v-for="{ code, image, name, price, rate } in products"
        :key="code"
      >
        <SSearchItem
          v-bind="{
            code,
            image,
            name,
            price,
            rate,
          }"
        />
        <hr>
      </div>
      <button
        class="
        px-2 py-3 text-left text-sm font-semibold leading-small
        text-blue-600 transition-colors duration-300 hover:text-blue-800
        "
      >
        Показати всі ({{ data.length }})
      </button>
    </div>
    <div
      v-if="searchValue && isFocus"
      class="fixed inset-0 size-full border border-black/10 bg-black/25 blur-sm"
    />
  </div>
  <div
    v-if="mobile"
    class="relative z-20 w-full"
  >
    <div class="relative z-10 flex w-full items-end gap-6 rounded-3xl">
      <button
        class="
        rounded-[14px] bg-gray-100 p-2.5
        transition-colors duration-300 hover:bg-gray-200
        "
      >
        <MagnifyingGlassIcon class="size-6 text-slate-700" />
      </button>
      <input
        v-model="searchValue"
        class="
        w-1/3 border-x-0 border-b border-t-0 border-zinc-50
        bg-blue-600 p-0 pb-2 text-xs font-medium leading-7 text-white
        placeholder:text-white/50 focus:border-white focus:ring-0
        "
        type="text"
        placeholder="Напишіть назву товару"
      >
    </div>
  </div>
</template>
