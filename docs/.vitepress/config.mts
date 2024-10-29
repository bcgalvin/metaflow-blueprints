import tabsPlugin from "@red-asuka/vitepress-plugin-tabs";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Metaflow Blueprints",
  description: "Documentation for Metaflow Blueprints",
  base: "/metaflow-blueprints/",
  srcDir: "src",
  lastUpdated: true,

  vite: {
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
      { text: "Reference", link: "/reference" },
      {
        text: "Guides",
        items: [
          {
            text: "Low Level Constructs",
            items: [
              {
                text: "Event Sources",
                link: "/guides/low-level-constructs/event-sources",
              },
              { text: "Sensors", link: "/guides/low-level-constructs/sensors" },
              { text: "Filters", link: "/guides/low-level-constructs/filters" },
              {
                text: "Triggers",
                link: "/guides/low-level-constructs/triggers",
              },
            ],
          },
        ],
      },
    ],

    logo: { src: "/logo.svg" },
    sidebar: [
      {
        text: "Overview",
        collapsed: true,
        items: [
          { text: "Introduction", link: "/" },

          {
            text: "Motivation",
            link: "/motivation",
          },
        ],
      },
      {
        text: "Design",
        collapsed: true,
        items: [
          { text: "Prerequisites", link: "/design/prerequisites" },
          { text: "Components", link: "/design/components" },
          { text: "Integration", link: "/design/integrations" },
        ],
      },
    ],
  },
});
