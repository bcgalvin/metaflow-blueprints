<script setup lang="ts">
import { computed, PropType } from "vue";
import { Pattern } from "../../../composables/patterns";

const properties = defineProps({
  pattern: {
    type: Object as PropType<Pattern>,
    required: true,
    validator: (value: Pattern) => {
      return ["title", "description", "tags"].every((key) => key in value);
    },
  },
  displayMode: {
    type: String as PropType<"grid" | "list">,
    required: true,
    validator: (value: string) => ["grid", "list"].includes(value),
  },
});

const contentClass = computed(() => {
  return `p-6 flex-1 flex flex-col ${properties.displayMode === "list" ? "flex-1" : ""}`;
});

const descriptionClass = computed(() => {
  return properties.displayMode === "list" ? "block" : "line-clamp-3";
});
</script>

<template>
  <div :class="contentClass">
    <h3 class="text-text-1 mb-3 text-lg font-semibold">{{ pattern.title }}</h3>
    <p :class="[descriptionClass, 'text-sm leading-6 text-text-2 flex-1 mb-6']">
      {{ pattern.description }}
    </p>
    <div class="mt-auto flex flex-wrap gap-2">
      <span
        v-for="tag in pattern.tags"
        :key="tag.name"
        class="tag"
        :class="[`bg-${tag.type}-100`, `text-${tag.type}-800`]"
      >
        {{ tag.name }}
      </span>
    </div>
  </div>
</template>
