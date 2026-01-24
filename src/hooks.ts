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
	// normalize pathname and extract the first non-empty segment
	const pathname = url.pathname || '/';
	const segments = pathname.split('/').filter(Boolean);
	const first = segments[0];

	// If no first segment (root) or the first segment is not a known locale,
	// resolve the route under /de
	if (!first || !locales.includes(first)) {
		// For the root path '/', map to '/de'
		if (pathname === '/') return '/de';

		// Otherwise prefix with /de (preserve the rest of the path)
		return `/de${pathname}`;
	}

	// Otherwise, don't reroute
};