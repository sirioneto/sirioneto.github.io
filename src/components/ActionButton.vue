<template>
  <div class="button-container">
    <button :class="buttonVariantClass" :disabled="disabled">
      <i :title="title" :class="`text-${color}`">
        <component :is="iconComponent" />
      </i>
      <span v-if="text" :class="`text-${color}`">{{ text }}</span>
    </button>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";

export default {
  props: {
    disabled: Boolean,
    iconComponent: Object,
    title: String,
    text: String,
    color: {
      type: String,
      default: "[--color-text]",
    },
    variant: {
      type: String,
      validator(value: string) {
        return ["danger"].includes(value);
      },
    },
  },
  setup(props) {
    const buttonVariantClass = computed(() => {
      let buttonClass = "button";
      if (props.variant == "danger") {
        buttonClass += " danger";
      }

      return buttonClass;
    });

    return {
      buttonVariantClass,
    };
  },
};
</script>

<style scoped>
.button-container > button {
  display: flex;
  align-items: center;
  border: 0;
  padding: 4px 6px;
  background: inherit;
  color: var(--color-text);
  box-shadow: 0px 0px 8px 1px var(--color-border);
  font-size: 16px;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    sans-serif;
}

.button-container > button:not(:disabled):hover {
  box-shadow: 0px 0px 8px 1px var(--focus-primary);
  color: var(--text-primary);
}

.button-container > button.danger:not(:disabled):hover {
  box-shadow: 0px 0px 8px 1px red;
  color: var(--text-primary);
}

.button-container span {
  margin-left: 0.5rem;
}
</style>
