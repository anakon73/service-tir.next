<script setup lang="ts">
import { computed, ref } from 'vue'
import { ChevronRightIcon } from '@heroicons/vue/24/solid'

import { ReviewCard } from '@/widgets/review-card'

import { useReviews } from '@/shared/api/review'
import { SButton } from '@/shared/ui/SButton'
import { SPagination } from '@/shared/ui/SPagination'
import ReviewCreate from '@/features/review/create/ReviewCreate.vue'

const { data: reviews, isLoading } = useReviews()

const isOpen = ref(false)

const selectedPage = ref(1)

const currentPageReviews = computed(() => {
  const startIndex = (selectedPage.value - 1) * 16
  const endIndex = startIndex + 16
  if (reviews.value?.length)
    return reviews.value.slice(startIndex, endIndex)

  return []
})
</script>

<template>
  <ReviewCreate :open="isOpen" @close="isOpen = false" />
  <div v-if="isLoading" class="w-full text-center text-3xl font-bold">
    Is Loading...
  </div>
  <div
    v-else-if="!reviews?.length"
    class="w-full text-center text-3xl font-bold"
  >
    No Found Reviews
  </div>

  <div
    v-else
    class="
      container mb-24

      lg:mb-28
    "
  >
    <div
      class="
        mb-8 flex items-center gap-1 text-xs text-gray-900 transition-colors
        duration-300

        hover:text-gray-950

        md:mb-10
      "
    >
      <RouterLink :to="{ name: 'Home' }" class="cursor-pointer opacity-50">
        Головна
      </RouterLink>
      <ChevronRightIcon class="size-2" />
      <p class="cursor-pointer">
        Відгуки
      </p>
    </div>
    <div
      class="
        mb-8 flex flex-col items-start justify-between gap-5

        lg:flex-row
      "
    >
      <div class="flex items-start">
        <div class="flex flex-col justify-start gap-5">
          <div class="mr-4 flex flex-row items-center gap-3">
            <div
              class="paragraphIcon size-10 rounded-full bg-white p-2 text-lg"
            >
              💬
            </div>
            <h1
              class="
                font-jakarta text-3xl font-bold leading-normal text-gray-900

                lg:text-big lg:leading-extra-height
              "
            >
              Відгуки наших клієнтів
            </h1>
          </div>
          <p class="max-w-[500px] text-xs leading-5 text-neutral-500/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet.
          </p>
        </div>
      </div>
      <SButton @click="isOpen = true">
        Залишити відгук
      </SButton>
    </div>
    <div
      class="
        mb-10 grid grid-cols-1 gap-5

        lg:grid-cols-2
      "
    >
      <ReviewCard
        v-for="(review, i) in currentPageReviews"
        :key="i"
        :author="review.author"
        :comment="review.comment"
        :product-name="review.productName"
        :rate="review.rate"
      />
    </div>
    <SPagination
      :length="reviews.length"
      :selected-page="selectedPage"
      :items-per-page="16"
      @change-page="selectedPage = $event"
    />
  </div>
</template>
