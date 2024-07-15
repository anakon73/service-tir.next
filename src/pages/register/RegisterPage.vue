<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Field, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'

import { useRegisterUser } from '@/shared/api/user'
import { SButton } from '@/shared/ui/SButton'
import { SInput } from '@/shared/ui/SInput'

import type { FormFields } from './types'
import { produceInitialValues, produceValidationSchema } from './lib'

const showPassword = ref(false)

const { mutate } = useRegisterUser()

const initialValues = computed(() => produceInitialValues())

const validationSchema = computed(
  () => toTypedSchema(produceValidationSchema()),
)

const { handleSubmit, resetForm } = useForm<FormFields>({
  initialValues: produceInitialValues(),
  validationSchema,
})

const onSubmit = handleSubmit((result) => {
  showPassword.value = false
  mutate(result)
  resetForm()
})

watch(initialValues, (values) => {
  resetForm({ values })
})
</script>

<template>
  <div class="w-full max-w-[370px]">
    <h1 class="mb-6 text-2xl font-semibold text-gray-900">
      Реєстрація
    </h1>
    <form @submit="onSubmit">
      <div class="mb-6 flex flex-col gap-4 text-slate-700">
        <Field v-slot="{ field, errorMessage, meta }" name="name">
          <div>
            <SInput
              v-bind="field"
              label="Name"
              small
              class="w-full"
              type="text"
            />
            <p
              v-if="errorMessage && meta.touched"
              class="mt-1 text-xs text-red-600"
            >
              {{ errorMessage }}
            </p>
          </div>
        </Field>
        <Field v-slot="{ field, errorMessage, meta }" name="email">
          <div>
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
        <Field
          v-slot="{ field, errorMessage, meta }"
          name="password"
        >
          <div>
            <div class="relative flex flex-col justify-start gap-1">
              <SInput
                v-bind="field"
                label="Password"
                small
                class="w-full outline-none"
                :type="showPassword ? 'text' : 'password'"
              />
              <button
                class="absolute right-4 top-1/2 translate-y-1/2"
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
      </div>
      <SButton type="submit" class="mb-5">
        Зареєструватися
      </SButton>
    </form>
    <p class="text-sm leading-small tracking-[0.28px] text-zinc-700">
      Вже є аккаунт?
      <a
        href="/authentication/"
        class="
            ml-2 font-medium text-blue-600 underline underline-offset-2
            transition-colors duration-300 hover:text-blue-800
            "
      >
        Увійти
      </a>
    </p>
  </div>
</template>
