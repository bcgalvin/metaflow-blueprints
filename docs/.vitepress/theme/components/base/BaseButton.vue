<script setup lang="ts">
defineProps<{
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}>();

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();
</script>

<template>
  <button
    :type="type || 'button'"
    :disabled="disabled"
    class="base-button"
    @click="emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
@import "../../styles/shared.css";
</style>
