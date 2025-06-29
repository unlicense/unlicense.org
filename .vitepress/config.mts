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
        defer: "",
        src: "https://cloud.umami.is/script.js",
        "data-website-id": "7d44d219-0dc9-4bca-b15c-6107d1a1f62d",
      },
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
    footer: {
      message:
        'Created and maintained <a href="https://ar.to/2010/01/set-your-code-free">since 2010</a> by <a href="https://ar.to">Arto Bendiken</a> (find him on <a href="https://x.com/bendiken">X</a>, <a href="https://github.com/artob">GitHub</a>, and <a href="https://www.linkedin.com/in/arto">LinkedIn</a>)',
    },
  },
});
