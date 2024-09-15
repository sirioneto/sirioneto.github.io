<template>
  <div class="xl:flex-row flex flex-col justify-center items-center gap-8">
    <div class="xl:order-1 order-2 w-full">
      <div class="xl:space-y-5 space-y-3 mb-8">
        <p class="xl:text-5xl text-4xl">{{ $t("notFound.title") }}</p>
        <p class="xl:text-4xl text-2xl">{{ $t("notFound.text1") }}</p>
        <p class="xl:text-4xl text-2xl">{{ $t("notFound.text2") }}</p>
      </div>
      <RouterLink
        to="/"
        class="px-6 py-2 xl:text-2xl border rounded-3xl border-[--color-border] hover:border-[--color-border-hover] hover:bg-[--color-background-soft]"
      >
        {{ $t("notFound.homeLink") }}
      </RouterLink>
    </div>
    <div class="xl:order-2 order-1 w-full">
      <IconNotFound />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconNotFound from "@/components/icons/IconNotFound.vue";
</script>
