<script setup lang="ts">
import { ref } from 'vue'
import {
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
} from 'radix-vue'
import { onClickOutside, onKeyDown } from '@vueuse/core'

import { type ClassValue, cn } from '@/shared/lib/styles'
import type { Size } from './types'

export interface Props {
  open: boolean
  size?: Size
  class?: ClassValue
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
})

const emits = defineEmits<{ close: [] }>()

const dialogContent = ref(null)

onKeyDown('Escape', () => emits('close'))

onClickOutside(dialogContent, () => emits('close'))
</script>

<template>
  <DialogRoot :open="open">
    <DialogPortal>
      <DialogOverlay
        class="fixed inset-0 z-50 bg-black/25"
        @click="emits('close')"
      />
      <DialogContent
        class="
          fixed inset-0 z-50 flex h-full items-center justify-center
          overflow-y-auto p-5 text-center
        "
      >
        <div
          ref="dialogContent"
          :class="cn(
            `
              relative w-full overflow-hidden rounded-[30px] bg-white py-10
              text-left align-middle transition-all
            `,
            size === 'md' && 'max-w-md',
            size === 'lg' && 'max-w-[600px]',
            props.class,
          )"
        >
          <slot />
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
