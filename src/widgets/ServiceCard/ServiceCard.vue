<script setup lang="ts">
import SButton from '@/shared/ui/SButton/SButton.vue'

export interface Props {
  image: string
  name: string
  description: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="
    card flex h-full max-w-[560px] flex-col gap-4
    rounded-2xl py-3 pl-3 pr-1.5 lg:flex-row
    "
  >
    <img
      class="max-h-80 rounded-2xl lg:max-h-40"
      :src="image"
      alt="service icon"
    >
    <div class="flex flex-col gap-2">
      <h1 class="text-lg font-bold leading-6 text-gray-900">
        {{ name }}
      </h1>
      <p class="text-xs leading-5 text-neutral-500 opacity-70">
        {{ description }}
      </p>
      <SButton>
        Детальніше
      </SButton>
    </div>
  </div>
</template>
