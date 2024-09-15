import { ref } from "vue";
import { defineStore } from "pinia";

export const useNavigationStore = defineStore("navigation", () => {
  const navigation = ref([
    { name: "nav.home", href: "/", current: false },
    { name: "nav.contact", href: "/contact", current: false },
    { name: "nav.about", href: "/about", current: false },
  ]);

  const updateCurrentNav = (newPath: string) => {
    for (const page of navigation.value) {
      page.current = page.href == newPath;
    }
  };

  return {
    navigation,
    updateCurrentNav,
  };
});
