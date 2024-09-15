<template>
  <select
    name="locale"
    id="locale"
    v-model="locale"
    @change="changeSelectedLocale"
    class="hover:shadow-[--focus-primary] w-32 h-8 px-1 text-sm bg-[--color-background-soft] shadow-sm text-center"
  >
    <option
      v-for="language in availableLanguages"
      :key="language.key"
      :value="language.key"
    >
      {{ language.description }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { getLocale, changeLocaleValue, availableLanguages } from "@/i18n";

const locale = getLocale();

const changeSelectedLocale = () => {
  changeLocaleValue(locale.value);
};
</script>
