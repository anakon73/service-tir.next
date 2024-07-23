<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Field, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import {
  CheckCircleIcon,
  XMarkIcon,
} from '@heroicons/vue/24/solid'

import { SDialog } from '@/shared/ui/SDialog'
import { SButton } from '@/shared/ui/SButton'
import { SInput } from '@/shared/ui/SInput'
import { STextarea } from '@/shared/ui/STextarea'
import { SStar } from '@/shared/ui/SStar'

import { produceInitialValues, produceValidationSchema } from './lib'
import type { FormFields } from './types'
import { useCreateReview } from '@/shared/api/review'

defineProps<{ open: boolean }>()

const emits = defineEmits<{ close: [] }>()

const labels = ['Погано', 'Так собі', 'Нормально', 'Добре', 'Відмінно']

const successfully = ref(false)

const rating = ref(0)

const initialValues = computed(() => produceInitialValues())

const validationSchema = computed(() => toTypedSchema(produceValidationSchema()))

const { handleSubmit, resetForm } = useForm<FormFields>({
  initialValues: produceInitialValues(),
  validationSchema,
})

const { mutate } = useCreateReview()

const onSubmit = handleSubmit((result) => {
  mutate({
    author: result.author,
    comment: result.comment,
    rate: rating.value,
  })
  successfully.value = true
})

function close() {
  emits('close')
  rating.value = 0
  successfully.value = false
}

function setRating(newRating: number) {
  if (rating.value === newRating)
    rating.value = 0
  else rating.value = newRating
}

watch(initialValues, (values) => {
  resetForm({ values })
})
</script>

<template>
  <SDialog size="lg" :open="open" @close="close">
    <form
      v-if="!successfully"
      class="
        relative flex w-full flex-col items-center gap-8 px-6

        md:px-[120px]
      "
      @submit="onSubmit"
    >
      <button
        type="button"
        class="
          absolute -top-4 right-4

          focus:outline-0
        "
        @click="close"
      >
        <XMarkIcon class="size-4" />
      </button>
      <div class="flex flex-col items-center gap-3">
        <h1
          class="text-center font-semibold leading-[30px] tracking-[0.4px] text-black"
        >
          Залишити відгук
        </h1>
        <div
          class="
            flex gap-3 whitespace-nowrap text-[10px] font-medium leading-[18px]
            text-slate-700

            min-[425px]:gap-4 min-[425px]:text-xs
          "
        >
          <div
            v-for="(label, index) in labels"
            :key="index"
            class="flex cursor-pointer flex-col items-center"
            @click="setRating(index + 1)"
          >
            <SStar size="lg" :active="rating >= index + 1" />
            <p>{{ label }}</p>
          </div>
        </div>
        <div class="flex w-full flex-col gap-4">
          <label class="text-sm font-semibold leading-small text-slate-700">
            Імʼя
          </label>
          <Field v-slot="{ field, errorMessage, meta }" name="author">
            <SInput v-bind="field" />
            <p v-if="errorMessage && meta.touched" class="text-xs text-red-600">
              {{ errorMessage }}
            </p>
          </Field>
        </div>
        <div class="flex w-full flex-col gap-4">
          <label class="text-sm font-semibold leading-small text-slate-700">
            Ваш відгук
          </label>
          <Field v-slot="{ field, errorMessage, meta }" name="comment">
            <STextarea v-bind="field" />
            <p v-if="errorMessage && meta.touched" class="text-xs text-red-600">
              {{ errorMessage }}
            </p>
          </Field>
        </div>
      </div>
      <SButton type="submit">
        Залишити відгук
      </SButton>
    </form>
    <div
      v-if="successfully"
      class="
        flex flex-col items-center gap-8 px-6

        md:px-[75px]
      "
    >
      <div class="flex flex-col items-center gap-3">
        <CheckCircleIcon class="size-[60px] text-emerald-500" />
        <h1 class="text-center text-xl font-bold leading-[30px] tracking-[0.4px]">
          Ваш відгук надіслано
        </h1>
        <p class="max-w-[450px] text-center leading-6 tracking-[0.32px]">
          Дякуюємо за ваш відгук, ваша думка дуже важлива для нас.
        </p>
      </div>
      <SButton class="px-24" variant="light" @click="close">
        Далі
      </SButton>
    </div>
  </SDialog>
</template>
