<script setup lang="ts">
import { SContactsCard } from '@/entities/info'
</script>

<template>
  <div
    class="
      relative h-[800px] w-full

      lg:h-[669px]
    "
  >
    <div class="absolute size-full">
      <iframe
        src="
        https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5149.608856919481!
2d24.05850095232348!3d49.808544341551475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768
!4f13.1!3m3!1m2!1s0x473ae81a36741bbf%3A0xe7464f623da4015b!2z0JvRjNCy0ZbQ
stGB0YzQutCwINCQ0LLRgtC-0LHQsNC30LAg4oSWMSwg0KLQlNCS!5e0!3m2!1sru!2sua!
4v1698168999309!5m2!1sru!2sua
        "
        class="relative z-10 size-full"
        loading="lazy"
        allowfullscreen
      />
    </div>
    <div class="container">
      <div
        class="
          relative z-20 pb-14 pt-24

          md:pb-[88px]
        "
      >
        <SContactsCard />
      </div>
    </div>
  </div>
</template>
