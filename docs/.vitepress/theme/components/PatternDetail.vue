<script setup lang="ts">
import { PropType } from "vue";
import { Pattern } from "../composables/patterns";
import { useClipboard } from "../composables/useClipboard";
import { validatePattern } from "../utilities/validation";

defineProps({
  pattern: {
    type: Object as PropType<Pattern>,
    required: true,
    validator: validatePattern,
  },
});

const emit = defineEmits<{
  back: [];
}>();

const { copyFeedback, copyToClipboard: handleCopy } = useClipboard();

defineOptions({
  name: "PatternDetail",
});
</script>

<template>
  <div v-if="pattern" class="pattern-detail">
    <button class="back-button" @click="emit('back')">
      ← Back to Patterns
    </button>

    <div class="pattern-header">
      <div class="pattern-title">
        <h1>{{ pattern.title }}</h1>
        <a
          :href="pattern.githubRepo"
          target="_blank"
          rel="noopener"
          class="github-link"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
            />
          </svg>
          View on GitHub
        </a>
      </div>
      <div class="pattern-tags">
        <span
          v-for="tag in pattern.tags"
          :key="tag.name"
          class="tag"
          :class="tag.type"
        >
          {{ tag.name }}
        </span>
      </div>
    </div>

    <div class="pattern-diagram">
      <img :src="pattern.diagram" :alt="pattern.title" />
    </div>

    <div class="pattern-description">
      <p>{{ pattern.description }}</p>
    </div>

    <div class="pattern-implementation">
      <h2>Implementation</h2>

      <div class="implementation-section">
        <div class="implementation-header">
          <h3>Download</h3>
          <button
            class="copy-button"
            :class="{ copied: copyFeedback.download }"
            @click="handleCopy('download', pattern.implementation.download)"
          >
            {{ copyFeedback.download ? "Copied!" : "Copy" }}
          </button>
        </div>
        <pre><code>{{ pattern.implementation.download }}</code></pre>
      </div>

      <div class="implementation-section">
        <div class="implementation-header">
          <h3>Deploy</h3>
          <button
            class="copy-button"
            :class="{ copied: copyFeedback.deploy }"
            @click="handleCopy('deploy', pattern.implementation.deploy)"
          >
            {{ copyFeedback.deploy ? "Copied!" : "Copy" }}
          </button>
        </div>
        <pre><code>{{ pattern.implementation.deploy }}</code></pre>
      </div>

      <div class="implementation-section">
        <div class="implementation-header">
          <h3>Testing</h3>
          <button
            class="copy-button"
            :class="{ copied: copyFeedback.testing }"
            @click="handleCopy('testing', pattern.implementation.testing)"
          >
            {{ copyFeedback.testing ? "Copied!" : "Copy" }}
          </button>
        </div>
        <pre><code>{{ pattern.implementation.testing }}</code></pre>
      </div>

      <div class="implementation-section">
        <div class="implementation-header">
          <h3>Cleanup</h3>
          <button
            class="copy-button"
            :class="{ copied: copyFeedback.cleanup }"
            @click="handleCopy('cleanup', pattern.implementation.cleanup)"
          >
            {{ copyFeedback.cleanup ? "Copied!" : "Copy" }}
          </button>
        </div>
        <pre><code>{{ pattern.implementation.cleanup }}</code></pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pattern-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.back-button {
  display: inline-flex;
  align-items: center;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.back-button:hover {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}

.pattern-header {
  margin-bottom: 2rem;
}

.pattern-title {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
}

.pattern-title h1 {
  margin: 0;
  font-size: 2rem;
  line-height: 1.4;
  color: var(--vp-c-text-1);
}

.github-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  white-space: nowrap;
}

.github-link svg {
  width: 20px;
  height: 20px;
}

.pattern-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  background: var(--vp-c-bg-soft);
}

.tag.framework {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.tag.language {
  color: var(--vp-c-green-1);
  background: var(--vp-c-green-soft);
}

.pattern-diagram {
  margin-bottom: 2rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background: var(--vp-c-bg-alt);
  padding: 2rem;
}

.pattern-diagram img {
  width: 100%;
  max-width: 800px;
  height: auto;
  display: block;
  margin: 0 auto;
}

.pattern-description {
  margin-bottom: 2rem;
}

.pattern-description p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--vp-c-text-1);
}

.pattern-implementation h2 {
  margin: 0 0 1.5rem 0;
  font-size: 1.5rem;
  color: var(--vp-c-text-1);
}

.implementation-section {
  margin-bottom: 2rem;
}

.implementation-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.implementation-header h3 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--vp-c-text-1);
}

.copy-button {
  min-width: 70px;
  padding: 0.25rem 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-button:hover {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}

.copy-button.copied {
  background: var(--vp-c-green-soft);
  border-color: var(--vp-c-green-1);
  color: var(--vp-c-green-1);
}

.implementation-section pre {
  margin: 0;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  overflow-x: auto;
}

.implementation-section code {
  font-family: var(--vp-font-family-mono);
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--vp-c-text-1);
}

@media (max-width: 768px) {
  .pattern-detail {
    padding: 1rem;
  }

  .pattern-title {
    flex-direction: column;
  }

  .pattern-title h1 {
    font-size: 1.5rem;
  }

  .github-link {
    align-self: flex-start;
  }

  .pattern-diagram {
    padding: 1rem;
  }

  .pattern-description p {
    font-size: 1rem;
  }
}
</style>
