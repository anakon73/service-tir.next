<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'

import { SHeader } from '@/widgets/header'
import { ServicePriceList } from '@/widgets/service-price-list'
import { ReviewsSwiper } from '@/widgets/reviews-swiper'
import { ReviewCard } from '@/widgets/review-card'
import { MapFrame } from '@/widgets/map-frame'

import { ReviewCreate } from '@/features/review/create'
import { SAdvantageCard } from '@/entities/advantage'

import { useServiceById } from '@/shared/api/service'
import { SButton } from '@/shared/ui/SButton'
import { SFooter } from '@/shared/ui/SFooter'

import { advantages, reviews } from './config'

const isOpen = ref(false)

const { data: service, isLoading } = useServiceById({ id: 1 })
</script>

<template>
  <ReviewCreate :open="isOpen" @close="isOpen = false" />
  <div
    class="flex min-h-screen flex-col justify-between"
  >
    <div>
      <SHeader />

      <div
        v-if="isLoading"
        class="w-full text-center text-3xl font-bold"
      >
        Is Loading...
      </div>

      <div
        v-else-if="service === undefined"
        class="w-full text-center text-3xl font-bold"
      >
        Not Found Service
      </div>

      <div v-else>
        <div class="bg-gray-100 pt-10 md:pt-5">
          <div class="container xl:pr-24">
            <div
              class="
              mb-6 flex items-center gap-1 text-xs text-gray-900
              transition-colors duration-300 hover:text-gray-950
              "
            >
              <p class="cursor-pointer opacity-50">
                Головна
              </p>
              <ChevronRightIcon class="size-2" />
              <p class="cursor-pointer opacity-50">
                Послуги
              </p>
              <ChevronRightIcon class="size-2" />
              <p class="cursor-pointer">
                {{ service.name }}
              </p>
            </div>
            <div
              class="flex flex-col items-center gap-6 pb-6 md:gap-12 md:pb-14 lg:flex-row"
            >
              <div class="flex flex-col gap-6 lg:w-full lg:gap-4">
                <h1
                  class="font-jakarta text-4xl font-bold leading-extra-height text-gray-900 lg:text-big"
                >
                  {{ service.name }}
                </h1>
                <p
                  class="max-w-[605px] text-sm leading-6 text-neutral-500 lg:max-w-[542px] lg:text-gray-900"
                >
                  {{ service.fullDescription }}
                </p>
                <SButton class="self-start">
                  Записатись на ремонт
                </SButton>
              </div>
              <img
                :src="service.image"
                alt="service image"
                class="
                size-full max-h-[425] max-w-[605px] rounded-2xl object-cover
                "
              >
            </div>
          </div>
        </div>

        <div
          class="container my-24 lg:mb-28 lg:mt-32"
        >
          <div class="mb-9 flex items-center gap-3 md:mb-10">
            <div class="paragraphIcon size-10 rounded-full bg-white p-2 text-lg">
              🤑
            </div>
            <h1
              class="font-jakarta text-big font-bold leading-extra-height text-gray-900"
            >
              Ціни
            </h1>
          </div>
          <ServicePriceList :items="service.prices" class="mb-4 md:mb-5" />
          <p class="mb-24 text-sm leading-6 text-gray-900 md:mb-36">
            * Всі ціни і тривалість робіт вказані приблизні. Щоб дізнатись точну
            ціну - звʼяжіться з нами по номеру :
            <span
              class="
              font-medium text-blue-600 transition-colors
              duration-300 hover:text-blue-800
              "
            >
              <a href="tel:+380930000000">+38 (093) 000-00-00 </a>
            </span>
          </p>
        </div>

        <div class="bg-[#FBFDFF] py-24 lg:py-[120px]">
          <div class="container">
            <div class="mb-6 flex items-start gap-0.5 md:mb-10">
              <div
                class="
                paragraphIcon mr-3 size-10 rounded-full bg-white p-2 text-lg
                "
              >
                🌟
              </div>
              <div>
                <h1
                  class="
                  mb-3 font-jakarta text-3xl font-bold leading-normal
                  text-gray-900 lg:text-big lg:leading-extra-height
                  "
                >
                  Наші переваги
                </h1>
                <p class="max-w-[500px] text-xs leading-5 text-neutral-500/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                  nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                  Faucibus amet etiam tincidunt.
                </p>
              </div>
            </div>
            <div class="grid gap-5 min-[425px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <SAdvantageCard
                v-for="{ name, description, image } in advantages"
                :key="name"
                v-bind="{ name, description, image }"
              />
            </div>
          </div>
        </div>

        <div
          class="py-[100px] [background:_linear-gradient(0deg,_rgba(36,_109,_239,_0.50)_0%,_rgba(36,_109,_239,_0.50)_100%),_url('/src/shared/assets/images/blueWavesBg.png'),_lightgray_0px_-73.061px_/_100%_129.949%_no-repeat;] lg:py-[120px]"
        >
          <div class="mx-auto max-w-[1440px] px-5 xl:px-[150px]">
            <div class="mb-6 flex items-start justify-between">
              <div class="flex items-start">
                <div class="flex flex-col justify-start gap-5">
                  <div class="mr-4 flex items-center gap-3">
                    <div
                      class="
                      paragraphIcon mr-3 size-10
                      rounded-full bg-white p-2 text-lg
                      "
                    >
                      💬
                    </div>
                    <h1
                      class="
                      font-jakarta text-3xl font-bold leading-normal
                      text-white lg:text-big lg:leading-extra-height
                      "
                    >
                      Відгуки наших клієнтів
                    </h1>
                  </div>
                  <p class="max-w-lg text-xs leading-5 text-white/70">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                    nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                    Faucibus amet.
                  </p>
                </div>
                <a class="group hidden items-center gap-1 pt-3 lg:flex">
                  <p
                    class="
                    whitespace-nowrap text-xs font-bold text-white
                    transition-colors duration-300 group-hover:text-zinc-100
                    "
                  >
                    Всі відгуки
                  </p>
                  <ArrowRightIcon class="h-3 w-4 text-white" />
                </a>
              </div>
              <SButton
                variant="white"
                class="hidden lg:block"
                @click="isOpen = true"
              >
                Залишити відгук
              </SButton>
            </div>
            <div class="hidden lg:block">
              <ReviewsSwiper :list="reviews" />
            </div>
            <div class="mb-7 flex w-full flex-col gap-4 lg:hidden">
              <ReviewCard
                v-for="{
                  author,
                  comment,
                  productName,
                  rate,
                } in reviews.slice(0, 2)"
                :key="author"
                v-bind="{
                  author,
                  comment,
                  productName,
                  rate,
                }"
              />
            </div>
            <div class="flex w-full flex-col items-center gap-7 lg:hidden">
              <a class="group flex items-center justify-center gap-1 pt-3">
                <p
                  class="
                  whitespace-nowrap text-xs font-bold text-white
                  transition-colors duration-300 group-hover:text-zinc-100
                  "
                >
                  Всі відгуки
                </p>
                <ArrowRightIcon class="h-3 w-4 text-white" />
              </a>
              <SButton
                variant="white"
                class="block lg:hidden"
                @click="isOpen = true"
              >
                Залишити відгук
              </SButton>
            </div>
          </div>
        </div>

        <MapFrame />
      </div>
    </div>
    <SFooter />
  </div>
</template>
