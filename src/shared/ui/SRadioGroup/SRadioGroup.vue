<script setup lang="ts">
export interface Props {
  options: { label: string, value: string | number }[]
  name: string
}

defineProps<Props>()

const vModel = defineModel()
</script>

<template>
  <div class="space-y-4">
    <div
      v-for="option in options"
      :key="option.value"
      class="flex items-center"
    >
      <input
        :id="`${option.value}`"
        v-model="vModel"
        type="radio"
        :name="name"
        :value="option.value"
        class="
          size-6 border-gray-300

          checked:bg-blue-600

          focus:ring-transparent
        "
      >
      <label
        :for="`${option.value}`"
        class="ml-3 block text-sm font-medium text-gray-700"
      >
        {{ option.label }}
      </label>
    </div>
  </div>
</template>
