<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div
    class="
      mb-24

      md:mb-32
    "
  >
    <h1
      class="
        mb-8 text-xl font-semibold text-gray-900

        md:text-2xl
      "
    >
      🎉 Вітаємо у вашому особистому кабінеті!
    </h1>
    <div
      class="
        flex w-full flex-col items-stretch gap-5

        md:w-auto md:flex-row
      "
    >
      <div
        class="card flex flex-col gap-6 rounded-2xl bg-white px-4 pb-6 pt-4"
      >
        <img
          src="./assets/manager.png"
          alt="track order image"
        >
        <div class="flex flex-col gap-1.5">
          <h2 class="text-xl font-semibold text-gray-900">
            Особистий менеджер
          </h2>
          <p class="text-sm leading-small text-gray-900">
            В особистому кабінеті ви можете відслідковувати Ваші замовлення
            та їх статус. Ми облегшили процес замовлення для багатьох наших
            покупців.
          </p>
          <button
            class="
              flex items-center gap-1 self-start text-sm font-medium
              text-blue-600 transition-colors duration-300

              hover:text-blue-800
            "
          >
            Перейти до замовлень
            <!-- <img src="/src/assets/ChevronRightSmallBlue.svg"> -->
            <ArrowRightIcon class="size-3" />
          </button>
        </div>
      </div>
      <div
        class="card flex flex-col gap-6 rounded-2xl bg-white px-4 pb-6 pt-4"
      >
        <img
          src="./assets/trackOrder.png"
          alt="person manager"
        >
        <div class="flex flex-col gap-1.5">
          <h2 class="text-xl font-semibold text-gray-900">
            Відслідкування замовлень
          </h2>
          <p class="text-sm leading-small text-gray-900">
            В особистому кабінеті ви можете відслідковувати Ваші замовлення
            та їх статус. Ми облегшили процес замовлення для багатьох наших
            покупців.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
