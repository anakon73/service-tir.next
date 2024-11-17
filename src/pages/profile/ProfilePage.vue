<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/solid'
import { cn } from '@/shared/lib/styles'
import { tabs } from './config.ts'
</script>

<template>
  <div
    class="
      container px-5

      max-[425px]:px-3

      xl:px-[150px]
    "
  >
    <div
      class="
        mb-8 flex items-center gap-1 text-xs text-gray-900 transition-colors
        duration-300

        hover:text-gray-950

        sm:mb-10
      "
    >
      <RouterLink :to="{ name: 'Home' }" class="opacity-50">
        Головна
      </RouterLink>
      <ChevronRightIcon class="size-2" />
      <p>Особистий кабінет</p>
    </div>
    <div class="mb-8 flex items-center gap-3">
      <div class="paragraphIcon size-10 rounded-full bg-white p-2 text-lg">
        💼
      </div>
      <h1
        class="
          font-jakarta text-3xl font-bold leading-normal text-gray-900

          lg:text-big lg:leading-extra-height
        "
      >
        Особистий кабінет
      </h1>
    </div>
    <div
      class="
        mb-9 flex flex-wrap gap-8 whitespace-nowrap pl-4

        md:items-center
      "
    >
      <RouterLink
        v-for="tab in tabs"
        v-slot="{ isActive }"
        :key="tab.value"
        :to="{ name: tab.routeName }"
      >
        <p
          :class="cn(
            `block rounded-lg px-5 py-2 text-xs transition-colors duration-300`,
            isActive ? `
              bg-blue-600 font-semibold text-white

              hover:bg-blue-700 hover:text-zinc-100
            ` : `
              border border-gray-100 bg-zinc-100 font-medium text-slate-700

              hover:bg-zinc-200 hover:text-slate-800
            `,
          )
          "
        >
          {{ tab.name }}
        </p>
      </RouterLink>
    </div>
    <RouterView />
  </div>
</template>
