<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside, onKeyDown } from '@vueuse/core'
import { Dialog, DialogOverlay, DialogPanel } from '@headlessui/vue'

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

const panel = ref(null)

onKeyDown('Escape', () => emits('close'))

onClickOutside(panel, () => emits('close'))
</script>

<template>
  <Dialog as="div" :open="open" class="relative z-20">
    <DialogOverlay
      class="fixed inset-0 z-40 bg-black/25"
    />

    <div
      class="
        fixed inset-0 z-50 flex h-full items-center justify-center overflow-y-auto p-5
        text-center
      "
    >
      <DialogPanel
        ref="panel"
        :class="
          cn(
            `
              relative w-full overflow-hidden rounded-[30px] bg-white py-10 text-left
              align-middle transition-all
            `,
            size === 'md' && 'max-w-md',
            size === 'lg' && 'max-w-[600px]',
            props.class,
          )
        "
      >
        <slot />
      </DialogPanel>
    </div>
  </Dialog>
</template>
