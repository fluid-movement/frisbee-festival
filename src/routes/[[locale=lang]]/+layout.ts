import { PUBLIC_ORIGIN } from '$env/static/public';
import { locales } from '../../locales/data.js';
import { browser } from '$app/environment';
import { loadLocale } from 'wuchale/load-utils';

// Register wuchale loaders for client-side runtime (needed for hydration)
import '../../locales/main.loader.svelte.js';
import '../../locales/js.loader.js';

export const prerender = true;

export const load = async ({ params, url }) => {
	const locale = (params?.locale ?? 'de') as 'de' | 'en';

	if (browser && locales.includes(locale)) {
		await loadLocale(locale);
	}

	return {
		locale,
		ogImage: `${PUBLIC_ORIGIN}/festival.jpg`,
		ogLogo: `${PUBLIC_ORIGIN}/logo.png`,
		ogUrl: `${PUBLIC_ORIGIN}${url.pathname}`
	};
};
