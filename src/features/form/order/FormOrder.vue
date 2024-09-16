<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { Field, useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import { useQueryClient } from '@tanstack/vue-query'
import { toTypedSchema } from '@vee-validate/zod'

import { useUserStore } from '@/entities/user'

import { useCreateOrder } from '@/shared/api/cart'
import { SButton } from '@/shared/ui/SButton'
import { SInput } from '@/shared/ui/SInput'
import { STextarea } from '@/shared/ui/STextarea'
import { SRadioGroup } from '@/shared/ui/SRadioGroup'

import { SuccessfullyModal } from './ui'
import type { FormFields } from './types'
import { produceInitialValues, produceValidationSchema } from './lib'

const open = ref(false)

const deliveryOptions = [
  { label: 'Нова Пошта', value: 'nova_poshta' },
  { label: 'Укр Пошта', value: 'ukr_post' },
  { label: 'Відправка по адресу', value: 'delivery_address' },
]

const paymentOptions = [
  { label: 'Готівка', value: 'cash' },
  { label: 'Банківська карта', value: 'card' },
]

const store = useUserStore()

const { user } = storeToRefs(store)

const { mutate } = useCreateOrder()

const queryClient = useQueryClient()

const router = useRouter()

const initialValues = computed(() => produceInitialValues())

const validationSchema = computed(
  () => toTypedSchema(produceValidationSchema()),
)

const { handleSubmit, resetForm } = useForm<FormFields>({
  initialValues: produceInitialValues(),
  validationSchema,
})

const onSubmit = handleSubmit(() => {
  mutate(
    { email: user.value!.email },
    { onSuccess: (newUser) => {
      resetForm()
      store.setUser(newUser)
      open.value = true
    } },
  )
})

function close() {
  open.value = false
  queryClient.invalidateQueries({ queryKey: [{ entity: 'cart' }] })
  router.push('Home')
}

watch(initialValues, (values) => {
  resetForm({ values })
})
</script>

<template>
  <SuccessfullyModal :open="open" @close="close" />
  <form
    class="
      flex w-full flex-col gap-8

      md:max-w-[500px]
    "
    @submit="onSubmit"
  >
    <div class="flex flex-col gap-5">
      <div class="flex items-center gap-2.5">
        <p
          class="
            flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 font-medium
            leading-5 text-white shadow-md
          "
        >
          1
        </p>
        <h2 class="text-xl font-medium leading-small text-gray-900">
          Контактні данні
        </h2>
      </div>
      <div
        class="
          flex w-full flex-col gap-5

          lg:flex-row
        "
      >
        <Field v-slot="{ field, errorMessage, meta }" name="firstName">
          <div>
            <SInput
              v-bind="field"
              placeholder="Імʼя"
              small
              class="w-full min-w-[240px]"
            />
            <p
              v-if="errorMessage && meta.touched"
              class="mt-1 text-xs text-red-600"
            >
              {{ errorMessage }}
            </p>
          </div>
        </Field>
        <Field v-slot="{ field, errorMessage, meta }" name="lastName">
          <div>
            <SInput
              v-bind="field"
              placeholder="Прізвище"
              small
              class="w-full min-w-[240px]"
            />
            <p
              v-if="errorMessage && meta.touched"
              class="mt-1 text-xs text-red-600"
            >
              {{ errorMessage }}
            </p>
          </div>
        </Field>
      </div>
      <div
        class="
          flex w-full flex-col gap-5

          lg:flex-row
        "
      >
        <Field v-slot="{ field, errorMessage, meta }" name="phone">
          <div>
            <SInput
              v-bind="field"
              placeholder="Телефон"
              small
              class="w-full min-w-[240px]"
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
              placeholder="E-mail"
              small
              class="w-full min-w-[240px]"
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
      </div>
      <Field v-slot="{ field }" name="comment">
        <STextarea
          v-bind="field"
          class="w-full"
          size="lg"
          placeholder="Коментарій до замовлення"
        />
      </Field>
    </div>
    <div class="flex flex-col gap-5">
      <div class="flex items-center gap-2.5">
        <p
          class="
            flex h-7 w-7 items-center justify-center rounded-full bg-white font-medium
            leading-5 text-black shadow-md
          "
        >
          2
        </p>
        <h2 class="text-xl font-medium leading-small text-gray-900">
          Доставка
        </h2>
      </div>
      <Field v-slot="{ field }" name="delivery_method">
        <SRadioGroup
          v-bind="field"
          :options="deliveryOptions"
          name="delivery"
        />
      </Field>
      <div
        class="
          flex w-full flex-col gap-5

          lg:flex-row
        "
      >
        <Field v-slot="{ field, errorMessage, meta }" name="city">
          <div>
            <SInput
              v-bind="field"
              placeholder="Місто"
              small
              class="w-full min-w-[240px]"
            />
            <p
              v-if="errorMessage && meta.touched"
              class="mt-1 text-xs text-red-600"
            >
              {{ errorMessage }}
            </p>
          </div>
        </Field>
        <Field v-slot="{ field, errorMessage, meta }" name="address">
          <div>
            <SInput
              v-bind="field"
              placeholder="Вулиця, Будинок"
              small
              class="w-full min-w-[240px]"
            />
            <p
              v-if="errorMessage && meta.touched"
              class="mt-1 text-xs text-red-600"
            >
              {{ errorMessage }}
            </p>
          </div>
        </Field>
      </div>
    </div>
    <div class="flex flex-col gap-5">
      <div class="flex items-center gap-2.5">
        <p
          class="
            flex h-7 w-7 items-center justify-center rounded-full bg-white font-medium
            leading-5 text-black shadow-md
          "
        >
          3
        </p>
        <h2 class="text-xl font-medium leading-small text-gray-900">
          Оплата
        </h2>
      </div>
      <Field v-slot="{ field, errorMessage }" name="payment_method">
        <SRadioGroup
          v-bind="field"
          :options="paymentOptions"
          name="payment"
        />
        {{ errorMessage }}
      </Field>
    </div>
    <SButton type="submit" class="self-start px-16">
      Замовити
    </SButton>
  </form>
</template>
