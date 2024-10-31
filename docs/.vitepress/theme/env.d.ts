/// <reference types="vitepress/client" />
/// <reference types="vue/macros-global" />

declare module "*.vue" {
  import type { ComponentOptions } from "vue";
  const Component: ComponentOptions;
  export default Component;
}
