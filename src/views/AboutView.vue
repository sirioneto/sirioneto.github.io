<script setup lang="ts">
import AboutList from "../components/AboutList.vue";
</script>

<template>
  <div class="xl:flex-row flex flex-col items-center">
    <div class="xl:w-5/6 xl:order-1 order-2 mt-9">
      <AboutList />
    </div>

    <div
      class="xl:order-2 xl:rounded-e-3xl xl:ml-8 xl:rounded-ss-3xl xl:border-l-2 xl:w-auto xl:h-auto order-1 w-40 h-40 mt-9 rounded-full border-b-2 border-[--color-border] overflow-hidden"
    >
      <img class="w-96" src="../assets/perfil.png" alt="Sírio N." />
    </div>
  </div>
</template>
