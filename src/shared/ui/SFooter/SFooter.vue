<script setup lang="ts">
import { cn } from '@/shared/lib/styles'
import { links } from './config'
</script>

<template>
  <div class="relative z-40 bg-gray-100 py-6">
    <div
      class="
        mx-auto max-w-[1440px] justify-between px-5

        2xl:px-[150px]

        xl:flex
      "
    >
      <RouterLink :to="{ name: 'Home' }">
        <img
          src="/src/shared/assets/images/logo.svg"
          alt="service tir logo"
        >
      </RouterLink>
      <ul
        class="
          mt-8 flex select-none flex-wrap items-center gap-9 text-gray-900

          lg:gap-[53px]

          xl:mt-0 xl:justify-center
        "
      >
        <RouterLink
          v-for="link in links"
          v-slot="{ isActive }"
          :key="link.name.toLocaleLowerCase()"
          :to="{ name: link.routeName }"
        >
          <p
            :class="cn(
              `
                transition-colors duration-300

                hover:text-gray-950
              `,
              isActive && 'font-bold',
            )"
          >
            {{ link.name }}
          </p>
        </RouterLink>
      </ul>
    </div>
  </div>
</template>
