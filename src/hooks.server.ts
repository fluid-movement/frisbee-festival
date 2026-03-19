import type { Handle } from '@sveltejs/kit';
import { runWithLocale, loadLocales } from 'wuchale/load-utils/server';
import * as main from './locales/main.loader.server.svelte.js';
import * as js from './locales/js.loader.server.js';
import { locales } from './locales/data.js';

// Pre-load all catalogs at server startup
loadLocales(main.key, main.loadIDs, main.loadCatalog, locales);
loadLocales(js.key, js.loadIDs, js.loadCatalog, locales);

export const handle: Handle = async ({ event, resolve }) => {
	// Extract locale from URL path (e.g., /de/page, /en/page)
	const pathname = event.url.pathname;
	const segments = pathname.split('/').filter(Boolean);
	const locale = (segments[0] && locales.includes(segments[0]) ? segments[0] : 'de') as 'de' | 'en';

	// Wrap the entire request with the locale context
	// This makes the locale available to all components during SSR/prerendering
	return await runWithLocale(locale, () => resolve(event));
};
