import { Theme } from "vitepress";

import "@red-asuka/vitepress-plugin-tabs/dist/style.css";
import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import { Tab, Tabs } from "vue3-tabs-component";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {});
  },
  enhanceApp({ app }) {
    app.component("Tab", Tab);
    app.component("Tabs", Tabs);
  },
} satisfies Theme;
