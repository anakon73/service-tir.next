<script setup lang="ts">
import { cn } from '@/shared/lib/styles'
import { type Categories, Categories as categoriesArray } from './types'

defineProps<{ selectedCategory: Categories }>()
defineEmits<{ changeCategory: [tab: Categories] }>()
</script>

<template>
  <div
    class="
      mb-6 flex flex-wrap gap-2

      md:mb-10
    "
  >
    <button
      v-for="category in categoriesArray"
      :key="category"
      :class="cn(
        `
          rounded-full px-2 py-1.5 text-xs font-medium leading-5
          transition-colors duration-300
        `,
        category === selectedCategory
          ? `
            bg-blue-600 text-white

            hover:bg-blue-700 hover:text-zinc-100
          `
          : `
            bg-gray-100 text-slate-700

            hover:bg-gray-200 hover:text-slate-700
          `,
      )"
      @click="$emit('changeCategory', category)"
    >
      {{ category }}
    </button>
  </div>
</template>
