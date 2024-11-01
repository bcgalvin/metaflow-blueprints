import tabsPlugin from "@red-asuka/vitepress-plugin-tabs";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Metaflow Blueprints",
  description: "Documentation for Metaflow Blueprints",
  base: "/metaflow-blueprints/",
  srcDir: "src",
  lastUpdated: true,
  ignoreDeadLinks: true,

  vite: {
    build: {
      chunkSizeWarningLimit: Infinity
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/x-icon",
        href: "favicon.ico",
      },
    ],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
    ["meta", { name: "description", content: "Metaflow Blueprints" }],
    ["meta", { property: "og:title", content: "Metaflow Blueprints" }],
    ["meta", { property: "og:description", content: "Metaflow Blueprints" }],
    [
      "meta",
      {
        property: "og:image",
        content: "favicon.ico",
      },
    ],
  ],

  markdown: {
    linkify: false,
    attrs: {
      disable: true,
    },
    container: {
      tipLabel: "Tip",
      warningLabel: "Warning",
      dangerLabel: "Danger",
      infoLabel: "Info",
    },
    config: (md) => {
      tabsPlugin(md);
    },
  },

  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/bcgalvin/metaflow-blueprints",
      },
    ],
    editLink: {
      pattern: "https://github.com/bcgalvinedit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    nav: [
      { text: "Docs", items: [{ text: "Guide", link: "/guide/motivation" }] },
      { text: "Reference", link: "/reference" },
    ],
    logo: { src: "/logo.svg" },
    sidebar: [
      {
        text: "Overview",
        collapsed: false,
        items: [
          {
            text: "Motivation",
            link: "/motivation",
          },
        ],
      },
      {
        text: "Design",
        collapsed: false,
        items: [
          { text: "Components", link: "/design/components" },
          {
            text: "Integrations",
            items: [
              { text: "dbt", link: "/design/integration/dbt" },
            ],
          },
        ],
      },
      {
        text: "Patterns",
        collapsed: false,
        items: [{ text: "Event Sources", link: "/patterns/event-sources" }],
      },
    ],
  },
});
