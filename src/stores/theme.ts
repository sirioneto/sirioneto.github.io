import { ref } from "vue";
import { defineStore } from "pinia";

type AppTheme = "light" | "dark";
const defaultAppTheme = "light";

export const useThemeStore = defineStore("theme", () => {
  const theme = ref(defaultAppTheme as AppTheme);
  const localStorageIndex = "app_theme";

  const setInLocalStorage = (theme: AppTheme) => {
    localStorage.setItem(localStorageIndex, theme);
  };

  const getInLocalStorage = (): string => {
    return localStorage.getItem(localStorageIndex) ?? "";
  };

  const changeTheme = (newTheme: AppTheme): void => {
    theme.value = newTheme;
    setInLocalStorage(newTheme);
  };

  const storagedTheme = getInLocalStorage();
  if (storagedTheme) {
    changeTheme(storagedTheme as AppTheme);
  }

  return {
    theme,
    changeTheme,
  };
});
