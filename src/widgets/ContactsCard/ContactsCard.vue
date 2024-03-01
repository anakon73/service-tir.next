<script setup lang="ts">
import { MapIcon } from '@heroicons/vue/24/outline'
import { SButton } from '@/shared/ui/SButton'
</script>

<template>
  <div
    class="contactCard inline-block rounded-2xl bg-white p-8 min-[425px]:pr-16"
  >
    <div class="mb-9 flex items-center gap-3">
      <div
        class="
        paragraphIcon hidden size-10 rounded-full
        bg-white p-2 text-lg min-[425px]:block
        "
      >
        📱
      </div>
      <h1
        class="
        whitespace-nowrap font-jakarta text-3xl font-bold
        leading-normal text-gray-900 lg:text-big lg:leading-extra-height
        "
      >
        Наші контакти
      </h1>
    </div>
    <div class="mb-4 flex flex-col items-start gap-5 text-neutral-500">
      <div class="flex flex-col gap-2.5">
        <div class="font-bold">
          Адреса:
        </div>
        <div class="leading-7">
          Україна, м. Львів, вул. Пасічна 127
        </div>
      </div>
      <div
        class="
        flex flex-col gap-2.5 transition-colors
        duration-300 hover:text-zinc-900
        "
      >
        <div class="font-bold">
          Телефон
        </div>
        <div class="cursor-pointer leading-7">
          +38(098)-0000-122
        </div>
        <div class="cursor-pointer leading-7">
          +38(096)-0000-127
        </div>
        <div class="cursor-pointer leading-7">
          +38(098)-0000-127
        </div>
      </div>
      <div
        class="
        flex flex-col gap-2.5 transition-colors
        duration-300 hover:text-zinc-900
        "
      >
        <div class="font-bold">
          Пошта:
        </div>
        <div class="cursor-pointer leading-7 underline underline-offset-2">
          {{ 'avtobaza12@ukr.net' }}
        </div>
      </div>
      <SButton
        variant="primary"
        size="base"
      >
        Зателефонувати
      </SButton>
    </div>
    <button class="flex items-center gap-2.5 pl-3">
      <MapIcon
        class="size-4 text-blue-600"
      />
      <p class="text-xs font-medium text-blue-600">
        Прокласти маршрут
      </p>
    </button>
  </div>
</template>
