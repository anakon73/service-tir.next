<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@heroicons/vue/24/solid'

import { SHeader } from '@/widgets/Header'
import { ProductCard } from '@/widgets/ProductCard'

import { ProductFilterForm } from '@/features/product/filter-form'
import { ProductPagination } from '@/features/product/pagination'

import { useProducts } from '@/shared/api/product'
import { SFooter } from '@/shared/ui/SFooter'

const { data: products, isFetching } = useProducts()

const showFilters = ref(false)

const selectedPage = ref(1)

const currentPageProducts = computed(() => {
  const startIndex = (selectedPage.value - 1) * 18
  const endIndex = startIndex + 18
  if (products.value?.length)
    return products.value.slice(startIndex, endIndex)

  return []
})

watch(selectedPage, () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>

<template>
  <div class="font-montserrat">
    <SHeader class="mb-10 md:mb-5" />
    <div
      class="
        container mb-24 px-5 max-[425px]:px-3
        lg:mb-32 xl:px-24 min-[1400px]:px-[150px]
        "
    >
      <div
        class="
          mb-8 flex items-center gap-1 text-xs text-gray-900
          transition-colors duration-300 hover:text-gray-950 md:mb-10
          "
      >
        <p class="opacity-50">
          Головна
        </p>
        <ChevronRightIcon class="size-2" />
        <p class="cursor-pointer">
          Каталог
        </p>
      </div>
      <div class="mb-6 flex items-center gap-3 md:mb-8">
        <div class="paragraphIcon size-10 rounded-full bg-white p-2 text-lg">
          🛠️
        </div>
        <h1
          class="
            font-jakarta text-3xl font-bold leading-normal
            text-gray-900 lg:text-big lg:leading-extra-height
            "
        >
          Каталог товарів
        </h1>
      </div>
      <div class="gap-3 lg:flex xl:gap-5">
        <div class="fixed left-0 top-0 z-40 lg:relative">
          <ProductFilterForm
            :show="showFilters"
            @close="showFilters = false"
          />
        </div>
        <div v-if="isFetching" class="w-full text-center text-3xl font-bold">
          Loading
        </div>
        <div v-else-if="!products?.length" class="w-full text-center text-3xl font-bold">
          No Products
        </div>
        <div v-else>
          <button
            class="
              card mb-8 flex w-full items-center
              justify-between rounded-2xl px-6 py-3 lg:hidden
              "
            @click="showFilters = true"
          >
            <div class="flex items-center gap-3">
              <AdjustmentsHorizontalIcon class="size-5 text-blue-600" />
              <p class="font-medium text-gray-900">
                Фільтр
              </p>
            </div>
            <ChevronDownIcon class="size-5 text-slate-700" />
          </button>
          <div
            class="
              mb-10 grid gap-5 min-[400px]:grid-cols-2
              sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3
              "
          >
            <ProductCard
              v-for="product in currentPageProducts"
              :key="product.name"
              :image="product.image"
              :description="product.description"
              :discount="product.discount"
              :price-with-discount="product.priceWithDiscount"
              :price="product.price"
              :name="product.name"
              :rate="product.rate"
            />
          </div>
          <ProductPagination
            :length="products.length"
            :selected-page="selectedPage"
            @change-page="selectedPage = $event"
          />
        </div>
      </div>
    </div>
    <SFooter />
  </div>
</template>
