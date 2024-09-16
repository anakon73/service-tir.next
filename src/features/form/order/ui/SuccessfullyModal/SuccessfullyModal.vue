<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/24/solid'
import { SButton } from '@/shared/ui/SButton'
import { SDialog } from '@/shared/ui/SDialog'

defineProps<{ open: boolean }>()
defineEmits<{ close: [] }>()
</script>

<template>
  <SDialog size="lg" :open="open" @close="$emit('close')">
    <div class="flex flex-col items-center gap-8">
      <div class="flex flex-col items-center gap-3">
        <CheckIcon class="size-10 rounded-full bg-emerald-500 p-3 text-white" />
        <h1 class="text-xl font-bold leading-[30px] tracking-[0.4px]">
          Замовлення оформлене
        </h1>
        <p class="max-w-[450px] text-center leading-6 tracking-[0.32px]">
          Ваше замовлення успішно оформлене. На протязі 24 годин з вами звʼяжеться
          наш менеджер.
        </p>
      </div>
      <SButton variant="light" @click="$emit('close')">
        На головну
      </SButton>
    </div>
  </SDialog>
</template>
