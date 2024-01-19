<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'
import type { ClassValue } from 'clsx'

import { cn } from '@/shared/lib/styles'

export interface Props extends /* @vue-ignore */ InputHTMLAttributes {
  class?: ClassValue
}

const props = defineProps<Props>()

const modelValue = defineModel<string>()
</script>

<template>
  <input
    v-model="modelValue"
    type="text"
    :class="cn(
      'rounded-lg border-slate-300 p-4 focus:ring-0',
      props.class ?? '',
    )"
  >
</template>
