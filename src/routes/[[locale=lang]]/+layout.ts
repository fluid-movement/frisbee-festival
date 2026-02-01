import { browser } from '$app/environment';
import { loadLocale } from 'wuchale/load-utils';
import { locales } from '../../locales/data.js';
import { PUBLIC_ORIGIN } from '$env/static/public';

// Register wuchale loaders for client-side translations
import '../../locales/main.loader.svelte.js';
import '../../locales/js.loader.js';

export const prerender = true;

// Translation data for meta tags (static, build-time)
const metaTranslations = {
	de: {
		title: 'Frisbee Festival München',
		description: 'Das Frisbee Festival München ist ein Event welches den Frisbeesport in allen Facetten feiert. Von Ultimate Frisbee über Disc Golf bis hin zu Freestyle und Rollstuhl-Frisbee.',
	},
	en: {
		title: 'Frisbee Festival Munich',
		description: 'The Munich Frisbee Festival is an event celebrating disc sports in all their facets. From Ultimate Frisbee to Disc Golf, Freestyle, and Wheelchair Frisbee.',
	},
} as const;

export const load = async ({ params, url }) => {
	const locale = (params?.locale ?? 'de') as 'de' | 'en';

	// Load wuchale resources on the client for interactive translations
	if (browser && locales.includes(locale)) {
		await loadLocale(locale);
	}

	// Generate meta tags during prerendering (baked into static HTML)
	const t = metaTranslations[locale];
	const meta = {
		title: t.title,
		description: t.description,
		ogImage: `${PUBLIC_ORIGIN}/festival.jpg`,
		ogUrl: `${PUBLIC_ORIGIN}${url.pathname}`,
	};

	return {
		locale,
		meta,
	};
};
