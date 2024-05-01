<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { ChevronRightIcon } from '@heroicons/vue/24/solid'

import { SHeader } from '@/widgets/header'
import { SArticleCard } from '@/entities/article'

import { useArticles } from '@/shared/api/article'
import { SFooter } from '@/shared/ui/SFooter'
import { SPagination } from '@/shared/ui/SPagination'

const { data: articles, isFetching } = useArticles()

const selectedPage = ref(1)

const currentPageArticles = computed(() => {
  const startIndex = (selectedPage.value - 1) * 12
  const endIndex = startIndex + 12
  if (articles.value?.length)
    return articles.value.slice(startIndex, endIndex)

  return []
})

watch(selectedPage, () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})
</script>

<template>
  <div class="flex min-h-screen flex-col justify-between">
    <div>
      <SHeader class="mb-10 md:mb-5" />

      <div class="container mb-24 lg:mb-[120px]">
        <div
          class="
          mb-9 flex items-center gap-1 text-xs text-gray-900
          transition-colors duration-300 hover:text-gray-950 md:mb-10
          "
        >
          <p class="cursor-pointer opacity-50">
            Головна
          </p>
          <ChevronRightIcon class="size-2" />
          <p class="cursor-pointer">
            Статті
          </p>
        </div>
        <div class="mb-9 flex items-center gap-3 md:mb-10">
          <div class="paragraphIcon size-10 rounded-full bg-white p-2 text-lg">
            📝
          </div>
          <h1
            class="
            ml-3 mr-4 font-jakarta text-big font-bold leading-extra-height
            "
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
          v-else-if="!articles?.length"
          class="w-full text-center text-3xl font-bold"
        >
          No Articles
        </div>
        <div v-else>
          <div
            class="
            mb-10 grid gap-5 min-[400px]:grid-cols-2 sm:grid-cols-3 md:gap-y-12
            "
          >
            <SArticleCard
              v-for="article in currentPageArticles"
              :key="article.id"
              :description="article.description"
              :image="article.previewImage"
              :date="article.date"
              :name="article.name"
            />
          </div>
          <SPagination
            :items-per-page="12"
            :length="articles.length"
            :selected-page="selectedPage"
            @change-page="selectedPage = $event"
          />
        </div>
      </div>
    </div>

    <SFooter />
  </div>
</template>
