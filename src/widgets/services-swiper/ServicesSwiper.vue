<script setup lang="ts">
import { ref } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { SServiceCard } from '@/entities/service'
import type { Service } from '@/shared/types'

export interface Props {
  list: Service[]
}

defineProps<Props>()

const modules = [Navigation, Pagination]

const pagination = ref(null)

const prev = ref(null)
const next = ref(null)
</script>

<template>
  <div class="max-w-[1140px]">
    <Swiper
      loop
      :pagination="{
        el: pagination,
        clickable: true,
      }"
      :modules="modules"
      :navigation="{
        prevEl: prev,
        nextEl: next,
      }"
      class="mb-6 !px-5 !pb-4 !pt-2"
      :space-between="30"
      :breakpoints="{ 550: { slidesPerView: 2 } }"
      :slides-per-view="1"
    >
      <SwiperSlide v-for="item in list" :key="item.id" class="!h-auto">
        <SServiceCard :="item" />
      </SwiperSlide>
    </Swiper>
    <div class="flex items-end justify-center gap-5 pb-6">
      <button
        ref="prev"
        class="
          paragraphIcon rounded-full bg-white p-2 transition-all duration-300

          hover:scale-105 hover:bg-zinc-50
        "
      >
        <ChevronLeftIcon class="size-6" />
      </button>
      <div ref="pagination" class="!relative !w-auto" />
      <button
        ref="next"
        class="
          paragraphIcon rounded-full bg-white p-2 transition-all duration-300

          hover:scale-105 hover:bg-zinc-50
        "
      >
        <ChevronRightIcon class="size-6" />
      </button>
    </div>
  </div>
</template>
