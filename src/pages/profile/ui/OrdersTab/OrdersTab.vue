<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/entities/user'
import { SOrderCard } from '@/entities/product/ui/SOrderCard'

const store = useUserStore()

const { user } = storeToRefs(store)
</script>

<template>
  <div
    class="
      mb-24

      md:mb-32
    "
  >
    <div
      class="
        flex flex-col gap-5

        md:gap-6
      "
    >
      <SOrderCard v-for="order in user?.orders" :key="order.code" :="order" />
    </div>
  </div>
</template>
