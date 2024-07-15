<script setup lang="ts">
import { SHeader } from '@/widgets/header'
import { SFooter } from '@/shared/ui/SFooter'
</script>

<template>
  <div class="flex min-h-screen flex-col justify-between">
    <div>
      <SHeader class="relative z-50 mb-10 md:mb-5" />
      <slot />
    </div>
    <SFooter />
  </div>
</template>
