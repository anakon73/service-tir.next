<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/solid'

import { SButton } from '@/shared/ui/SButton'

const phones = ['380980000122', '380980000122']
const emails = ['avtobaza12@ukr.net', 'avtobaza12@ukr.net']

function formatPhoneNumber(number: string) {
  const formatted = `
  +${
    number.slice(0, 2)}(${number.slice(2, 5)})-${
      number.slice(5, 9)}-${number.slice(9, 12)}
  `

  return formatted
}
</script>

<template>
  <div
    class="
      container mb-24

      lg:mb-32
    "
  >
    <div
      class="
        mb-8 flex items-center gap-1 text-xs text-gray-900 transition-colors
        duration-300

        hover:text-gray-950

        sm:mb-10
      "
    >
      <RouterLink :to="{ name: 'Home' }" class="opacity-50">
        Головна
      </RouterLink>
      <ChevronRightIcon class="size-2" />
      <p>Контакти</p>
    </div>
    <div class="mb-10 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="paragraphIcon size-10 rounded-full bg-white p-2 text-lg">
          📱
        </div>
        <h1
          class="
            whitespace-nowrap font-jakarta text-2xl font-bold leading-[26px]
            text-gray-900

            sm:text-big sm:leading-extra-height
          "
        >
          Наші контакти
        </h1>
      </div>
      <SButton
        class="
          hidden

          sm:block
        "
      >
        Зателефонувати
      </SButton>
    </div>
    <div
      class="
        mb-8 flex flex-col flex-wrap gap-6 text-base

        md:gap-[120px]

        sm:flex-row sm:items-start sm:gap-[50px]
      "
    >
      <div class="flex flex-col justify-start gap-2.5">
        <h2 class="font-bold">
          Адреса:
        </h2>
        <p class="leading-7 text-neutral-500">
          Україна, м. Львів,<br>
          вул. Пасічна 127
        </p>
      </div>
      <div class="flex flex-col justify-start gap-2.5">
        <h2 class="font-bold">
          Телефон
        </h2>
        <p
          v-for="phone in phones"
          :key="phone"
          class="
            leading-7 text-neutral-500 transition-colors duration-300

            hover:text-neutral-600
          "
        >
          <a :href="`tel:${phone}`">{{ formatPhoneNumber(phone) }}</a>
        </p>
      </div>
      <div class="flex flex-col justify-start gap-2.5">
        <h2 class="font-bold">
          Пошта:
        </h2>
        <p
          v-for="email in emails"
          :key="email"
          class="
            leading-7 text-neutral-500 underline transition-colors duration-300

            hover:text-neutral-600
          "
        >
          <a :href="`mailto:${email}`">{{ email }}</a>
        </p>
      </div>
      <button
        class="
          block self-start rounded-large bg-blue-600 px-9 py-3 text-xs font-bold
          text-white transition-colors duration-300

          hover:bg-blue-700 hover:text-zinc-100

          sm:hidden
        "
      >
        Зателефонувати
      </button>
    </div>
    <iframe
      src="
      https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5149.6088569
19481!2d24.05850095232348!3d49.808544341551475!2m3!1f0!2f0!3f0!3m2!1
i1024!2i768!4f13.1!3m3!1m2!1s0x473ae81a36741bbf%3A0xe7464f623da401
5b!2z0JvRjNCy0ZbQstGB0YzQutCwINCQ0LLRgtC-0LHQsNC30LAg4oSWMSwg0KLQ
lNCS!5e0!3m2!1sru!2sua!4v1698168999309!5m2!1sru!2sua
      "
      width="100%"
      style="border-radius: 30px"
      loading="lazy"
      class="
        h-[432px]

        sm:h-[550px]
      "
      referrerpolicy="no-referrer-when-downgrade"
    />
  </div>
</template>
