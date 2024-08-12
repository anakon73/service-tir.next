<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { Field, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'

import { useUserStore } from '@/entities/user'

import { useResetPassword } from '@/shared/api/user'
import { SButton } from '@/shared/ui/SButton'
import { SInput } from '@/shared/ui/SInput'

import type { FormFields } from './types'
import { produceInitialValues, produceValidationSchema } from './lib'

const { mutate, error, isError } = useResetPassword()

const router = useRouter()

const userStore = useUserStore()

const { emailForResetPassword } = storeToRefs(userStore)

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const initialValues = computed(() => produceInitialValues())

const validationSchema = computed(
  () => toTypedSchema(produceValidationSchema()),
)

const {
  handleSubmit,
  resetForm,
} = useForm<FormFields>({
  initialValues: produceInitialValues(),
  validationSchema,
})

const onSubmit = handleSubmit((result) => {
  mutate(
    { email: emailForResetPassword.value!, password: result.password },
    { onSuccess: () => router.push({ name: 'Authentication' }) },
  )
})

watch(initialValues, (values) => {
  resetForm({ values })
})
</script>

<template>
  <form @submit="onSubmit">
    <Field v-slot="{ field, errorMessage, meta }" name="password">
      <div class="mb-2">
        <div class="relative">
          <SInput
            v-bind="field"
            label="Password"
            small
            class="w-full"
            :type="showPassword ? 'text' : 'password'"
          />
          <button
            class="absolute right-4 top-1/2 translate-y-1/2"
            type="button"
            @click="showPassword = !showPassword"
          >
            <EyeIcon
              v-if="showPassword"
              class="size-4 text-slate-700/50"
            />
            <EyeSlashIcon
              v-else
              class="size-4 text-slate-700/50"
            />
          </button>
        </div>
        <p
          v-if="errorMessage && meta.touched"
          class="mt-1 text-xs text-red-600"
        >
          {{ errorMessage }}
        </p>
      </div>
    </Field>
    <Field v-slot="{ field, errorMessage, meta }" name="confirmPassword">
      <div class="mb-6">
        <div class="relative">
          <SInput
            v-bind="field"
            label="Confirm password"
            small
            class="w-full"
            :type="showConfirmPassword ? 'text' : 'password'"
          />
          <button
            class="absolute right-4 top-1/2 translate-y-1/2"
            type="button"
            @click="showConfirmPassword = !showConfirmPassword"
          >
            <EyeIcon
              v-if="showConfirmPassword"
              class="size-4 text-slate-700/50"
            />
            <EyeSlashIcon
              v-else
              class="size-4 text-slate-700/50"
            />
          </button>
        </div>
        <p
          v-if="errorMessage && meta.touched"
          class="mt-1 text-xs text-red-600"
        >
          {{ errorMessage }}
        </p>
      </div>
    </Field>
    <div class="mb-4 flex gap-5">
      <SButton variant="light" type="button" @click="userStore.setEmail(null)">
        Назад
      </SButton>
      <SButton type="submit">
        Підтвердити
      </SButton>
    </div>
    <p v-if="isError" class="text-sm text-red-600">
      {{ error?.response }}
    </p>
  </form>
</template>
