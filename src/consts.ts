/**
 * Site-wide constants.
 *
 * Everything here is copy or configuration that appears in more than one place
 * — the landing page, the Starlight chrome, the SEO tags and the sitemap — so
 * there is one spelling of each rather than four that drift.
 */

/**
 * The canonical origin, with no trailing slash.
 *
 * This is the ONE place the deployed URL is written down: `astro.config.mjs`
 * feeds it to `site`, which is what makes canonical links, `sitemap-index.xml`
 * and the absolute `og:image` URLs correct. A wrong value here does not fail
 * the build — it silently ships a sitemap and social cards pointing at a host
 * that isn't serving the site.
 */
export const SITE_URL = "https://docs.armada.buzz";

/** The product these docs are about, and where its app lives. */
export const APP_NAME = "Armada";
export const APP_URL = "https://armada.buzz";

/** Shown in the browser tab and as the `og:site_name`. */
export const SITE_TITLE = "Armada Docs";

/**
 * The default meta description. Crawlers show ~155 characters, so the two
 * things this site is for — how Armada works, and how to run it yourself —
 * are both in the first clause rather than trailing off the end.
 */
export const SITE_DESCRIPTION =
  "How Armada works and how to self-host it. Documentation for the encrypted, serverless communities that run on Nostr relays — no host required.";

/**
 * The social card. Absolute URLs only: X, Discord, Slack and iMessage do not
 * resolve relative ones, and the preview degrades to a generic placeholder.
 */
export const OG_IMAGE = `${SITE_URL}/og.png`;

/** Off-site destinations, so a moved URL is a one-line change. */
export const LINKS = {
  app: APP_URL,
  downloads: `${APP_URL}/downloads`,
  repo: "https://gitworkshop.dev/soapbox.pub/relay.ngit.dev/armada",
  issues: "https://gitworkshop.dev/soapbox.pub/relay.ngit.dev/armada/issues",
  /**
   * The relay Soapbox runs, and the one the self-hosting page points at.
   *
   * NOT `armada-relay`, which reads like the obvious choice and is marked
   * deprecated/testing-only in its own README — its own advice is to point the
   * client at some other NIP-29 relay instead.
   */
  relayRepo: "https://gitlab.com/soapbox-pub/ditto-relay",
  concord: "https://github.com/concord-protocol/concord",
  nostr: "https://github.com/nostr-protocol/nostr",
} as const;
