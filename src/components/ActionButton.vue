<template>
  <div :class="buttonVariantClass" class="shadow-sm button-container">
    <button :disabled="disabled">
      <i :title="title" :class="`text-${color}`">
        <component :is="iconComponent" v-if="iconComponent" />
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
    iconComponent: {
      type: Object,
      default: null,
    },
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "[--color-text]",
    },
    variant: {
      type: String,
      validator(value: string) {
        return ["danger", "primary"].includes(value);
      },
      default: "primary",
    },
  },
  setup(props) {
    const buttonVariantClass = computed(() => {
      let buttonClass = "hover:shadow-[--focus-primary]";
      if (props.variant == "danger") {
        buttonClass += " shadow-red-50";
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
  color: var(--text-primary);
}

.button-container > button.danger:not(:disabled):hover {
  color: var(--text-primary);
}

.button-container span {
  margin-left: 0.5rem;
}
</style>
