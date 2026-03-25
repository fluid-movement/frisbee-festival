import { locales } from '../../locales/data.js';
import { browser } from '$app/environment';
import { loadLocale } from 'wuchale/load-utils';

// Register wuchale loaders for client-side runtime (needed for hydration)
import '../../locales/main.loader.svelte.js';
import '../../locales/js.loader.js';

export const prerender = true;

export const load = async ({ params }) => {
	const locale = (params?.locale ?? 'de') as 'de' | 'en';

	if (browser && locales.includes(locale)) {
		await loadLocale(locale);
	}

	return {
		locale
	};
};
