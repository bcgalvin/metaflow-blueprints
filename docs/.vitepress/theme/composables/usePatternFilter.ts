import { computed, ComputedRef, Ref, ref } from "vue";
import patterns from "../event-sources.json";

export const ITEMS_PER_PAGE = 12;

const loadPatterns = async () => {
  try {
    patternsReference.value = patterns;
  } catch (error) {
    console.error("Failed to load patterns:", error);
    patternsReference.value = [];
    throw new Error("Failed to load patterns");
  }
};

export interface PatternFilterReturn {
  selectedTags: Ref<string[]>;
  showEventSources: Ref<boolean>;
  currentPage: Ref<number>;
  allTags: ComputedRef<string[]>;
  patterns: ComputedRef<Pattern[]>;
  totalPages: ComputedRef<number>;
  loadPatterns: () => Promise<void>;
  ITEMS_PER_PAGE: number;
}

export function usePatternFilter(): PatternFilterReturn {
  const patternsReference = ref(patterns);
  const selectedTags = ref<string[]>([]);
  const currentPage = ref(1);
  const showEventSources = ref(false);

  const filteredPatterns = computed(() => {
    let filtered = patternsReference.value;

    // Apply tag filter
    if (selectedTags.value.length > 0) {
      filtered = filtered.filter((pattern) =>
        selectedTags.value.every((tag) =>
          pattern.tags.some((t) => t.name === tag),
        ),
      );
    }

    // Apply event sources filter
    if (!showEventSources.value) {
      filtered = filtered.filter((pattern) => !pattern.isEventSource);
    }

    return filtered;
  });

  const paginatedPatterns = computed(() => {
    const start = (currentPage.value - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredPatterns.value.slice(start, end);
  });

  const totalPages = computed(() => {
    return Math.ceil(filteredPatterns.value.length / ITEMS_PER_PAGE);
  });

  const allTags = computed(() => {
    const tags = new Set(
      patternsReference.value.flatMap((p) => p.tags.map((t) => t.name)),
    );
    return [...tags].sort();
  });

  return {
    selectedTags,
    showEventSources,
    currentPage,
    allTags,
    patterns: paginatedPatterns,
    totalPages,
    loadPatterns,
    ITEMS_PER_PAGE,
  };
}
