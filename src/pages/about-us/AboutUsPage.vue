<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'

import { MapFrame } from '@/widgets/map-frame'
import { ReviewCard } from '@/widgets/review-card'
import { ReviewsSwiper } from '@/widgets/reviews-swiper'

import { SAdvantageCard } from '@/entities/advantage'
import { SButton } from '@/shared/ui/SButton'
import { advantages, reviews, workers } from './config'

const isOpen = ref(false)
</script>

<template>
  <div class="container">
    <div
      class="
        mb-8 flex items-center gap-1 text-xs text-gray-900 transition-colors
        duration-300

        hover:text-gray-950

        md:mb-10
      "
    >
      <RouterLink :to="{ name: 'Home' }" class="opacity-50">
        Головна
      </RouterLink>
      <ChevronRightIcon class="size-2" />
      <p>
        Про нас
      </p>
    </div>
    <div
      class="
        mb-28 flex flex-col items-center justify-between gap-5

        lg:flex-row
      "
    >
      <div class="flex flex-col gap-5">
        <div class="flex items-center gap-3">
          <div class="paragraphIcon size-10 rounded-full bg-white p-2 text-lg">
            🙌
          </div>
          <h1
            class="
              font-jakarta text-3xl font-bold leading-normal text-gray-900

              lg:text-big lg:leading-extra-height
            "
          >
            Про нас
          </h1>
        </div>
        <p
          class="
            max-w-xl text-xs leading-5 text-gray-900

            lg:text-sm lg:leading-6
          "
        >
          Львівська Автобаза No1 вже понад 30 років надає транспортні послуги.
          На нашій власній території ми маємо стоянку TIR, мийку шиномонтаж та
          сервіс, де одночасно можемо обслуговувати до 10 машин. В основному
          ми перевозимо вантажі по Євросоюзу та країнам Шенгенської зони. Наш
          автопарк постійно збільшується та оновлюється. На сьогодні ми маємо
          декілька десятків сучасних автомобілів стандарту євро-6 з різними
          кузовами, причепами, завдяки чому наш автопарк завжди може бути
          адаптований до потреб клієнта. На нашій базі ми маємо окрему
          майстерню Tir-Service для ремонту наших транспортних засобів і
          команду спеціалізованих автомеханіків, завдяки чому наші транспортні
          засоби знаходяться на постійному технічному контролі і в справному
          стані. Ми пишаємося професіоналізмом, підтвердженим багатьма
          сертифікатами та нагородами, і відмінним штатом експедиторів та
          інших спеціалістів.
        </p>
        <div class="flex items-center gap-2.5">
          <h2 class="text-big font-bold leading-[60px] text-blue-600">
            150
          </h2>
          <p class="text-sm leading-6 text-gray-900">
            людей в команді <br>
            забезпечують успіх
          </p>
        </div>
      </div>
      <img
        class="
          w-full

          lg:w-auto

          md:w-[500px]
        "
        src="./assets/aboutUsPhoto.png"
        alt="about us image"
      >
    </div>
  </div>

  <div
    class="
      mb-20 bg-[#FBFDFF] py-24

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
      container mb-24

      md:mb-28
    "
  >
    <div class="mb-10 flex items-center gap-3">
      <div class="paragraphIcon size-10 rounded-full bg-white p-2 text-lg">
        🛠️
      </div>

      <h1
        class="
          font-jakarta text-3xl font-bold leading-normal text-gray-900

          lg:text-big lg:leading-extra-height
        "
      >
        Наші майстри
      </h1>
    </div>
    <div
      class="
        justify-center gap-5

        md:flex
      "
    >
      <div class="flex flex-col gap-36">
        <div
          v-for="worker in workers.slice(0, 3)"
          :key="worker.name"
          class="
            flex flex-col gap-7

            md:max-w-md
          "
        >
          <img
            class="h-[540px] rounded-2xl object-cover"
            :src="worker.image"
          >
          <div
            class="flex justify-between font-inter font-medium leading-small"
          >
            <p class="text-neutral-800">
              {{ worker.name }}
            </p>
            <p class="text-slate-500">
              {{ worker.jobTitle }}
            </p>
          </div>

          <hr>
        </div>
      </div>
      <div class="flex flex-col gap-36 pt-36">
        <div
          v-for="worker in workers.slice(3, 6)"
          :key="worker.name"
          class="
            flex flex-col gap-7

            md:max-w-md
          "
        >
          <img
            class="h-[540px] rounded-2xl object-cover"
            :src="worker.image"
          >
          <div
            class="flex justify-between font-inter font-medium leading-small"
          >
            <p class="text-neutral-800">
              {{ worker.name }}
            </p>
            <p class="text-slate-500">
              {{ worker.jobTitle }}
            </p>
          </div>

          <hr>
        </div>
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
