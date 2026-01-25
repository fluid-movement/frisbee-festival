import type { LayoutServerLoad } from './$types';
import { locales } from '../../locales/data.js';
import { loadLocale } from 'wuchale/load-utils';

export const load: LayoutServerLoad = async ({ params }) => {
	const locale = params?.locale ?? 'de';

	// Load locale resources on the server so SSR can render translated content.
	if (locales.includes(locale)) {
		try {
			await loadLocale(locale);
		} catch (err) {
			// If loadLocale is not server-compatible, don't fail the request.
			console.warn('loadLocale failed on server for', locale, err);
		}
	}

	// expose the resolved locale to layouts/pages as `data.locale`
	return { locale };
};
