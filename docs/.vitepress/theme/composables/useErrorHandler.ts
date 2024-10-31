import { ref } from "vue";
import type { Ref } from "vue";

export interface ErrorState {
  message: string;
  code?: string;
  details?: unknown;
  timestamp?: number;
}

export interface UseErrorHandlerReturn {
  error: Ref<ErrorState | undefined>;
  loading: Ref<boolean>;
  handleError: (error: unknown) => void;
  clearError: () => void;
  wrapAsync: <T>(asyncFn: () => Promise<T>) => Promise<T | undefined>;
}

export class AppError extends Error {
  code?: string;
  details?: unknown;

  constructor(message: string, code?: string, details?: unknown) {
    super(message);
    this.name = "AppError";
    this.code = code;
    this.details = details;
  }
}

/**
 * Composable for handling async operations and errors
 * @returns Object containing error handling state and methods
 */
export function useErrorHandler() {
  const error = ref<ErrorState | undefined>();
  const loading = ref(false);
  let loadingTimeout: number;

  const handleError = (error_: unknown) => {
    if (error_ instanceof AppError) {
      error.value = {
        message: error_.message,
        code: error_.code,
        details: error_.details,
        timestamp: Date.now(),
      };
    } else if (error_ instanceof Error) {
      error.value = {
        message: error_.message,
        timestamp: Date.now(),
      };
    } else if (
      typeof error_ === "object" &&
      error_ !== null &&
      "message" in error_
    ) {
      error.value = {
        ...(error_ as ErrorState),
        timestamp: Date.now(),
      };
    } else {
      error.value = {
        message: "An unknown error occurred",
        timestamp: Date.now(),
      };
    }
    console.error(error.value);
  };

  const clearError = () => {
    error.value = undefined;
  };

  const wrapAsync = async <T>(
    asyncFn: () => Promise<T>,
  ): Promise<T | undefined> => {
    loading.value = true;
    clearError();

    try {
      return await asyncFn();
    } catch (error_) {
      handleError(error_ as Error);
      return undefined;
    } finally {
      loading.value = false;
    }
  };

  // Cleanup on unmount
  onUnmounted(() => {
    clearError();
    if (loadingTimeout) {
      clearTimeout(loadingTimeout);
    }
  });

  return {
    error,
    loading,
    handleError,
    clearError,
    wrapAsync,
  };
}
