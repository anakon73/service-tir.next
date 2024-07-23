<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue'
import type { ClassValue } from 'clsx'

import { cn } from '@/shared/lib/styles'

export interface Props extends /* @vue-ignore */ InputHTMLAttributes {
  class?: ClassValue
  label?: string
  small?: boolean
}

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<Props>()

const modelValue = defineModel<string>()
</script>

<template>
  <div class="text-slate-700">
    <label
      v-if="props.label"
      class="mb-1 block text-sm font-semibold leading-small"
    >
      {{ props.label }}
    </label>
    <input
      v-model="modelValue"
      :class="cn(
        `
          rounded-lg border-slate-300 p-4

          focus:ring-0
        `,
        props.small && 'text-sm font-semibold leading-small',
        props.class ?? '',
      )"
      v-bind="$attrs"
    >
  </div>
</template>
