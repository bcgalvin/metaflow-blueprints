import { ref, computed, Ref, ComputedRef } from "vue";

export interface UsePaginationReturn<T> {
  currentPage: Ref<number>;
  perPage: Ref<number>;
  totalPages: ComputedRef<number>;
  paginatedItems: ComputedRef<T[]>;
  goToPage: (page: number) => void;
}

export function usePagination<T>(
  items: T[],
  itemsPerPage = 10,
): UsePaginationReturn<T> {
  const currentPage = ref(1);
  const perPage = ref(itemsPerPage);

  const totalPages = computed(() => {
    return Math.ceil(items.length / perPage.value);
  });

  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * perPage.value;
    const end = start + perPage.value;
    return items.slice(start, end);
  });

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
    }
  };

  return {
    currentPage,
    perPage,
    totalPages,
    paginatedItems,
    goToPage,
  };
}
