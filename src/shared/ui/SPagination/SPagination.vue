<script setup lang="ts">
import { computed, toRefs } from 'vue'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/vue/24/solid'
import { cn } from '@/shared/lib/styles'

export interface Props {
  selectedPage: number
  length: number
  itemsPerPage?: number
}

const props = withDefaults(defineProps<Props>(), {
  itemsPerPage: 18,
})

const { itemsPerPage, length } = toRefs(props)

export type Emits = {
  changePage: [page: number]
}

const emits = defineEmits<Emits>()

const totalPages = computed(() => {
  return Math.ceil(length.value / itemsPerPage.value)
})
</script>

<template>
  <div class="flex items-center justify-center gap-2">
    <button
      class="text-slate-400 disabled:text-gray-300"
      :disabled="selectedPage === 1"
      @click="emits('changePage', selectedPage - 1)"
    >
      <ChevronLeftIcon class="size-6" />
    </button>
    <button
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      :disabled="pageNumber === selectedPage"
      :class="cn(
        `flex size-6 items-center justify-center
         rounded text-sm font-medium leading-5`,
        pageNumber === selectedPage && 'border border-slate-300 text-blue-600',
      )"
      @click="emits('changePage', pageNumber)"
    >
      {{ pageNumber }}
    </button>
    <button
      class="text-slate-400 disabled:text-gray-300"
      :disabled="selectedPage === totalPages"
      @click="emits('changePage', selectedPage + 1)"
    >
      <ChevronRightIcon
        class="size-6"
      />
    </button>
  </div>
</template>
