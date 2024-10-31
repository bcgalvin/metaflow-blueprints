<script setup lang="ts">
import { PropType } from "vue";
import PatternCardContent from "./PatternCardContent.vue";
import PatternCardImage from "./PatternCardImage.vue";
import { Pattern } from "../../../composables/patterns";
import {
  validatePattern,
  validateDisplayMode,
} from "../../../utilities/validation";

defineProps({
  pattern: {
    type: Object as PropType<Pattern>,
    required: true,
    validator: validatePattern,
  },
  displayMode: {
    type: String as PropType<"grid" | "list">,
    required: true,
    validator: validateDisplayMode,
  },
});

const emit = defineEmits<{
  click: [pattern: Pattern];
}>();
</script>

<template>
  <div
    class="bg-bg-soft border-divider hover:border-brand cursor-pointer overflow-hidden border rounded-lg transition-all duration-300 ease-in-out hover:translate-y-[-4px] hover:shadow-lg"
    :class="[
      displayMode === 'grid'
        ? 'h-full flex flex-col'
        : 'flex flex-row md:flex-col',
    ]"
    @click="emit('click', pattern)"
  >
    <PatternCardImage
      :diagram="pattern.diagram"
      :image="pattern.image"
      :title="pattern.title"
    />
    <PatternCardContent :pattern="pattern" :display-mode="displayMode" />
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .list-mode {
    flex-direction: column;
  }
}
</style>
