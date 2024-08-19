<script setup lang="ts">
import { computed, watch } from 'vue'
import { Field, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'

import { useUserStore } from '@/entities/user'

import { useSetEmailForResetPassword } from '@/shared/api/user'
import { SButton } from '@/shared/ui/SButton'
import { SInput } from '@/shared/ui/SInput'

import type { FormFields } from './types'
import { produceInitialValues, produceValidationSchema } from './lib'

const { mutate, error, isError } = useSetEmailForResetPassword()

const { setEmail } = useUserStore()

const initialValues = computed(() => produceInitialValues())

const validationSchema = computed(
  () => toTypedSchema(produceValidationSchema()),
)

const { handleSubmit, resetForm } = useForm<FormFields>({
  initialValues: produceInitialValues(),
  validationSchema,
})

const onSubmit = handleSubmit((result) => {
  mutate(result, { onSuccess: setEmail })
})

watch(initialValues, (values) => {
  resetForm({ values })
})
</script>

<template>
  <form @submit="onSubmit">
    <Field v-slot="{ field, errorMessage, meta }" name="email">
      <div class="mb-6">
        <SInput
          v-bind="field"
          label="E-mail"
          small
          class="w-full"
          type="email"
        />
        <p
          v-if="errorMessage && meta.touched"
          class="mt-1 text-xs text-red-600"
        >
          {{ errorMessage }}
        </p>
      </div>
    </Field>
    <div class="flex gap-5">
      <SButton
        as="RouterLink"
        :to="{ name: 'Authentication' }"
        type="button"
        variant="light"
      >
        Назад
      </SButton>
      <SButton type="submit">
        Далі
      </SButton>
    </div>
    <p v-if="isError" class="mt-2 text-sm text-red-600">
      {{ error?.response }}
    </p>
  </form>
</template>
