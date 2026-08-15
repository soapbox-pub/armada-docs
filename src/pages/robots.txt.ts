import type { APIRoute } from "astro";

import { SITE_URL } from "../consts";

/**
 * `robots.txt` as a route rather than a file in `public/`.
 *
 * The only line in it that matters is the `Sitemap:` one, and it has to be an
 * absolute URL — which means the origin appears in it. A static file would be a
 * second place the deployed origin is written down, silently pointing at the
 * old host the day the site moves; generating it from `SITE_URL` keeps
 * `consts.ts` the one place.
 *
 * `sitemap-index.xml`, not `sitemap.xml`: `@astrojs/sitemap` emits an index
 * that points at the numbered chunks, and the chunk file alone is not the whole
 * site once there are more than 45,000 URLs.
 */
export const GET: APIRoute = () =>
  new Response(
    `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap-index.xml
`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
