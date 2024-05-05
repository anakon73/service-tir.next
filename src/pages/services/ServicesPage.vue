<script setup lang="ts">
import { ref } from 'vue'
import { ChevronRightIcon } from '@heroicons/vue/24/solid'

import { SHeader } from '@/widgets/header'

import type { Categories } from '@/features/service/category/types'
import { ServiceCategory } from '@/features/service/category'

import { SServiceCard } from '@/entities/service'

import { useServicesByCategory } from '@/shared/api/service'
import { SFooter } from '@/shared/ui/SFooter'

const selectedCategory = ref<Categories>('TIR Сервіс')

const { data: services, isLoading } = useServicesByCategory({ category: selectedCategory })
</script>

<template>
  <div class="flex min-h-screen flex-col justify-between">
    <div class="basis-full">
      <SHeader class="mb-10 md:mb-5" />

      <div class="container mb-24 lg:mb-32">
        <div
          class="
          mb-8 flex items-center gap-1 text-xs
          text-gray-900 transition-colors duration-300
          hover:text-gray-950 md:mb-10
          "
        >
          <p class="cursor-pointer opacity-50">
            Головна
          </p>
          <ChevronRightIcon class="size-2" />
          <p class="cursor-pointer">
            Послуги
          </p>
        </div>
        <div class="mb-8 flex items-center gap-3">
          <div class="paragraphIcon size-10 rounded-full bg-white p-2 text-lg">
            🤝
          </div>
          <h1
            class="font-jakarta text-3xl font-bold leading-normal text-gray-900 lg:text-big lg:leading-extra-height"
          >
            Наші послуги
          </h1>
        </div>
        <ServiceCategory
          :selected-category="selectedCategory"
          @change-category="selectedCategory = $event"
        />
        <div
          v-if="isLoading"
          class="w-full text-center text-3xl font-bold"
        >
          Is Loading...
        </div>

        <div
          v-else-if="services === undefined"
          class="w-full text-center text-3xl font-bold"
        >
          Not Found Services
        </div>
        <div v-else class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
          <SServiceCard
            v-for="{ id, name, description, image } in services"
            :key="id"
            :image="image"
            :name="name"
            :description="description"
          />
        </div>
      </div>
    </div>

    <SFooter />
  </div>
</template>
