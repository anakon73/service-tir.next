<script setup lang="ts">
import { format } from 'date-fns'
import { computed, toRefs } from 'vue'
import { ArrowUpRightIcon } from '@heroicons/vue/24/solid'

export interface Props {
  date: Date
  name: string
  description: string
  image: string
}

const props = defineProps<Props>()

const { date } = toRefs(props)

const formattedDate = computed(() => format(date.value, 'd MMMM u'))
</script>

<template>
  <div class="flex size-full max-w-[367px] flex-col gap-3 md:gap-7">
    <img
      :src="image"
      alt="article image"
      class="max-h-[240px] rounded-lg"
    >
    <div class="flex w-full flex-col gap-2 md:gap-3">
      <p class="text-xs font-semibold leading-5 text-gray-400">
        {{ formattedDate }}
      </p>
      <div class="flex items-start gap-4">
        <h1
          class="font-semibold leading-7 text-zinc-900 md:text-2xl md:leading-8"
        >
          {{ name }}
        </h1>
        <button>
          <ArrowUpRightIcon class="size-6 pt-2" />
        </button>
      </div>
      <p class="text-xs leading-4 text-gray-400 md:text-base md:leading-6">
        {{ description }}
      </p>
    </div>
  </div>
</template>
