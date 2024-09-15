<template>
  <div class="theme-container">
    <ActionButton
      :iconComponent="themeConfig.icon"
      @click="toggleTheme"
      :title="$t(themeConfig.text)"
    />
  </div>
</template>

<script lang="ts">
import { computed, ref } from "vue";
import ActionButton from "@/components/ActionButton.vue";
import { useThemeStore } from "@/stores/theme";
import IconThemeDark from "./icons/IconThemeDark.vue";
import IconThemeLight from "./icons/IconThemeLight.vue";

const themes = {
  dark: {
    icon: IconThemeLight,
    text: "changeThemeButton.light",
  },
  light: {
    icon: IconThemeDark,
    text: "changeThemeButton.dark",
  },
};

type AppTheme = "light" | "dark";

export default {
  components: {
    ActionButton,
  },
  setup() {
    const themeStore = useThemeStore();
    const pageTheme = ref(themeStore.theme as AppTheme);

    const themeConfig = computed(() => {
      return {
        icon: themes[pageTheme.value].icon,
        text: themes[pageTheme.value].text,
      };
    });

    const toggleTheme = () => {
      const availableThemes = Object.keys(themes);

      for (const theme of availableThemes) {
        if (pageTheme.value != theme) {
          pageTheme.value = theme as AppTheme;

          return themeStore.changeTheme(pageTheme.value);
        }
      }
    };

    return {
      themeConfig,
      toggleTheme,
    };
  },
};
</script>

<style scoped>
.theme-container:hover {
  background-color: transparent;
}
</style>
