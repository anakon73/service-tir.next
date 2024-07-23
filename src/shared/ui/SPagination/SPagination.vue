<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed, toRefs, watch } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'

import { cn } from '@/shared/lib/styles'

export interface Props {
  selectedPage: number
  length: number
  itemsPerPage?: number
}

const props = withDefaults(defineProps<Props>(), {
  itemsPerPage: 18,
})

const emits = defineEmits<Emits>()

export type Emits = {
  changePage: [page: number]
}

const { itemsPerPage, length, selectedPage } = toRefs(props)

const route = useRoute()
const router = useRouter()

const totalPages = computed(() => {
  return Math.ceil(length.value / itemsPerPage.value)
})

function changePage(newPage: number) {
  router.push({
    path: route.path,
    query: { ...route.query, page: newPage === 1 ? undefined : newPage },
  })
}

watch(
  () => route.query.page,
  (newPage) => {
    if (+newPage! > totalPages.value) {
      changePage(1)
    }
    if (newPage) {
      emits('changePage', +newPage)
    }
    else {
      emits('changePage', 1)
    }
  },
  { immediate: true },
)
</script>

<template>
  <div class="flex items-center justify-center gap-2">
    <button
      class="
        text-slate-400

        disabled:text-gray-300
      "
      :disabled="selectedPage === 1"
      @click="changePage(selectedPage - 1)"
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
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </button>
    <button
      class="
        text-slate-400

        disabled:text-gray-300
      "
      :disabled="selectedPage === totalPages"
      @click="changePage(selectedPage + 1)"
    >
      <ChevronRightIcon
        class="size-6"
      />
    </button>
  </div>
</template>
