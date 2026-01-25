import { locales } from '../../locales/data.js';
import { browser } from '$app/environment';
import { loadLocale } from 'wuchale/load-utils';

// so that the loaders are registered, only here, not required in nested ones (below)
import '../../locales/main.loader.svelte.js';
import '../../locales/js.loader.js';

export const prerender = true;

export const load = async ({ params }) => {
	const locale = params?.locale ?? 'de';

	// load locale resources on the client only
	if (browser && locales.includes(locale)) {
		await loadLocale(locale);
	}

	// expose the resolved locale to layouts/pages as `data.locale`
	return { locale };
};
