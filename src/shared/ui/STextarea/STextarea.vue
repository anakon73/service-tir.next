<script setup lang="ts">
import type { TextareaHTMLAttributes } from 'vue'
import type { ClassValue } from 'clsx'

import { cn } from '@/shared/lib/styles'

import type { Size } from './types'
import { textarea } from './lib'

export interface Props extends /* @vue-ignore */ TextareaHTMLAttributes {
  class?: ClassValue
  size?: Size
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'base',
})

const modelValue = defineModel<string>()
</script>

<template>
  <textarea
    v-model="modelValue"
    :placeholder="placeholder"
    :class="cn(
      textarea({ size }),
      props.class ?? '',
    )"
  />
</template>
