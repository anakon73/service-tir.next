<script setup lang="ts">
import { computed, toRefs, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
import {
  PaginationEllipsis,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
  PaginationRoot,
} from 'radix-vue'

export interface Props {
  selectedPage: number
  total: number
  itemsPerPage?: number
}

const props = withDefaults(defineProps<Props>(), {
  itemsPerPage: 18,
})

const { itemsPerPage, total, selectedPage } = toRefs(props)

const route = useRoute()
const router = useRouter()

function changePage(newPage: number) {
  router.push({
    name: route.name,
    query: { ...route.query, page: newPage === 1 ? undefined : newPage },
  })
}

const totalPages = computed(() => {
  return Math.ceil(total.value / itemsPerPage.value)
})

watch(
  () => route.query.page,
  (newPage) => {
    if (+newPage! > totalPages.value) {
      changePage(1)
    }
  },
  { immediate: true },
)
</script>

<template>
  <PaginationRoot
    :page="selectedPage"
    :total="total"
    :items-per-page="itemsPerPage"
    :sibling-count="1"
    show-edges
    @update:page="changePage($event)"
  >
    <PaginationList
      v-slot="{ items }"
      class="flex items-center justify-center gap-2"
    >
      <PaginationPrev
        class="
          text-slate-400

          disabled:text-gray-300
        "
      >
        <ChevronLeftIcon class="size-6" />
      </PaginationPrev>
      <template v-for="(page, index) in items">
        <PaginationListItem
          v-if="page.type === 'page'"
          :key="index"
          class="
            flex size-6 items-center justify-center rounded text-sm font-medium
            leading-5

            data-[selected]:border data-[selected]:border-slate-300
            data-[selected]:text-blue-600
          "
          :value="page.value"
        >
          {{ page.value }}
        </PaginationListItem>
        <PaginationEllipsis
          v-else
          :key="page.type"
          :index="index"
          class="flex size-6 items-center justify-center text-blue-600"
        >
          &#8230;
        </PaginationEllipsis>
      </template>
      <PaginationNext
        class="
          text-slate-400

          disabled:text-gray-300
        "
      >
        <ChevronRightIcon class="size-6" />
      </PaginationNext>
    </PaginationList>
  </PaginationRoot>
</template>
