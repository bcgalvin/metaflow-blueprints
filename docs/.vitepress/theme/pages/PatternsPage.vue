<script setup lang="ts">
import { ref } from "vue";
import PatternBrowser from "../components/patterns/browser/PatternBrowser.vue";

/**
 * Main patterns page component
 * @component
 * @description Displays Argo Event Source patterns and provides pattern browsing functionality
 * @remarks This is the main entry point for the patterns documentation section
 */
interface Props {
  title?: string;
  description?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Argo Event Source Patterns",
  description: "Browse and explore Argo Event Source patterns",
});

const emit = defineEmits<{
  (e: "patternSelect", pattern: Pattern): void;
  (e: "error", error: Error): void;
}>();

const isLoading = ref(true);
const error = ref<Error | null>(null);

useHead({
  title: props.title,
  meta: [{ name: "description", content: props.description }],
});

onMounted(() => {
  isLoading.value = false;
});

onErrorCaptured((err) => {
  error.value = err;
  emit("error", err);
  return false;
});

defineOptions({
  name: "PatternsPage",
});
</script>

<template>
  <main class="patterns-page p-8" data-testid="patterns-page">
    <h1
      class="mb-8 text-2xl font-bold"
      data-testid="patterns-heading"
      role="heading"
      aria-level="1"
    >
      {{ title }}
    </h1>

    <div
      v-if="isLoading"
      role="status"
      aria-live="polite"
      data-testid="loading-state"
    >
      Loading patterns...
    </div>

    <div
      v-else-if="error"
      role="alert"
      class="text-red-500"
      data-testid="error-state"
    >
      Failed to load patterns: {{ error.message }}
    </div>

    <pattern-browser
      v-else
      class="pattern-browser"
      data-testid="pattern-browser"
      @pattern-select="(pattern) => emit('patternSelect', pattern)"
    />
  </main>
</template>
