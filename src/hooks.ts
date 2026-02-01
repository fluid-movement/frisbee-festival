import type { Reroute } from '@sveltejs/kit';
import { locales } from './locales/data.js';

/**
 * Universal reroute hook
 *
 * Behaviour:
 * - If the first path segment is a known locale (e.g. /de/... or /en/...), do nothing.
 * - If there is no locale segment (e.g. /, /about, /blog/some-post), reroute internally to /de/...
 *
 * Notes:
 * - This function is pure and deterministic for the same input (required by SvelteKit).
 * - It rewrites the pathname used for route resolution only; it does NOT change the browser address bar.
 */
export const reroute: Reroute = ({ url }) => {
	const pathname = url.pathname || '/';

  if (pathname.startsWith('/sitemap.xml') || pathname.startsWith('/health')) {
    return;
  }
  
	const segments = pathname.split('/').filter(Boolean);
	const first = segments[0];

	if (!first || !locales.includes(first)) {
		if (pathname === '/') {
			return '/de';
		}

		return `/de${pathname}`;
	}
};
