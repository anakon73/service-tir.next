<script setup lang="ts">
import type { ClassValue } from 'clsx'
import { computed, toRefs } from 'vue'
import type { ButtonHTMLAttributes, Component } from 'vue'

import type { AsTag, VariantProps } from '@/shared/lib/styles'
import { cn } from '@/shared/lib/styles'

import type { Size, Variant } from './types'
import { button } from './lib'

type ButtonProps = VariantProps<typeof button>

export interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
  class?: ClassValue
  as?: Component | AsTag
  type?: HTMLButtonElement['type']
  variant?: Variant
  size?: Size
  icon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  type: 'button',
  variant: 'primary',
  size: 'base',
})

export interface Slots {
  default: any
  append: any
}

const slots = defineSlots<Slots>()

const { icon } = toRefs(props)

const _content = computed((): ButtonProps['_content'] => {
  if (slots.append) {
    return 'textAndIcon'
  }

  return icon.value ? 'icon' : 'text'
})
</script>

<template>
  <component
    :is="as"
    :class="cn(
      button({
        size,
        variant,
        _content,
      }),
      props.class ?? '',
    )"
  >
    <slot />

    <slot name="append" />
  </component>
</template>
