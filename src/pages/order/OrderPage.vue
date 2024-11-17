<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ChevronRightIcon } from '@heroicons/vue/24/solid'

import { OrderItem } from '@/widgets/order-item'
import { FormOrder } from '@/features/form/order'
import { useUserStore } from '@/entities/user'

const store = useUserStore()

const { cartList, totalPrice } = storeToRefs(store)
</script>

<template>
  <div
    class="
      container mb-24

      md:mb-32
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
      <p>Кошик</p>
    </div>

    <div
      class="
        mb-6 flex items-center text-gray-900

        lg:mb-11
      "
    >
      <div class="paragraphIcon size-10 rounded-full bg-white p-2 text-lg">
        📝
      </div>
      <h1
        class="
          ml-3 mr-4 font-jakarta text-3xl font-bold leading-normal

          lg:text-big lg:leading-extra-height
        "
      >
        Оформлення замовлення
      </h1>
      <p class="self-end whitespace-nowrap text-sm opacity-50">
        3 товара
      </p>
    </div>

    <div
      class="
        grid gap-10

        md:flex md:justify-between md:gap-5
      "
    >
      <FormOrder />
      <div
        class="
          card row-end-1 flex w-full flex-col gap-6 rounded-xl bg-white p-6

          md:max-w-[463px] md:self-start
        "
      >
        <div class="flex w-full flex-col gap-2.5">
          <h1 class="text-xl font-semibold leading-[30px] text-black">
            Ваше замовлення:
          </h1>
          <OrderItem
            v-for="item in cartList"
            :key="item.code"
            :="item"
          />
        </div>
        <hr>
        <h2 class="flex justify-between text-lg font-semibold text-gray-900">
          <p>Загальна сума</p>
          <p>{{ totalPrice }} &#8372;</p>
        </h2>
      </div>
    </div>
  </div>
</template>
