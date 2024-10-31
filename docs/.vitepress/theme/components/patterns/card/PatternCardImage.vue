<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  diagram: {
    type: String,
    required: false,
    default: undefined,
  },
  image: {
    type: String,
    required: false,
    default: undefined,
  },
  title: {
    type: String,
    required: true,
  },
});

// Generate a consistent color based on the title
const backgroundColor = computed(() => {
  const colors = [
    "bg-blue-100",
    "bg-green-100",
    "bg-purple-100",
    "bg-orange-100",
    "bg-pink-100",
    "bg-teal-100",
  ];
  const index = props.title.length % colors.length;
  return colors[index];
});
</script>

<template>
  <div
    class="border-divider aspect-[2/1] flex items-center justify-center overflow-hidden border-b p-4"
    :class="backgroundColor"
  >
    <span class="text-lg text-gray-600 font-medium">{{ title }}</span>
  </div>
</template>
