<script setup lang="ts">
import { computed, ref } from 'vue'
import { format } from 'date-fns'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { SHeader } from '@/widgets/header'
import { SArticleCard } from '@/entities/article'

import { useArticleById } from '@/shared/api/article'
import { SFooter } from '@/shared/ui/SFooter'

const modules = [Navigation, Pagination]

const pagination = ref(null)

const prev = ref(null)
const next = ref(null)

const { data, isLoading } = useArticleById({ id: 1 })

const formattedDate = computed(() => format(data.value!.date, 'd MMMM u'))
</script>

<template>
  <div class="flex min-h-screen flex-col justify-between font-montserrat">
    <div class="basis-full">
      <SHeader class="mb-10 md:mb-5" />

      <div class="container">
        <div
          v-if="isLoading"
          class="w-full text-center text-3xl font-bold"
        >
          Is Loading...
        </div>

        <div
          v-else-if="data === undefined"
          class="w-full text-center text-3xl font-bold"
        >
          Not Found Blog
        </div>

        <div v-else>
          <div
            class="
            mb-6 flex items-center gap-1 text-xs text-gray-900
            transition-colors duration-300 hover:text-gray-950 md:mb-12
            "
          >
            <p class="cursor-pointer opacity-50">
              Головна
            </p>
            <ChevronRightIcon class="size-2" />
            <p class="cursor-pointer opacity-50">
              Статті
            </p>
            <ChevronRightIcon class="size-2" />
            <p class="cursor-pointer">
              {{ data.name }}
            </p>
          </div>
          <div class="mb-[87px]">
            <p class="mb-4 text-xs font-semibold leading-5 text-gray-400">
              {{ formattedDate }}
            </p>
            <h1 class="mb-6 text-3xl font-semibold text-zinc-900 lg:text-big">
              {{ data.name }}
            </h1>
            <div

              class="flex w-full flex-col gap-7"
            >
              <div
                v-for="({ image, text }, index) in data.paragraphs"
                :key="index"
                class="flex flex-col gap-7"
              >
                <img
                  class="rounded-lg "
                  :src="image"
                  :alt="`paragraph ${index} image`"
                >
                <div
                  class="
                  flex flex-col gap-7 text-xs leading-5 text-gray-900
                  md:text-sm lg:text-base lg:leading-6
                  "
                >
                  <p v-for="(t, i) in text" :key="i">
                    {{ t }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mx-auto max-w-[1480px] overflow-hidden xl:px-[150px]"
      >
        <div class="mb-[84px] overflow-hidden p-5">
          <div class="mb-9 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="paragraphIcon size-10 rounded-full bg-white p-2 text-lg">
                📝
              </div>
              <div
                class="font-jakarta text-3xl font-bold leading-normal text-gray-900 lg:text-big lg:leading-extra-height"
              >
                Схожі статті
              </div>
            </div>
          </div>
          <Swiper
            :pagination="{
              el: pagination,
              clickable: true,
            }"
            :modules="modules"
            :navigation="{
              prevEl: prev,
              nextEl: next,
            }"
            :slides-per-view="3"
            loop
            :space-between="20"
          >
            <SwiperSlide v-for="similar in data?.similarArticles" :key="similar.id">
              <SArticleCard
                :date="similar.date"
                :image="similar.previewImage"
                :description="similar.description"
                :name="similar.name"
              />
            </SwiperSlide>
          </Swiper>
          <div class="mt-5 flex items-end justify-center gap-5">
            <button
              ref="prev"
              class="paragraphIcon rounded-full bg-white p-2 transition-all duration-300 hover:scale-105 hover:bg-zinc-50"
            >
              <ChevronLeftIcon class="size-6" />
            </button>
            <div ref="pagination" class="!relative !w-auto" />
            <button
              ref="next"
              class="paragraphIcon rounded-full bg-white p-2 transition-all duration-300 hover:scale-105 hover:bg-zinc-50"
            >
              <ChevronRightIcon class="size-6" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <SFooter />
  </div>
</template>
