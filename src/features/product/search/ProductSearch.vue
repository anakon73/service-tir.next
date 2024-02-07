<script setup lang="ts">
import { ref } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'

import { SSearchItem } from '@/entities/Product/ui/SSearchItem'

import { resultItems } from './config'

defineProps<{
  mobile?: boolean
}>()

const searchValue = ref('')
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
        w-[75%] border-x-0 border-b border-t-0 border-gray-100
        p-0 pb-2 text-xs font-medium leading-7 text-gray-900
        placeholder:text-slate-500 focus:ring-0"
        type="text"
        placeholder="Напишіть назву товару"
      >
    </div>
    <div
      v-if="searchValue"
      class="
      absolute top-[54px] z-10 flex w-full
      flex-col gap-1 rounded-2xl bg-white shadow-2xl
      "
    >
      <div v-for="{ id, image, name, price, rate } in resultItems" :key="id">
        <SSearchItem
          v-bind="{
            id,
            image,
            name,
            price,
            rate,
          }"
        />
        <hr>
      </div>
      <div
        class="
        px-2 py-3 text-sm font-semibold leading-small text-blue-600
        transition-colors duration-300 hover:text-blue-800
        "
      >
        Показати всі (239)
      </div>
    </div>
    <div
      v-if="searchValue"
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
        class="
        w-[75%] border-x-0 border-b border-t-0 border-zinc-50
        bg-blue-600 p-0 pb-2 text-xs font-medium leading-7 text-white
        placeholder:text-white/50 focus:border-white focus:ring-0
        "
        type="text"
        placeholder="Напишіть назву товару"
      >
    </div>
  </div>
</template>
