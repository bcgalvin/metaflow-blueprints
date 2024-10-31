<script setup lang="ts">
defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  "update:currentPage": [page: number];
}>();

defineOptions({
  name: "BasePagePagination",
});
</script>

<template>
  <div class="pagination">
    <button
      :disabled="currentPage === 1"
      class="pagination-button"
      @click="emit('update:currentPage', currentPage - 1)"
    >
      Previous
    </button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button
      :disabled="currentPage === totalPages"
      class="pagination-button"
      @click="emit('update:currentPage', currentPage + 1)"
    >
      Next
    </button>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding: 1rem;
}

.pagination-button {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  background: var(--vp-c-bg);
  cursor: pointer;
  transition: all 0.2s ease;
}

.pagination-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-button:not(:disabled):hover {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-brand);
}
</style>
