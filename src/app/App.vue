<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppLayout from '@/pages/layouts/AppLayout.vue'
</script>

<template>
  <AppLayout>
    <RouterView :key="$route.fullPath" />
  </AppLayout>
</template>
