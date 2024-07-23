<script setup lang="ts">
import { ref } from 'vue'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { ProductCard, type ProductCardProps } from '@/widgets/product-card'

export interface Props {
  list: ProductCardProps[]
}

defineProps<Props>()

const $slots = defineSlots<Slots>()

export interface Slots {
  default?: () => any
}

const modules = [Navigation, Pagination]

const pagination = ref(null)

const prev = ref(null)
const next = ref(null)
</script>

<template>
  <div class="max-w-[1140px]">
    <div
      v-if="$slots.default"
      class="mb-7 flex items-center justify-between px-5"
    >
      <slot />
    </div>
    <Swiper
      loop
      :space-between="30"
      :modules="modules"
      :navigation="{
        prevEl: prev,
        nextEl: next,
      }"
      :pagination="{
        el: pagination,
        clickable: true,
      }"
      :slides-per-view="1"
      :breakpoints="{
        768: { slidesPerView: 4 },
        640: { slidesPerView: 3 },
        400: { slidesPerView: 2 },
      }"
      class="mb-6 !px-5 !pb-4 !pt-2"
    >
      <SwiperSlide
        v-for="{
          description,
          image,
          name,
          price,
          priceWithDiscount,
          rate,
          discount,
        } in list"
        :key="name"
        class="!h-auto"
      >
        <ProductCard
          :name="name"
          :description="description"
          :image="image"
          :price="price"
          :price-with-discount="priceWithDiscount"
          :rate="rate"
          :discount="discount"
        />
      </SwiperSlide>
    </Swiper>
    <div class="mt-5 flex items-end justify-center gap-5 pb-6">
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
