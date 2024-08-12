<script setup lang="ts">
import { FormRegister } from '@/features/form/register'
</script>

<template>
  <div class="w-full max-w-[370px]">
    <h1 class="mb-6 text-2xl font-semibold text-gray-900">
      Реєстрація
    </h1>
    <FormRegister />
    <p class="text-sm leading-small tracking-[0.28px] text-zinc-700">
      Вже є аккаунт?
      <a
        href="/authentication/"
        class="
          ml-2 font-medium text-blue-600 underline underline-offset-2 transition-colors
          duration-300

          hover:text-blue-800
        "
      >
        Увійти
      </a>
    </p>
  </div>
</template>
