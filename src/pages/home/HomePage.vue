<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/entities/user'

const userStore = useUserStore()

const { user } = storeToRefs(userStore)
</script>

<template>
  {{ user }}
</template>
