<template>
  <main :class="`theme-${appTheme} h-full min-h-dvh`">
    <AppNavBar />
    <RouterView class="md:px-24 px-8 py-24" />
  </main>
</template>

<script lang="ts">
import { useRoute } from "vue-router";
import AppNavBar from "./components/AppNavBar.vue";
import { useThemeStore } from "./stores/theme";
import { computed, watch } from "vue";
import { useNavigationStore } from "./stores/navigation";

export default {
  components: {
    AppNavBar,
  },
  setup() {
    const route = useRoute();
    const { updateCurrentNav } = useNavigationStore();
    const themeStore = useThemeStore();
    const appTheme = computed(() => {
      return themeStore.theme;
    });

    updateCurrentNav(route.path);

    watch(
      () => route.path,
      (newRoute) => {
        updateCurrentNav(newRoute);
      },
    );

    return {
      appTheme,
    };
  },
};
</script>
