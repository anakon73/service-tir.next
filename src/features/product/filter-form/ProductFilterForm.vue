<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRefs, watch } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'

import { cn } from '@/shared/lib/styles'
import { SCheckbox } from '@/shared/ui/SCheckbox'

import { type FilterData, filterData } from './config'

const selectedFilterData = ref<FilterData['id'][]>([])

export interface Props {
  show: boolean
}

const props = defineProps<Props>()

const { show } = toRefs(props)

export type Emits = {
  close: []
}

const emits = defineEmits<Emits>()

const minPrice = ref('')
const maxPrice = ref('')

watch(show, () => {
  if (show.value)
    document.body.classList.add('overflow-hidden')
  else document.body.classList.remove('overflow-hidden')
})

onMounted(() => {
  window.addEventListener('resize', () => {
    if (innerWidth >= 1024 && show.value) emits('close')
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', () => {
    if (innerWidth >= 1024 && show.value) emits('close')
  })
})
</script>

<template>
  <div>
    <div
      :class="cn(
        'fixed z-30 size-full bg-black/10 lg:hidden',
        show ? 'block' : 'hidden',
      )"
      @click="emits('close')"
    />
    <div
      :class="cn(
        `card relative inline-flex h-screen w-full max-w-[270px] flex-col gap-5
        transition-transform duration-300 ease-in-out bg-white pb-24 pl-5
        overflow-y-auto overflow-x-hidden lg:rounded-2xl
        pr-14 pt-5 lg:size-auto lg:pb-5 z-40`,
        !show && 'max-[1024px]:-translate-x-full',
      )"
    >
      <button
        class="absolute right-2 top-2 block lg:hidden"
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
            class="w-[72px] rounded border border-slate-300 bg-white text-sm font-semibold text-gray-900 [appearance:textfield] placeholder:text-zinc-300 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          >
          <p class="text-sm font-semibold text-gray-900">
            -
          </p>
          <input
            v-model="maxPrice"
            placeholder="До"
            type="number"
            class="w-[72px] rounded border border-slate-300 bg-white text-sm font-semibold text-gray-900 [appearance:textfield] placeholder:text-zinc-300 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          >
        </div>
      </div>
      <div>
        <button
          class="whitespace-nowrap rounded-large bg-blue-600 px-9 py-3 text-xs font-bold text-white transition-colors duration-300 hover:bg-blue-700 hover:text-zinc-100"
          @click="emits('close')"
        >
          Застосувати фільтр
        </button>
      </div>
    </div>
  </div>
</template>
