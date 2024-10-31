<script setup lang="ts">
const { tags, selectedTags } = defineProps<{
  tags: string[];
  selectedTags: string[];
}>();

const emit = defineEmits<{
  "update:selectedTags": [value: string[]];
}>();

const toggleTag = (tag: string) => {
  const updatedTags = [...selectedTags];
  const index = updatedTags.indexOf(tag);
  if (index === -1) {
    updatedTags.push(tag);
  } else {
    updatedTags.splice(index, 1);
  }
  emit("update:selectedTags", updatedTags);
};
</script>

<template>
  <div class="filter-tags">
    <button
      v-for="tag in tags"
      :key="tag"
      class="tag-button"
      :class="{ 'tag-selected': selectedTags.includes(tag) }"
      @click="toggleTag(tag)"
    >
      {{ tag }}
    </button>
  </div>
</template>

<style scoped>
.filter-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-button {
  padding: 0.25rem 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 0.8rem;
  cursor: pointer;
}

.tag-button.tag-selected {
  background: var(--vp-c-brand);
  color: var(--vp-c-text-inverse-1);
}
</style>
