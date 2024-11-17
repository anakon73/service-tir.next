<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { ChevronRightIcon } from '@heroicons/vue/24/solid'

import { CartItem } from '@/widgets/cart-item'
import { useUserStore } from '@/entities/user'
import { SButton } from '@/shared/ui/SButton'

const store = useUserStore()

const { cartList, price, totalPrice, totalDiscount } = storeToRefs(store)
</script>

<template>
  <div class="container mb-24">
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
    <div class="mb-8 flex items-center gap-3">
      <div class="paragraphIcon size-10 rounded-full bg-white p-2 text-lg">
        🛒
      </div>
      <h1
        class="
          font-jakarta text-3xl font-bold leading-normal text-gray-900

          lg:text-big lg:leading-extra-height
        "
      >
        Кошик
      </h1>
    </div>
    <div
      class="
        grid items-start gap-5

        lg:flex
      "
    >
      <div class="flex w-full flex-col gap-2">
        <div
          class="
            hidden w-full justify-between gap-16 rounded-lg bg-gray-100 text-sm
            tracking-[0.28px] text-gray-900

            md:flex
          "
        >
          <p class="w-full max-w-[240px] px-6 py-4">
            Назва товару
          </p>
          <p class="px-6 py-4">
            Вартість
          </p>
        </div>
        <CartItem
          v-for="item in cartList"
          :key="item.code"
          :="item"
        />
      </div>
      <div
        class="
          card row-end-1 flex w-full flex-col gap-6 rounded-xl border
          border-gray-100 bg-white px-5 py-6

          lg:max-w-[270px]
        "
      >
        <h1 class="text-xl font-semibold text-gray-900">
          Ваше замовлення:
        </h1>
        <div>
          <div class="flex flex-col gap-5">
            <div class="flex flex-col gap-3">
              <div class="flex items-center justify-between">
                <p class="text-neutral-400">
                  Товари ({{ cartList?.length }})
                </p>
                <p class="font-medium text-zinc-600">
                  {{ price }} &#8372;
                </p>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-neutral-400">
                  Знижка
                </p>
                <p class="font-medium text-zinc-600">
                  {{ totalDiscount }} &#8372;
                </p>
              </div>
            </div>
            <hr>
            <div
              class="
                flex items-center justify-between font-semibold text-gray-900
              "
            >
              <p class="text-lg">
                Сума
              </p>
              <p class="text-xl">
                {{ totalPrice }} &#8372;
              </p>
            </div>
          </div>
        </div>
        <SButton
          :to="{ name: 'Order' }"
          :as="RouterLink"
          class="flex justify-center"
        >
          Оформити замовлення
        </SButton>
      </div>
    </div>
  </div>
</template>
