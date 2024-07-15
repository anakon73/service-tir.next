<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { SButton } from '@/shared/ui/SButton'

export interface Props {
  id: number
  image: string
  name: string
  description: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="
    card flex max-w-[560px] flex-col gap-3
    rounded-2xl p-3 lg:flex-row lg:gap-4 lg:pr-5
    "
  >
    <div>
      <img
        class="h-40 w-full rounded-2xl object-cover lg:w-auto lg:max-w-52"
        :src="image"
        alt="service icon"
      >
    </div>
    <div class="flex h-full flex-col justify-between gap-2">
      <div>
        <h1 class="mb-2 line-clamp-2 text-lg font-bold leading-6 text-gray-900">
          {{ name }}
        </h1>
        <p class="text-xs leading-5 text-neutral-500 opacity-70">
          {{ description }}
        </p>
      </div>
      <SButton :as="RouterLink" :to="{ name: 'Service', params: { id } }" class="self-start">
        Детальніше
      </SButton>
    </div>
  </div>
</template>
