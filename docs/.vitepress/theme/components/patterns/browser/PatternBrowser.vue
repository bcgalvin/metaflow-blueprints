<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useErrorHandler } from "../../../composables/useErrorHandler";
import { usePagination } from "../../../composables/usePagination";
import { usePatternFilter } from "../../../composables/usePatternFilter";
import type { Pattern } from "../../../types/pattern";
import Pagination from "../../Pagination.vue";
import PatternDetail from "../../PatternDetail.vue";
import PatternGrid from "../../PatternGrid.vue";
import PatternFilters from "../filters/PatternFilters.vue";

interface PatternBrowserProperties {}

defineProps<PatternBrowserProperties>();

const {
  selectedTags,
  showEventSources,
  // TODO: Uncomment when implementing pagination in filters
  // currentPage: filterCurrentPage,
  allTags,
  patterns,
  // TODO: Uncomment when implementing pagination in filters
  // totalPages: filterTotalPages,
  loadPatterns,
} = usePatternFilter();

const { error, loading, wrapAsync } = useErrorHandler();

const selectedPattern = ref<Pattern | undefined>(undefined);
const displayMode = ref<"grid" | "list">("grid");

const {
  paginatedItems: filteredPatterns,
  totalPages: paginationTotalPages,
  currentPage: paginationCurrentPage,
} = usePagination(patterns.value);

const selectPattern = (pattern: Pattern) => {
  selectedPattern.value = pattern;
};

const backToList = () => {
  selectedPattern.value = undefined;
};

const toggleDisplayMode = () => {
  displayMode.value = displayMode.value === "grid" ? "list" : "grid";
};

onMounted(async () => {
  await wrapAsync(loadPatterns);
});

defineOptions({
  name: "PatternBrowser",
});
</script>

<template>
  <div class="pattern-browser">
    <h2>Argo Event Sources</h2>

    <div v-if="loading" class="loading-state">
      <div class="spinner"></div>
      <p>Loading patterns...</p>
    </div>

    <div v-else-if="error" class="error-state">
      <p>An error occurred while loading patterns. Please try again later.</p>
      <button class="retry-button" @click="wrapAsync(loadPatterns)">
        Retry
      </button>
    </div>

    <template v-else>
      <div class="pattern-controls">
        <PatternFilters
          v-model:selected-tags="selectedTags"
          v-model:show-event-sources="showEventSources"
          :all-tags="allTags"
        />
        <button class="display-mode-toggle" @click="toggleDisplayMode">
          {{ displayMode === "grid" ? "List View" : "Grid View" }}
        </button>
      </div>

      <PatternGrid
        v-if="!selectedPattern"
        :patterns="filteredPatterns"
        :display-mode="displayMode"
        @pattern-click="selectPattern"
      />

      <PatternDetail v-else :pattern="selectedPattern" @back="backToList" />

      <Pagination
        v-if="paginationTotalPages > 1"
        v-model:current-page="paginationCurrentPage"
        :total-pages="paginationTotalPages"
      />
    </template>
  </div>
</template>

<style scoped>
.pattern-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.display-mode-toggle {
  padding: 0.5rem 1rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.display-mode-toggle:hover {
  background: var(--vp-c-bg-alt);
  border-color: var(--vp-c-brand);
}
</style>

<style scoped>
.pattern-browser {
  font-family: var(--vp-font-family-base);
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
}

.loading-state,
.error-state {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  margin: 2rem 0;
}

.spinner {
  width: 40px;
  height: 40px;
  margin: 0 auto 1rem;
  border: 3px solid var(--vp-c-divider);
  border-top-color: var(--vp-c-brand);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.retry-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--vp-c-brand);
  color: var(--vp-c-text-inverse-1);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.retry-button:hover {
  background-color: var(--vp-c-brand-dark);
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding: 1rem;
}

.pagination-button {
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
}

.pagination-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-button:not(:disabled):hover {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-brand);
}

.pattern-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.event-sources-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.event-sources-toggle:hover {
  background-color: var(--vp-c-bg-soft);
}

.checkbox-input {
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid var(--vp-c-divider);
  border-radius: 4px;
  margin: 0;
  cursor: pointer;
  position: relative;
  background-color: var(--vp-c-bg);
  transition: all 0.2s ease;
}

.checkbox-input:checked {
  background-color: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
}

.checkbox-input:checked::after {
  content: "";
  position: absolute;
  left: 5px;
  top: 2px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-label {
  font-size: 14px;
  color: var(--vp-c-text-1);
}

.search-input,
.type-select {
  padding: 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 14px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag-button {
  padding: 4px 8px;
  background-color: var(--vp-c-bg-mute);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  cursor: pointer;
  color: var(--vp-c-text-1);
  font-size: 12px;
  transition: all 0.3s ease;
}

.tag-button:hover {
  background-color: var(--vp-c-bg-soft);
}

.tag-button.tag-selected {
  background-color: var(--vp-c-brand);
  color: var(--vp-c-text-inverse-1);
  border-color: var(--vp-c-brand);
}

.pattern-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.pattern-item {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 15px;
  cursor: pointer;
  background-color: var(--vp-c-bg);
  transition: all 0.3s ease;
}

.pattern-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.pattern-type {
  display: inline-block;
  background-color: var(--vp-c-brand);
  color: var(--vp-c-text-inverse-1);
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 12px;
  margin-top: 10px;
}

.pattern-tags {
  margin-top: 10px;
}

.pattern-tag {
  display: inline-block;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  margin-right: 5px;
  margin-bottom: 5px;
}

.pattern-detail {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 20px;
  background-color: var(--vp-c-bg);
}

.tag-button {
  padding: 5px 10px;
  background-color: var(--vp-c-bg-mute);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  cursor: pointer;
  color: var(--vp-c-text-1);
}

.tag-button.tag-selected {
  background-color: var(--vp-c-brand);
  color: var(--vp-c-text-inverse-1);
}

.back-button,
.copy-button {
  padding: 8px 15px;
  background-color: var(--vp-c-brand);
  color: var(--vp-c-text-inverse-1);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 15px;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.back-button:hover,
.copy-button:hover {
  background-color: var(--vp-c-brand-dark);
}
.pattern-type {
  background-color: var(--vp-c-brand);
  color: var(--vp-c-text-inverse-1);
}

.pattern-tag {
  background-color: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
}

.search-input,
.type-select {
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.pattern-item {
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
}

.pattern-detail {
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
}
.implementation pre {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .pattern-controls {
    flex-direction: column;
  }

  .search-input,
  .type-select {
    width: 100%;
  }
}
</style>
