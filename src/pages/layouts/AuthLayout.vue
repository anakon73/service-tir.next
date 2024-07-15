<template>
  <div class="container xl:pr-20 2xl:pr-0">
    <RouterLink to="/">
      <img
        class="absolute top-4"
        src="/src/shared/assets/images/newLogo.svg"
        alt="service tir logo"
      >
    </RouterLink>
    <div
      class="
      mb-2 mt-28 flex flex-col items-center gap-12
      lg:my-0 lg:flex-row lg:justify-between lg:gap-0
      "
    >
      <slot />
      <img
        class="w-full lg:h-screen lg:w-auto lg:py-4 lg:pl-4"
        src="/src/shared/assets/images/forestPhoto.png"
        alt="forest photo"
      >
    </div>
  </div>
</template>
