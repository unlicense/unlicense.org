import { defineConfig } from "vitepress";

// See: https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Unlicense Yourself: Set Your Code Free",
  description: "Set Your Code Free",
  themeConfig: {
    // See: https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "What", link: "#what-is-the-unlicense" },
      { text: "Why", link: "#why-use-the-unlicense" },
      { text: "How", link: "#the-unlicense" },
      { text: "Showcase", link: "#unlicensed-free-software" },
    ],

    sidebar: [],

    socialLinks: [
      { icon: "github", link: "https://github.com/unlicense" },
      { icon: "twitter", link: "https://x.com/bendiken" },
    ],
  },
});
