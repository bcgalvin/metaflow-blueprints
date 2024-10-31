import { ref, onUnmounted } from "vue";
import type { Ref } from "vue";

export interface CopyFeedbackState {
  [key: string]: boolean;
}

export interface ClipboardError extends Error {
  code?: string;
}

export interface UseClipboardReturn {
  copyFeedback: Ref<CopyFeedbackState>;
  copyToClipboard: (section: string, text: string) => Promise<boolean>;
}

/**
 * Composable for clipboard operations with feedback
 * @returns Object containing clipboard state and methods
 */
export function useClipboard(): UseClipboardReturn {
  const copyFeedback = ref<CopyFeedbackState>({});
  const feedbackTimeouts = new Map<string, number>();

  const copyToClipboard = async (
    section: string,
    text: string,
  ): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);

      // Clear existing timeout
      if (feedbackTimeouts.has(section)) {
        clearTimeout(feedbackTimeouts.get(section));
      }

      copyFeedback.value[section] = true;

      // Set new timeout
      const timeoutId = window.setTimeout(() => {
        copyFeedback.value[section] = false;
        feedbackTimeouts.delete(section);
      }, 2000);

      feedbackTimeouts.set(section, timeoutId);
      return true;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      console.error("Failed to copy:", errorMessage);
      throw new Error(`Failed to copy to clipboard: ${errorMessage}`);
    }
  };

  // Cleanup timeouts on unmount
  onUnmounted(() => {
    feedbackTimeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    feedbackTimeouts.clear();
  });

  return {
    copyFeedback,
    copyToClipboard,
  };
}
