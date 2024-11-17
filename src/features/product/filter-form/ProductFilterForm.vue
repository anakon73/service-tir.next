<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRefs, watch } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'

import { cn } from '@/shared/lib/styles'
import { SCheckbox } from '@/shared/ui/SCheckbox'

import { type FilterData, filterData } from './config'

export interface Props {
  show: boolean
}

export type Emits = {
  close: []
}

const props = defineProps<Props>()

const emits = defineEmits<Emits>()

const { show } = toRefs(props)

const selectedFilterData = ref<FilterData['id'][]>([])

const minPrice = ref('')
const maxPrice = ref('')

watch(show, () => {
  if (show.value)
    document.body.classList.add('overflow-hidden')
  else document.body.classList.remove('overflow-hidden')
})

onMounted(() => {
  window.addEventListener('resize', () => {
    if (innerWidth >= 1024 && show.value)
      emits('close')
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', () => {
    if (innerWidth >= 1024 && show.value)
      emits('close')
  })
})
</script>

<template>
  <div>
    <div
      :class="cn(
        `
          fixed z-30 size-full bg-black/10

          lg:hidden
        `,
        show ? 'block' : 'hidden',
      )"
      @click="emits('close')"
    />
    <div
      :class="cn(
        `
          card relative z-40 inline-flex h-screen w-full max-w-[270px] flex-col
          gap-5 overflow-y-auto overflow-x-hidden bg-white pb-24 pl-5 pr-14 pt-5
          transition-transform duration-300 ease-in-out

          lg:size-auto lg:rounded-2xl lg:pb-5
        `,
        !show && 'max-[1023px]:-translate-x-full',
      )"
    >
      <button
        class="
          absolute right-2 top-2 block

          lg:hidden
        "
        @click="emits('close')"
      >
        <XMarkIcon class="size-8" />
      </button>
      <div v-for="data in filterData" :key="data.id">
        <h1 class="mb-3 text-lg font-semibold text-gray-900">
          {{ data.text }}
        </h1>
        <div class="flex flex-col gap-4">
          <div v-for="option in data.options" :key="option.id">
            <SCheckbox
              :id="option.id"
              v-model="selectedFilterData"
              :value="option.id"
              :name="option.id"
            >
              {{ option.text }}
            </SCheckbox>
          </div>
        </div>
      </div>
      <div>
        <h1 class="mb-3 text-lg font-semibold text-gray-900">
          Вартість
        </h1>
        <div class="flex items-center gap-2.5">
          <input
            v-model="minPrice"
            placeholder="Від"
            type="number"
            class="
              w-[72px] rounded border border-slate-300 bg-white text-sm
              font-semibold text-gray-900

              [&::-webkit-inner-spin-button]:appearance-none
              [&::-webkit-outer-spin-button]:appearance-none

              [appearance:textfield]

              placeholder:text-zinc-300
            "
          >
          <p class="text-sm font-semibold text-gray-900">
            -
          </p>
          <input
            v-model="maxPrice"
            placeholder="До"
            type="number"
            class="
              w-[72px] rounded border border-slate-300 bg-white text-sm
              font-semibold text-gray-900

              [&::-webkit-inner-spin-button]:appearance-none
              [&::-webkit-outer-spin-button]:appearance-none

              [appearance:textfield]

              placeholder:text-zinc-300
            "
          >
        </div>
      </div>
      <div>
        <button
          class="
            whitespace-nowrap rounded-large bg-blue-600 px-9 py-3 text-xs
            font-bold text-white transition-colors duration-300

            hover:bg-blue-700 hover:text-zinc-100
          "
          @click="emits('close')"
        >
          Застосувати фільтр
        </button>
      </div>
    </div>
  </div>
</template>
