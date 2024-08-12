<script setup lang="ts">
import { onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'

import { useUserStore } from '@/entities/user'

import { EmailStep } from './ui/email-step'
import { NewPasswordStep } from './ui/new-password-step'

const userStore = useUserStore()

const { emailForResetPassword } = storeToRefs(userStore)

onUnmounted(() => userStore.setEmail(null))
</script>

<template>
  <EmailStep v-if="!emailForResetPassword" />
  <NewPasswordStep v-else />
</template>
