<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { ChevronRightIcon } from '@heroicons/vue/24/solid'

import { ProductCard } from '@/widgets/product-card'

import { useProductsSearch } from '@/shared/api/product'
import { SPagination } from '@/shared/ui/SPagination'

const route = useRoute()

const searchValue = ref(route.query.search_query?.toString() || ' ')
const selectedPage = ref(1)

const { data, isFetching } = useProductsSearch({ search: searchValue })

const filteredProducts = computed(() => {
  return data.value?.filter(p => (
    p.name.toLocaleLowerCase().includes(searchValue.value.toLocaleLowerCase())
  ))
})

const currentPageProducts = computed(() => {
  const startIndex = (selectedPage.value - 1) * 24
  const endIndex = startIndex + 24
  if (filteredProducts.value?.length)
    return filteredProducts.value.slice(startIndex, endIndex)

  return []
})
</script>

<template>
  <div v-if="isFetching" class="w-full text-center text-3xl font-bold">
    Loading...
  </div>

  <div
    v-else-if="!filteredProducts?.length"
    class="w-full text-center text-3xl font-bold"
  >
    No Products
  </div>

  <div
    v-else
    class="
      container mb-24

      lg:mb-32
    "
  >
    <div
      class="
        mb-8 flex items-center gap-1 text-xs text-gray-900 transition-colors duration-300

        hover:text-gray-950

        md:mb-10
      "
    >
      <RouterLink :to="{ name: 'Home' }" class="opacity-50">
        Головна
      </RouterLink>
      <ChevronRightIcon class="size-2" />
      <p class="cursor-pointer">
        Результати пошуку «{{ searchValue }}»
      </p>
    </div>
    <div
      class="
        mb-6 flex items-end gap-3

        lg:mb-8
      "
    >
      <div class="paragraphIcon size-10 rounded-full bg-white p-2 text-lg">
        🛠️
      </div>
      <h1
        class="
          self-center font-jakarta text-2xl font-bold leading-[26px] text-gray-900

          lg:text-[44px] lg:leading-extra-height
        "
      >
        Результати пошуку «{{ searchValue }}»
      </h1>
      <p
        class="
          font-jakarta text-sm font-bold leading-4 text-gray-400

          lg:text-xl lg:leading-small
        "
      >
        {{ filteredProducts.length }}
      </p>
    </div>
    <div
      class="
        mb-10 grid gap-5

        min-[400px]:grid-cols-2

        min-[880px]:grid-cols-4

        sm:grid-cols-3
      "
    >
      <div
        v-for="{
          code,
          name,
          description,
          rate,
          image,
          price,
          discount,
          priceWithDiscount,
        } in currentPageProducts"
        :key="code"
      >
        <ProductCard
          v-bind="{
            code,
            name,
            description,
            rate,
            image,
            price,
            discount,
            priceWithDiscount,
          }"
        />
      </div>
    </div>
    <SPagination
      :selected-page="selectedPage"
      :items-per-page="24"
      :length="filteredProducts.length"
      @change-page="selectedPage = $event"
    />
  </div>
</template>
