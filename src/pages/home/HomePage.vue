<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRightIcon } from '@heroicons/vue/24/solid'

import { ServicesSwiper } from '@/widgets/services-swiper'
import { ProductsSwiper } from '@/widgets/products-swiper'
import { ReviewCard } from '@/widgets/review-card'
import { ReviewsSwiper } from '@/widgets/reviews-swiper'
import { MapFrame } from '@/widgets/map-frame'

import { SAdvantageCard } from '@/entities/advantage'
import { SServiceCard } from '@/entities/service'

import { useHotProducts } from '@/shared/api/product'
import { usePopularServices } from '@/shared/api/service'
import { SButton } from '@/shared/ui/SButton'

import { advantages, reviews } from './config'

const { data: products } = useHotProducts()
const { data: services } = usePopularServices()

const isOpen = ref(false)
</script>

<template>
  <div
    class="
      mx-auto mb-[100px] flex max-w-[1440px] flex-col items-center gap-6 px-5

      lg:mb-[124px] lg:flex-row lg:px-10

      xl:gap-14 xl:px-8
    "
  >
    <div class="flex flex-col items-start gap-6">
      <h1
        class="
          font-jakarta text-2xl font-bold leading-10 text-gray-900

          [text-wrap:_balance]

          2xl:text-6xl

          min-[376px]:text-3xl

          min-[440px]:text-4xl

          xl:text-5xl xl:leading-[66px]
        "
      >
        Якісна діагностика ходової вантажівок
      </h1>
      <p
        class="
          text-sm leading-5 text-neutral-500

          xl:text-base xl:leading-7
        "
      >
        Это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem
        Ipsum является стандартной "рыбой" для текстов на латинице с начала
        XVI века.
      </p>
      <button
        as="RouterLink"
        :to="{ name: 'Service', params: { id: 1 } }"
        class="
          whitespace-nowrap rounded-large bg-blue-600 px-7 py-4 text-sm
          font-bold text-white transition-colors duration-300

          hover:bg-blue-700 hover:text-zinc-100
        "
      >
        Дізнатись ціну для вашого авто
      </button>
    </div>
    <img
      class="
        w-auto rounded-large

        lg:w-1/2
      "
      src="./assets/EngineRepairService.png"
      alt="engine repair service photo"
    >
  </div>
  <div class="container">
    <ProductsSwiper
      class="
        mb-24

        lg:mb-28
      "
      :list="products!"
    >
      <div class="flex items-center gap-3">
        <div class="paragraphIcon size-10 rounded-full bg-white p-2 text-lg">
          🔥
        </div>
        <div
          class="
            font-jakarta text-3xl font-bold leading-normal text-gray-900

            md:text-big md:leading-extra-height
          "
        >
          Гарячі пропозиції
        </div>
      </div>
    </ProductsSwiper>
    <div
      class="
        mb-12

        lg:mb-24
      "
    >
      <div class="mb-8 flex items-center">
        <div class="paragraphIcon size-10 rounded-full bg-white p-2 text-lg">
          🤝
        </div>
        <h1
          class="
            mr-5 font-jakarta text-3xl font-bold leading-normal text-gray-900

            lg:text-big lg:leading-extra-height
          "
        >
          Наші послуги
        </h1>
        <RouterLink
          :to="{ name: 'Services' }"
          class="
            flex items-center gap-1 pt-2.5 text-xs font-bold text-blue-600
            transition-colors duration-300

            hover:text-blue-800
          "
          href="/services/"
        >
          <p>Всі послуги</p>
          <ArrowRightIcon class="size-4" />
        </RouterLink>
      </div>
      <div
        v-if="services"
        class="
          hidden grid-cols-2 gap-5

          md:grid
        "
      >
        <SServiceCard
          v-for="service in services"
          v-bind="service"
          :key="service.id"
        />
      </div>
      <div
        class="
          block

          md:hidden
        "
      >
        <ServicesSwiper :list="services!" />
      </div>
    </div>
  </div>
  <div
    class="
      mb-32 bg-[#FBFDFF] py-24

      lg:py-[120px]

      md:mb-36
    "
  >
    <div class="container">
      <div
        class="
          mb-6 flex items-start gap-0.5

          md:mb-10
        "
      >
        <div
          class="paragraphIcon mr-3 size-10 rounded-full bg-white p-2 text-lg"
        >
          🌟
        </div>
        <div>
          <h1
            class="
              mb-3 font-jakarta text-3xl font-bold leading-normal text-gray-900

              lg:text-big lg:leading-extra-height
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
      <div
        class="
          grid gap-5

          lg:grid-cols-4

          md:grid-cols-3

          min-[425px]:grid-cols-2
        "
      >
        <SAdvantageCard
          v-for="{ name, description, image } in advantages"
          :key="name"
          v-bind="{ name, description, image }"
        />
      </div>
    </div>
  </div>

  <div
    class="
      bg-blue-600 py-24

      lg:py-[120px]
    "
  >
    <div
      class="
        mx-auto max-w-[1440px] px-5

        xl:px-[150px]
      "
    >
      <div class="mb-6 flex items-start justify-between">
        <div class="flex items-start">
          <div class="flex flex-col justify-start gap-5">
            <div class="mr-4 flex items-center gap-3">
              <div
                class="
                  paragraphIcon mr-3 size-10 rounded-full bg-white p-2 text-lg
                "
              >
                💬
              </div>
              <h1
                class="
                  font-jakarta text-3xl font-bold leading-normal text-white

                  lg:text-big lg:leading-extra-height
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
          <RouterLink
            :to="{ name: 'Reviews' }"
            class="
              group hidden items-center gap-1 pt-3

              lg:flex
            "
          >
            <p
              class="
                whitespace-nowrap text-xs font-bold text-white transition-colors
                duration-300

                group-hover:text-zinc-100
              "
            >
              Всі відгуки
            </p>
            <ArrowRightIcon class="h-3 w-4 text-white" />
          </RouterLink>
        </div>
        <SButton
          variant="white"
          class="
            hidden

            lg:block
          "
          @click="isOpen = true"
        >
          Залишити відгук
        </SButton>
      </div>
      <div
        class="
          hidden

          lg:block
        "
      >
        <ReviewsSwiper :list="reviews" />
      </div>
      <div
        class="
          mb-7 flex w-full flex-col gap-4

          lg:hidden
        "
      >
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
      <div
        class="
          flex w-full flex-col items-center gap-7

          lg:hidden
        "
      >
        <RouterLink
          :to="{ name: 'Reviews' }"
          class="group flex items-center justify-center gap-1 pt-3"
        >
          <p
            class="
              whitespace-nowrap text-xs font-bold text-white transition-colors
              duration-300

              group-hover:text-zinc-100
            "
          >
            Всі відгуки
          </p>
          <ArrowRightIcon class="h-3 w-4 text-white" />
        </RouterLink>
        <SButton
          variant="white"
          class="
            block

            lg:hidden
          "
          @click="isOpen = true"
        >
          Залишити відгук
        </SButton>
      </div>
    </div>
  </div>

  <MapFrame />
</template>
