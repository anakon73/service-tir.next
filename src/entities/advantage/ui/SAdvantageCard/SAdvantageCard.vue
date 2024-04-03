<script setup lang="ts">
export interface Props {
  name: string
  description: string
  image: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="
    card inline-flex h-full flex-col gap-3
    rounded-2xl border border-gray-100 bg-white p-6
    "
  >
    <div class="size-[50px] rounded-lg bg-gray-100 p-3 text-lg">
      {{ image }}
    </div>
    <div>
      <h1
        class="
        text-sm font-bold tracking-[0.28px]
        text-gray-700 md:text-lg md:tracking-[0.36px]
        "
      >
        {{ name }}
      </h1>
      <p
        class="
        max-w-[230px] text-[10px] leading-4
        text-neutral-500 opacity-70 md:text-xs md:leading-5
        "
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>
