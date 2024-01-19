<script setup lang="ts"></script>

<template>
  <div class="relative z-40 bg-gray-100 py-6">
    <div
      class="mx-auto max-w-[1440px] justify-between px-5 xl:flex 2xl:px-[150px]"
    >
      <button>
        <img
          src="/src/shared/assets/images/logo.svg"
          alt="service tir logo"
        >
      </button>
      <ul
        class="
        mt-8 flex select-none flex-wrap items-center gap-9
        text-gray-900 lg:gap-[53px] xl:mt-0 xl:justify-center
        "
      >
        <li
          class="cursor-pointer font-bold transition-colors
          duration-300 hover:text-gray-950
          "
        >
          Головна
        </li>
        <li class="flex cursor-pointer">
          <p class="transition-colors duration-300 hover:text-gray-950">
            Каталог
          </p>
          <p
            id="catalogItemsFooter"
            class="
            relative -top-1.5 h-4 rounded-md bg-blue-100
            px-1 text-[10px] font-medium text-blue-600
            "
          >
            2000
          </p>
        </li>
        <li
          class="cursor-pointer transition-colors duration-300
          hover:text-gray-950
          "
        >
          Послуги
        </li>
        <li
          class="cursor-pointer transition-colors duration-300
          hover:text-gray-950
          "
        >
          Про нас
        </li>
        <li
          class="cursor-pointer transition-colors duration-300
          hover:text-gray-950
          "
        >
          Контакти
        </li>
        <li
          class="cursor-pointer transition-colors duration-300
          hover:text-gray-950
          "
        >
          Відгуки
        </li>
        <li
          class="cursor-pointer transition-colors duration-300
          hover:text-gray-950
          "
        >
          Статті
        </li>
      </ul>
    </div>
  </div>
</template>
