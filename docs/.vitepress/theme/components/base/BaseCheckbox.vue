<script setup lang="ts">
/**
 * Base checkbox component with label
 * @component
 * @description A reusable checkbox component that provides standard checkbox functionality with an associated label
 * @remarks This component handles boolean input with proper accessibility attributes and styling
 */
interface Props {
  modelValue: boolean;
  label: string;
  id?: string; // Optional ID for accessibility
  disabled?: boolean; // Optional disabled state
}

const props = withDefaults(defineProps<Props>(), {
  id: undefined,
  disabled: false,
});

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();
</script>

<template>
  <label
    class="flex cursor-pointer items-center"
    :class="{ 'opacity-50 cursor-not-allowed': disabled }"
  >
    <input
      :id="id"
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      class="mr-2"
      @change="($event) => emit('update:modelValue', $event.target.checked)"
    />
    <span class="text-sm text-[var(--vp-c-text-1)]">{{ label }}</span>
  </label>
</template>
