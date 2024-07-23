<script setup lang="ts">
import { cn } from '@/shared/lib/styles'
import { links } from './config'
</script>

<template>
  <div
    class="
      hidden bg-gray-100 text-sm

      md:block
    "
  >
    <ul
      class="
      flex w-full select-none items-center justify-center
      gap-14 text-gray-900
      "
    >
      <RouterLink
        v-for="link in links"
        v-slot="{ isActive }"
        :key="link.name.toLocaleLowerCase()"
        :to="link.route"
      >
        <p
          :class="cn(
            `
              flex cursor-pointer px-2 py-5 transition-colors duration-300

              hover:text-slate-400
            `,
            isActive && 'font-bold underline decoration-2 underline-offset-[23px]',
          )"
        >
          {{ link.name }}
        </p>
      </RouterLink>
    </ul>
  </div>
</template>
