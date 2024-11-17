<script setup lang="ts">
import SButton from '@/shared/ui/SButton/SButton.vue'
import { SInput } from '@/shared/ui/SInput'
</script>

<template>
  <div
    class="
      mb-24

      md:mb-32
    "
  >
    <div class="mb-1.5 flex max-w-[370px] flex-col gap-4">
      <SInput class="w-full" label="Імʼя та прізвище" />
      <SInput class="w-full" label="Місто" />
      <SInput class="w-full" label="Номер телефона" />
      <SInput class="w-full" label="E-mail" />
      <SInput class="w-full" label="Пароль" />
      <button
        class="
          mb-8 block text-xs font-medium leading-[18px] text-blue-600
          transition-colors duration-300

          hover:text-blue-800
        "
      >
        Змінити пароль
      </button>
      <SButton disabled>
        Зберегти зміни
      </SButton>
    </div>
  </div>
</template>
