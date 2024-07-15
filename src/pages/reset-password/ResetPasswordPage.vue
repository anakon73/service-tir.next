<script setup lang="ts">
import { SButton } from '@/shared/ui/SButton'
import { SInput } from '@/shared/ui/SInput'
</script>

<template>
  <div class="w-full max-w-[370px]">
    <h1 class="mb-6 text-2xl font-semibold text-gray-900">
      Відновлення паролю
    </h1>
    <SInput
      class="mb-6 w-full"
      label="Ваш e-mail"
      small
    />
    <div class="flex items-start gap-5">
      <SButton variant="light">
        Назад
      </SButton>
      <SButton>
        Далі
      </SButton>
    </div>
  </div>
</template>
