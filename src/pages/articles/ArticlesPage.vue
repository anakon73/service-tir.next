<script setup lang="ts">
import { ref } from 'vue'
import { ChevronRightIcon } from '@heroicons/vue/24/solid'

import { SArticleCard } from '@/entities/article'

import { useArticles } from '@/shared/api/article'
import { SPagination } from '@/shared/ui/SPagination'

const selectedPage = ref(1)

const { data: articles, isFetching } = useArticles({ page: selectedPage })
</script>

<template>
  <div
    class="
      container mb-24

      lg:mb-[120px]
    "
  >
    <div
      class="
        mb-9 flex items-center gap-1 text-xs text-gray-900 transition-colors
        duration-300

        hover:text-gray-950

        md:mb-10
      "
    >
      <RouterLink :to="{ name: 'Home' }" class="opacity-50">
        Головна
      </RouterLink>
      <ChevronRightIcon class="size-2" />
      <p class="cursor-pointer">
        Статті
      </p>
    </div>
    <div
      class="
        mb-9 flex items-center gap-3

        md:mb-10
      "
    >
      <div class="paragraphIcon size-10 rounded-full bg-white p-2 text-lg">
        📝
      </div>
      <h1
        class="ml-3 mr-4 font-jakarta text-big font-bold leading-extra-height"
      >
        Блог
      </h1>
    </div>
    <div
      v-if="isFetching"
      class="mb-10 w-full text-center text-3xl font-bold"
    >
      Is Loading...
    </div>
    <div
      v-else-if="!articles?.data"
      class="w-full text-center text-3xl font-bold"
    >
      No Articles
    </div>
    <div v-else>
      <div
        class="
          mb-10 grid gap-5

          md:gap-y-12

          min-[400px]:grid-cols-2

          sm:grid-cols-3
        "
      >
        <SArticleCard
          v-for="article in articles.data"
          :key="article.id"
          :="article"
        />
      </div>
      <SPagination
        :items-per-page="12"
        :total="articles.total"
        :selected-page="selectedPage"
        @change-page="selectedPage = $event"
      />
    </div>
  </div>
</template>
