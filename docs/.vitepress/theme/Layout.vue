<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import type { Component } from "vue";

/**
 * Main layout component extending VitePress default theme
 * @component
 * @description Provides the base layout structure for all pages by wrapping the VitePress default theme
 * @remarks This component serves as the root layout container and should not be modified unless
 * specific theme customizations are needed
 */
const { Layout } = DefaultTheme as { Layout: Component };

defineOptions({
  name: "CustomLayout",
});

onErrorCaptured((err, instance, info) => {
  console.error("Layout error:", err, info);
  return false;
});
</script>

<template>
  <Layout class="custom-layout" role="main" aria-label="Main content" />
</template>
