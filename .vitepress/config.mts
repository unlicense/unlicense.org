import { defineConfig } from "vitepress";

// See: https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Unlicense.org",
  titleTemplate: ":title",
  description:
    "An initiative to help software developers waive their copyright and dedicate their work to the public domain by offering a standard template and process for disclaiming copyright interest in software, both for original authorship and for contributions.",
  head: [
    ["meta", { name: "author", content: "Arto Bendiken" }],
    ["base", { href: "https://unlicense.org" }],
    ["base", { target: "_blank" }],
    ["link", { rel: "icon", href: "/pd-icon.png" }],
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-L75DEDQD3G",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-L75DEDQD3G');`,
    ],
  ],
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
