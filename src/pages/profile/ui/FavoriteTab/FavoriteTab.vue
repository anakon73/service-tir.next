<script setup lang="ts">
import { ProductCard } from '@/widgets/product-card'
import { useLikedProducts } from '@/shared/api/product'

const { data: products } = useLikedProducts()
</script>

<template>
  <div
    class="
      mb-24 grid gap-5

      min-[400px]:grid-cols-2

      min-[880px]:grid-cols-4

      sm:grid-cols-3
    "
  >
    <ProductCard
      v-for="product in products"
      :key="product.code"
      :="product"
    />
  </div>
</template>
