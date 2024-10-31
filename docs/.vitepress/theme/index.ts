import "@unocss/reset/tailwind.css";
import "virtual:uno.css";
import { Theme } from "vitepress";

import DefaultTheme from "vitepress/theme";
import { h } from "vue";
import { Tab, Tabs } from "vue3-tabs-component";
import PatternBrowser from "./components/patterns/browser/PatternBrowser.vue";
import "./styles/style.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {});
  },
  enhanceApp({ app }) {
    app.component("BaseTab", Tab);
    app.component("BaseTabs", Tabs);
    app.component("PatternBrowser", PatternBrowser);
  },
} satisfies Theme;
