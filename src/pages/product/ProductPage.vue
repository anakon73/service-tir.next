<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { ChevronRightIcon } from '@heroicons/vue/24/solid'

import { ReviewsSwiper } from '@/widgets/reviews-swiper'
import { ProductsSwiper } from '@/widgets/products-swiper'

import { ProductAddToWishlist } from '@/features/product/add-to-wishlist'
import { SRating } from '@/entities/product'

import { cn } from '@/shared/lib/styles'
import { useProductByCode } from '@/shared/api/product'
import { SButton } from '@/shared/ui/SButton'

const isLiked = ref(false)
const selectedView = ref<'description' | 'specs' | 'reviews'>('description')

const { params: { code } } = useRoute()

const { data: product, isLoading } = useProductByCode({ code: +code || 6358726 })

const inStock = computed(() => {
  if (product.value!.quantity >= 5) {
    return 'В наявності'
  }
  else if (product.value!.quantity < 5 && product.value!.quantity > 0) {
    return 'Закінчуються'
  }
  else if (product.value!.quantity === 0) {
    return 'Немає в наявності'
  }
  return 'Немає в наявності'
})
</script>

<template>
  <div
    v-if="isLoading"
    class="w-full text-center text-3xl font-bold"
  >
    Is Loading...
  </div>

  <div
    v-else-if="product === undefined"
    class="w-full text-center text-3xl font-bold"
  >
    Not Found Product
  </div>

  <div v-else class="container mb-[100px] lg:mb-[120px]">
    <div
      class="
      mb-9 flex items-center gap-1 text-xs text-gray-900
      transition-colors duration-300 hover:text-gray-950 md:mb-10
      "
    >
      <RouterLink to="/" class="opacity-50">
        Головна
      </RouterLink>
      <ChevronRightIcon class="size-2 " />
      <RouterLink to="/catalog" class="opacity-50">
        Каталог
      </RouterLink>
      <ChevronRightIcon class="size-2" />
      <p class="cursor-pointer">
        {{ product.name }}
      </p>
    </div>

    <div class="relative mb-16 flex flex-col gap-7 md:flex-row md:gap-12">
      <p
        class="absolute top-10 hidden w-full text-right text-xs text-neutral-500/70 md:block"
      >
        Код: {{ product.code }}
      </p>
      <div class="flex flex-col gap-2 md:hidden">
        <h1
          class="font-jakarta text-3xl font-bold leading-normal text-gray-900"
        >
          {{ product.name }}
        </h1>
        <div class="flex items-center gap-1">
          <div
            :class="cn(
              'size-2.5 rounded-full',
              inStock === 'В наявності' && 'bg-green-500',
              inStock === 'Закінчуються' && 'bg-orange-500',
              inStock === 'Немає в наявності' && 'bg-red-500',
            )"
          />
          <p
            :class="cn(
              'text-sm font-semibold leading-small text-green-500',
              inStock === 'В наявності' && 'text-green-500',
              inStock === 'Закінчуються' && 'text-orange-500',
              inStock === 'Немає в наявності' && 'text-red-500',
            )"
          >
            {{ inStock }}
          </p>
        </div>
        <SRating quantity :rating="product.rate" />
        <p class="text-xs text-neutral-500/70">
          Код: {{ product.code }}
        </p>
      </div>
      <div
        class="card relative flex flex-col gap-2 rounded-2xl bg-white p-3"
      >
        <ProductAddToWishlist :liked="isLiked" class="absolute right-7 top-7" @like="isLiked = $event" />
        <div
          class="mb-2 flex h-64 items-center justify-center rounded-2xl border bg-white md:h-80 md:max-w-[472px]"
        >
          <img
            class="h-64 object-cover p-2 md:h-80 md:max-w-[472px]"
            :src="product.image"
            alt="product image"
          >
        </div>
        <div class="flex flex-wrap gap-1.5 md:gap-2">
          <img
            v-for="(image, i) in product.images"
            :key="i"
            :src="image"
            class="
            h-10 w-14 rounded-lg border bg-white
            p-2 lg:h-14 lg:w-[72px] lg:p-2.5
            "
          >
        </div>
      </div>
      <div class="flex flex-col justify-between gap-7">
        <div>
          <div class="mb-7 hidden flex-col gap-2 md:flex">
            <h1 class="text-[32px] font-bold leading-[51px] text-gray-900">
              {{ product.name }}
            </h1>
            <div class="flex items-center gap-1">
              <div
                :class="cn(
                  'size-2.5 rounded-full',
                  inStock === 'В наявності' && 'bg-green-500',
                  inStock === 'Закінчуються' && 'bg-orange-500',
                  inStock === 'Немає в наявності' && 'bg-red-500',
                )"
              />
              <p
                :class="cn(
                  'text-sm font-semibold leading-small text-green-500',
                  inStock === 'В наявності' && 'text-green-500',
                  inStock === 'Закінчуються' && 'text-orange-500',
                  inStock === 'Немає в наявності' && 'text-red-500',
                )"
              >
                {{ inStock }}
              </p>
            </div>
            <SRating quantity :rating="product.rate" />
          </div>
          <div class="flex flex-col gap-3 text-sm text-gray-900">
            <div v-for="(spec, i) in product.specs.slice(0, 6)" :key="i" class="flex gap-11">
              <h2 class="w-40 font-semibold leading-small">
                {{ spec.name }}
              </h2>
              <p class="font-medium opacity-70">
                {{ spec.value }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex items-end gap-4">
          <div v-if="product.discount">
            <div class="flex items-center gap-2.5">
              <p
                class="text-xs font-bold leading-5 text-gray-400/50 line-through"
              >
                {{ product.price }} &#8372;
              </p>
            </div>
            <p class="text-2xl font-bold text-gray-900">
              {{ product.priceWithDiscount }} &#8372;
            </p>
          </div>
          <div v-else class="text-2xl font-bold text-gray-900">
            {{ product.price }} &#8372;
          </div>
          <SButton>
            В кошик
          </SButton>
        </div>
      </div>
    </div>

    <div
      class="mb-4 flex w-full gap-0 border-b border-gray-900/10 min-[425px]:gap-8 md:gap-[102px]"
    >
      <button
        class="
        p-2 leading-6 text-black transition-colors
        duration-300 hover:text-slate-600 min-[425px]:p-2.5
        "
        :class="
          selectedView === 'description'
            && 'underline decoration-2 underline-offset-[17px] font-semibold'
        "
        @click="selectedView = 'description'"
      >
        Опис
      </button>
      <button
        class="
        p-2 leading-6 text-black transition-colors
        duration-300 hover:text-slate-600 min-[425px]:p-2.5
        "
        :class="
          selectedView === 'specs'
            && 'underline decoration-2 underline-offset-[17px] font-semibold'
        "
        @click="selectedView = 'specs'"
      >
        Характеристики
      </button>
      <button
        class="
        p-2 leading-6 text-black transition-colors
        duration-300 hover:text-slate-600 min-[425px]:p-2.5
        "
        :class="
          selectedView === 'reviews'
            && 'underline decoration-2 underline-offset-[17px] font-semibold'
        "
        @click="selectedView = 'reviews'"
      >
        Відгуки
      </button>
    </div>

    <div
      v-if="selectedView === 'description'"
      class="
      mb-[100px] max-w-[947px] text-sm
      leading-6 text-gray-900 md:mb-[120px]
      "
    >
      {{ product.fullDescription }}
    </div>

    <div
      v-if="selectedView === 'specs'"
      class="mb-[100px] grid grid-cols-1 gap-x-20 gap-y-3 md:grid-cols-2 xl:grid-cols-3"
    >
      <div
        v-for="(spec, i) in product.specs"
        :key="i"
        class="flex gap-[42px] whitespace-nowrap text-sm text-gray-900"
      >
        <h2 class="w-40 font-semibold leading-small">
          {{ spec.name }}
        </h2>
        <p class="font-medium opacity-70">
          {{ spec.value }}
        </p>
      </div>
    </div>

    <div
      v-if="selectedView === 'reviews'"
      class="mb-[84px] lg:mb-[104px]"
    >
      <div class="mb-8 items-center gap-3 md:flex">
        <p
          class="text-base font-semibold leading-[30px] text-gray-800 md:text-[20px]"
        >
          Відгук про товар:
        </p>
        <div class="gap-2 min-[425px]:flex">
          <p
            class="text-xs font-semibold leading-[30px] text-blue-600 md:text-base"
          >
            {{ product.name }}
          </p>
          <SRating quantity :rating="product.rate" />
        </div>
      </div>
      <ReviewsSwiper class="-mx-5" :list="product.reviews" />
    </div>

    <ProductsSwiper class="-mx-5" :list="product?.similarProducts!">
      <div class="font-jakarta text-4xl font-bold leading-extra-height">
        Схожі товари
      </div>
    </ProductsSwiper>
  </div>
</template>
