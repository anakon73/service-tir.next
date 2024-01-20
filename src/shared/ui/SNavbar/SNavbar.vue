<script setup lang="ts"></script>

<template>
  <div class="hidden bg-gray-100 text-sm md:block">
    <ul
      class="
      flex w-full select-none items-center justify-center
      gap-14 text-gray-900
      "
    >
      <li
        class="px-2 py-5 font-bold underline decoration-2
        underline-offset-[23px] transition-colors duration-300
        hover:text-slate-500
        "
      >
        Головна
      </li>
      <li
        class="
        flex cursor-pointer px-2 py-5 transition-colors
        duration-300 hover:text-slate-400
        "
      >
        <p>Каталог</p>
        <p
          id="catalogItems"
          class="
          relative bottom-2 h-4 rounded-md bg-blue-100 px-1
          text-[10px] font-medium text-blue-600
          "
        >
          2000
        </p>
      </li>
      <li
        class="
        cursor-pointer px-2 py-5 transition-colors duration-300
        hover:text-slate-400
        "
      >
        Послуги
      </li>
      <li
        class="
        cursor-pointer px-2 py-5 transition-colors duration-300
        hover:text-slate-400
        "
      >
        Про нас
      </li>
      <li
        class="
        cursor-pointer px-2 py-5 transition-colors duration-300
        hover:text-slate-400
        "
      >
        Контакти
      </li>
    </ul>
  </div>
</template>
