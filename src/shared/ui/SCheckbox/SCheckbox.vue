<script setup lang="ts" generic="TModel extends CheckboxValue, TValue extends TModel">
import { type InputHTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'

import { type ClassValue, cn } from '@/shared/lib/styles'

export type CheckboxValue =
  | readonly unknown[]
  | ReadonlySet<unknown>
  | boolean
  | string
  | Readonly<Record<string, unknown>>
  | number

export interface Props<
  TModel extends CheckboxValue, TValue extends TModel,
> extends /* @vue-ignore */ InputHTMLAttributes {
  id?: string
  subCheckbox?: boolean
  class?: ClassValue
  modelValue?: TModel | readonly TModel[]
  value?: TValue
  rootClass?: ClassValue
}

export type Emits<TValue extends CheckboxValue> = {
  'update:modelValue': [value: TValue]
}

export interface Slots {
  default?: () => any
}

defineOptions({ inheritAttrs: false })

const props = defineProps<Props<TModel, TValue>>()

const emit = defineEmits<Emits<TValue>>()

const $slots = defineSlots<Slots>()

const vModel = useVModel(props, 'modelValue', emit)
</script>

<template>
  <div
    :class="cn(
      'flex items-center gap-2.5',
      props.rootClass ?? '',
    )"
  >
    <input
      v-bind="$attrs"
      :id="id"
      v-model="vModel"
      :value="value"
      :class="cn(
        `size-4 rounded-sm border-slate-300
        checked:bg-blue-600 focus:ring-transparent`,
        props.class ?? '',
      )"
      type="checkbox"
    >

    <label
      v-if="$slots.default"
      :for="id"
      :class="cn(
        'text-sm uppercase text-gray-900 cursor-pointer',
        !subCheckbox && 'font-medium',
      )"
    >
      <slot />
    </label>
  </div>
</template>
