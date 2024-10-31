<script setup lang="ts">
import FilterSection from "./FilterSection.vue";
import FilterTags from "./FilterTags.vue";
import BaseCheckbox from "../../base/BaseCheckbox.vue";

interface PatternFiltersProperties {
  selectedTags: string[];
  showEventSources: boolean;
  allTags: string[];
}

defineProps<PatternFiltersProperties>();

defineEmits<{
  "update:selectedTags": [value: string[]];
  "update:showEventSources": [value: boolean];
}>();

defineOptions({
  name: "PatternFilters",
});
</script>

<template>
  <div class="pattern-filters">
    <FilterSection title="Tags">
      <FilterTags
        :tags="allTags"
        :selected-tags="selectedTags"
        @update:selected-tags="$emit('update:selectedTags', $event)"
      />
    </FilterSection>

    <FilterSection title="Event Sources">
      <BaseCheckbox
        :model-value="showEventSources"
        label="Show Event Sources"
        @update:model-value="$emit('update:showEventSources', $event)"
      />
    </FilterSection>
  </div>
</template>

<style scoped>
.pattern-filters {
  margin-bottom: 2rem;
}
</style>
