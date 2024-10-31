<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="filter-section">
    <h4>{{ title }}</h4>
    <slot></slot>
  </div>
</template>

<style scoped>
.filter-section {
  margin-bottom: 1.5rem;
}

.filter-section h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  color: var(--vp-c-text-2);
}
</style>
