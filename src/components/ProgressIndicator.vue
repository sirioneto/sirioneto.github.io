<template>
  <div
    class="fixed top-20 left-0 w-full h-1 bg-[--action-primary] z-10"
    :style="{ width: scrollProgress + '%' }"
  ></div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const scrollProgress = ref(0);

    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      scrollProgress.value = progress;
    };

    onMounted(() => {
      window.addEventListener("scroll", updateScrollProgress);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", updateScrollProgress);
    });

    return {
      scrollProgress,
    };
  },
};
</script>
