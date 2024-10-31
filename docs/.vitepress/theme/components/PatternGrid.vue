<script setup lang="ts">
import { computed, PropType } from "vue";
import { Pattern } from "../composables/patterns";
import { validatePattern, validateDisplayMode } from "../utilities/validation";
import PatternCard from "./patterns/card/PatternCard.vue";

const properties = defineProps({
  patterns: {
    type: Array as PropType<Pattern[]>,
    required: true,
    validator: (value: Pattern[]) =>
      value.every((pattern) => validatePattern(pattern)),
  },
  displayMode: {
    type: String as PropType<"grid" | "list">,
    required: true,
    validator: validateDisplayMode,
  },
});

const emit = defineEmits<{
  "pattern-click": [pattern: Pattern];
}>();

const containerClass = computed(() => {
  return properties.displayMode === "grid" ? "pattern-grid" : "pattern-list";
});

defineOptions({
  name: "PatternGrid",
});
</script>

<template>
  <div :class="containerClass">
    <div v-if="patterns.length === 0" class="no-results">
      <div class="no-results-content">
        <h3>No patterns match your current filters</h3>
        <p>
          Try adjusting your filter criteria or clearing filters to see more
          patterns.
        </p>
      </div>
    </div>
    <PatternCard
      v-for="pattern in patterns"
      v-else
      :key="pattern.id"
      :pattern="pattern"
      :display-mode="displayMode"
      @click="emit('pattern-click', pattern)"
    />
  </div>
</template>

<style scoped>
.pattern-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  padding: 0.5rem;
}

.pattern-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0.5rem;
}

.no-results {
  grid-column: 1 / -1;
  text-align: center;
  padding: 4rem 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  border: 1px dashed var(--vp-c-divider);
}

.no-results-content {
  max-width: 400px;
  margin: 0 auto;
}

.no-results h3 {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-1);
}

.no-results p {
  margin: 0;
  color: var(--vp-c-text-2);
}

@media (max-width: 768px) {
  .pattern-grid {
    grid-template-columns: 1fr;
    padding: 0;
  }
}
</style>
