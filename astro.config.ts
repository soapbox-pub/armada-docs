// @ts-check
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import { LINKS, OG_IMAGE, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "./src/consts";

export default defineConfig({
  /**
   * Load-bearing for SEO, not cosmetic. `site` is what makes Astro emit
   * absolute canonical links, and it is what `@astrojs/sitemap` writes into
   * every `<loc>`. Leaving it unset ships a sitemap full of `/`-relative URLs
   * that no crawler can use.
   */
  site: SITE_URL,

  /**
   * Directory-style URLs (`/self-hosting/relay/`). One canonical spelling per
   * page and no extension in the path, which is also what Starlight's own
   * internal links assume.
   */
  trailingSlash: "always",

  integrations: [
    starlight({
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      logo: { src: "./src/assets/logo.svg", alt: "Armada" },
      favicon: "/favicon.svg",

      /**
       * Armada's own tokens, then the Starlight remap on top. Order matters:
       * `starlight.css` reads the variables `theme.css` defines.
       */
      customCss: ["./src/styles/theme.css", "./src/styles/starlight.css"],

      /**
       * Starlight emits title/description/canonical and the basic Open Graph
       * and Twitter tags on its own. What it does NOT emit is an image, so a
       * docs page shared anywhere renders as a bare text card — these four
       * tags are the whole difference.
       */
      head: [
        { tag: "meta", attrs: { property: "og:image", content: OG_IMAGE } },
        { tag: "meta", attrs: { property: "og:image:width", content: "1200" } },
        { tag: "meta", attrs: { property: "og:image:height", content: "630" } },
        { tag: "meta", attrs: { name: "twitter:image", content: OG_IMAGE } },
        { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } },
        { tag: "link", attrs: { rel: "apple-touch-icon", href: "/apple-touch-icon.png" } },
        {
          tag: "meta",
          attrs: {
            name: "theme-color",
            content: "#100b15",
            media: "(prefers-color-scheme: dark)",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "theme-color",
            content: "#f7f5fb",
            media: "(prefers-color-scheme: light)",
          },
        },
      ],

      social: [
        { icon: "gitlab", label: "Source", href: LINKS.repo },
        { icon: "external", label: "Armada", href: LINKS.app },
      ],

      /**
       * Reads the git log, so it needs real commit history — a shallow clone
       * in CI (`fetch-depth: 1`) makes every page claim the same date. Fetch
       * full history wherever this is built.
       */
      lastUpdated: true,

      /**
       * The two questions the site exists to answer, in the order a reader
       * asks them. `autogenerate` means a new page appears in the nav by being
       * written, with no second edit here to forget.
       */
      sidebar: [
        {
          label: "How it works",
          items: [{ autogenerate: { directory: "how-it-works" } }],
        },
        {
          label: "Self-hosting",
          items: [{ autogenerate: { directory: "self-hosting" } }],
        },
      ],
    }),

    sitemap(),
  ],
});
