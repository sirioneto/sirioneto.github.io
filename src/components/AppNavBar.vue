<template>
  <div
    class="xl:z-10 bg-[--color-background-mute] w-full py-3.5 px-6 shadow md:flex justify-between items-center fixed z-20 min-h-20"
  >
    <div class="flex items-center text-xl flex-1">
      <RouterLink key="/" to="/" class="text-[--action-primary]">
        <IconLogo class="max-w-12" />
      </RouterLink>
    </div>

    <nav
      class="md:h-auto md:flex-row md:items-center md:divide-x md:divide-y-0 divide-y md:flex flex-col overflow-hidden flex-1 justify-center"
      :class="[open ? 'flex' : 'hidden']"
    >
      <RouterLink
        v-for="nav in navigation"
        :key="nav.href"
        :to="nav.href"
        class="md:px-4 md:py-0 px-12 py-6 text-center text-xl"
        :class="[
          nav.current
            ? 'text-[--color-text] hover:bg-transparent'
            : 'text-[--action-primary] hover:bg-[--action-bg-primary]',
        ]"
      >
        {{ $t(nav.name) }}
      </RouterLink>
    </nav>

    <div
      class="md:h-auto md:flex-row md:items-center flex overflow-hidden items-end md:flex p-1 mt-2 gap-3 flex-1 justify-end"
      :class="[open ? 'flex' : 'hidden']"
    >
      <LocaleSelect />
      <ChangeThemeButton />
    </div>

    <ActionButton
      class="md:hidden block absolute right-4 top-4 max-w-12"
      :icon-component="open ? IconClose : MobileMenuIcon"
      color="[--action-primary]"
      @click="toggleOpen"
    />
  </div>

  <ProgressIndicator />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import ChangeThemeButton from "./ChangeThemeButton.vue";
import ActionButton from "./ActionButton.vue";
import MobileMenuIcon from "./icons/MobileMenuIcon.vue";
import IconClose from "./icons/IconClose.vue";
import IconLogo from "./icons/IconLogo.vue";
import ProgressIndicator from "./ProgressIndicator.vue";
import { useNavigationStore } from "../stores/navigation";
import LocaleSelect from "./LocaleSelect.vue";

const open = ref(false);

const { navigation } = useNavigationStore();

const toggleOpen = () => {
  open.value = !open.value;
};
</script>
