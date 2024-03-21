<script setup lang="ts">
import { ref } from 'vue'
import {
  Bars3Icon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

import { ProductSearch } from '@/features/product/search'

import { cn } from '@/shared/lib/styles'
import { SNavbar } from '@/shared/ui/SNavbar'

defineProps<{
  logged?: boolean
}>()

const isShowDropdown = ref(false)
</script>

<template>
  <div>
    <div>
      <div
        :class="cn(
          `fixed top-0 z-50 flex size-full flex-col gap-6 overflow-y-auto
          bg-blue-600 px-8 py-7 text-white transition-all
          duration-300 ease-in md:hidden`,
          !isShowDropdown && 'opacity-0 -translate-y-full',
        )"
      >
        <div class="flex items-center justify-between">
          <img
            src="../../shared/assets/images/logo.svg"
            alt="service tir logo"
            class="max-w-none"
          >
          <button @click="isShowDropdown = false">
            <XMarkIcon class="size-5 text-white hover:text-zinc-200" />
          </button>
        </div>
        <ul
          class="
          flex flex-col gap-5 transition-colors duration-300 hover:text-zinc-200
          "
        >
          <li>Головна</li>
          <li>Каталог</li>
          <li>Послуги</li>
          <li>Про нас</li>
          <li>Контакти</li>
          <li>Відгуки</li>
          <li>Статті</li>
        </ul>
        <hr class="border-[0.5px] border-zinc-50/50">
        <div
          v-if="logged"
          class="flex items-center gap-2"
        >
          <UserIcon
            class="size-5 text-white group-hover:text-zinc-200"
          />
          <div class="text-xs font-medium">
            <p class="transition-colors duration-300 hover:text-zinc-200">
              Олександр
            </p>
            <p
              class="
              text-white transition-colors duration-300 hover:text-zinc-200
              "
            >
              Вийти
            </p>
          </div>
        </div>
        <button
          v-else
          class="group flex items-center gap-2"
        >
          <UserIcon
            class="size-5 text-white group-hover:text-zinc-200"
          />
          <p class="transition-colors duration-300 group-hover:text-zinc-200">
            Особистий кабінет
          </p>
        </button>
        <button class="group flex items-center gap-2">
          <div class="relative">
            <HeartIcon
              class="size-5 text-white group-hover:text-zinc-200"
            />
            <div
              id="favorite"
              class="
              absolute -top-0.5 left-3.5 inline-flex h-2.5 items-center
              justify-center rounded-full border border-white bg-cyan-100
              px-0.5 text-center text-[8px] text-sky-500
              "
            >
              0
            </div>
          </div>
          <p class="transition-colors duration-300 group-hover:text-zinc-200">
            Обране
          </p>
        </button>
        <div class="group">
          <div
            class="
            flex items-center gap-2 transition-colors
            duration-300 group-hover:text-zinc-200
            "
          >
            <div class="relative">
              <ShoppingCartIcon
                class="size-5 text-white group-hover:text-zinc-200"
              />
              <div
                class="
                absolute -top-0.5 left-3.5 inline-flex h-2.5 items-center
                justify-center rounded-full border border-white bg-green-100
                px-0.5 text-center text-[8px] text-emerald-500
                "
              >
                6
              </div>
            </div>
            <div class="flex gap-2">
              <p>&#8372;10 000</p>
              <p>Кошик</p>
            </div>
          </div>
        </div>
        <ProductSearch mobile />
      </div>
      <header class="relative z-20 py-7 text-sm text-gray-900 md:py-5">
        <div
          class="
          mx-auto hidden items-center justify-between
          gap-2 px-8 md:flex xl:max-w-[1440px] xl:px-36
          "
        >
          <img
            src="../../shared/assets/images/logo.svg"
            alt="service tir logo"
            class="max-w-none"
          >
          <div class="w-full max-w-lg">
            <ProductSearch />
          </div>
          <div class="flex h-5 gap-8">
            <div
              v-if="logged"
              class="flex items-center gap-1"
            >
              <UserIcon
                class="size-5 text-gray-900 hover:text-gray-950"
              />
              <div class="text-xs font-medium">
                <p class="transition-colors duration-300">
                  Олександр
                </p>
                <a href="/">
                  <p
                    class="
                    text-blue-600 transition-colors
                    duration-300 hover:text-blue-800
                    "
                  >
                    Вийти
                  </p>
                </a>
              </div>
            </div>
            <UserIcon
              v-else
              class="size-5 text-gray-900 hover:text-gray-950"
            />

            <button class="relative">
              <HeartIcon
                class="size-5 text-gray-900 hover:text-gray-950"
              />
              <div
                id="favorite"
                class="
                absolute -top-0.5 left-3.5 inline-flex h-2.5 items-center
                justify-center rounded-full border border-white bg-cyan-100
                px-0.5 text-center text-[8px] text-sky-500
                "
              >
                0
              </div>
            </button>
            <button class="flex items-center gap-2">
              <div class="relative">
                <ShoppingCartIcon
                  class="size-5 text-gray-900 hover:text-gray-950"
                />
                <div
                  class="
                  absolute -top-0.5 left-3.5 inline-flex h-2.5 items-center
                  justify-center rounded-full border border-white bg-green-100
                  px-0.5 text-center text-[8px] text-emerald-500
                  "
                >
                  6
                </div>
              </div>
              <div class="max-w-[80px] truncate">
                &#8372; <span id="cartCost">10000</span>
              </div>
            </button>
          </div>
        </div>
        <div class="px-5 md:hidden">
          <div class="flex items-center justify-between">
            <img
              src="../../shared/assets/images/logo.svg"
              alt="service tir logo"
              class="max-w-none"
            >
            <button
              class="h-4 w-6"
              @click="isShowDropdown = true"
            >
              <Bars3Icon
                class="text-gray-900 hover:text-gray-950"
              />
            </button>
          </div>
        </div>
      </header>
    </div>
    <SNavbar class="hidden md:block" />
  </div>
</template>
