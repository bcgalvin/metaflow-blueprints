<script setup lang="ts">
import BaseCheckbox from "./base/BaseCheckbox.vue";

defineProps({
  value: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();
</script>

<template>
  <BaseCheckbox
    :model-value="value"
    label="Show Event Sources"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>
