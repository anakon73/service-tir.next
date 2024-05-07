<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/shared/lib/styles'

export interface Props {
  name: string
  duration: {
    min: number | null
    max: number | null
  }
  price: number
  secondary: boolean
}

const props = defineProps<Props>()

const duration = computed(() => {
  if (props.duration.min && props.duration.max) {
    return `Від ${props.duration.min} до ${props.duration.max} дня`
  }
  else if (props.duration.max) {
    return `До ${props.duration.max} днів`
  }
  else {
    return `Від ${props.duration.min} днів`
  }
})
</script>

<template>
  <div
    :class="cn(
      'py-2 tracking-[0.32px] text-gray-900 md:flex',
      props.secondary
        ? 'bg-gray-100 py-2 tracking-[0.32px] text-gray-900 md:flex'
        : 'bg-white',
    )"
  >
    <p class="w-full p-3 font-medium md:max-w-[63%] md:truncate">
      {{ props.name }}
    </p>
    <div class="flex w-full md:max-w-[37%]">
      <p class="w-full max-w-[63.6%] p-3">
        {{ duration }}
      </p>
      <p class="w-full max-w-[36.4%] p-3">
        {{ price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} &#8372;
      </p>
    </div>
  </div>
</template>
