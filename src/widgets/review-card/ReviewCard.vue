<script setup lang="ts">
import { SRating } from '@/entities/product'

export interface Props {
  rate: number
  author: string
  productName: string
  comment: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="
      card flex h-full flex-col gap-2 rounded-[10px] bg-white p-4

      lg:max-w-[560px] lg:gap-1 lg:p-6

      min-[425px]:min-w-[387px]
    "
  >
    <h1
      class="
        font-bold uppercase text-gray-800

        lg:text-xl
      "
    >
      {{ author }}
    </h1>
    <div
      class="
        block flex-wrap items-center gap-2

        lg:gap-3

        min-[425px]:flex
      "
    >
      <p
        class="
          whitespace-nowrap text-xs font-medium leading-[30px] text-gray-800

          lg:text-sm
        "
      >
        Відгук про товар:
      </p>
      <div class="flex items-center gap-1">
        <p
          class="
            whitespace-nowrap text-xs font-semibold leading-[30px] text-blue-600

            lg:text-sm
          "
        >
          {{ productName }}
        </p>
        <SRating :rate="rate" />
      </div>
    </div>
    <p
      class="
        text-[10px] leading-small text-neutral-500

        lg:text-xs
      "
    >
      {{ comment }}
    </p>
  </div>
</template>
