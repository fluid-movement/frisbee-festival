import { locales } from '../../locales/data.js';

export const prerender = true;

// Discover all page routes using Vite's import.meta.glob
const pages = import.meta.glob('/src/routes/**/+page.svelte');

const baseUrl = 'https://frisbee-festival-munich.de';

/**
 * Convert file paths to route paths
 * Example: '/src/routes/[[locale=lang]]/disciplines/+page.svelte' → '/disciplines'
 */
function getRoutes(): string[] {
	const routes: string[] = [];

	for (const path of Object.keys(pages)) {
		// Exclude sitemap.xml itself
		if (path.includes('sitemap.xml')) continue;

		let route = path
			.replace('/src/routes/', '')
			.replace('/+page.svelte', '')
			.replace('[[locale=lang]]', '');

		// Convert empty string to root path
		if (route === '') {
			route = '/';
		} else if (!route.startsWith('/')) {
			route = '/' + route;
		}

		routes.push(route);
	}

	return routes;
}

/**
 * Generate sitemap XML with all routes for all locales
 */
export async function GET() {
	const routes = getRoutes();

	// Generate URL entries for each route in each locale
	const urlEntries = routes
		.map((route) => {
			// Build locale-specific URLs
			const localeUrls = locales.map((locale) => {
				// Default locale (de) doesn't include locale prefix
				if (locale === 'de') {
					return { locale, url: `${baseUrl}${route}` };
				}
				// Non-default locales include the locale prefix
				const path = route === '/' ? `/${locale}` : `/${locale}${route}`;
				return { locale, url: `${baseUrl}${path}` };
			});

			// Create XML entry with hreflang links
			const primaryUrl = localeUrls.find((u) => u.locale === 'de') || localeUrls[0];
			const hreflangs = localeUrls
				.map(
					({ locale, url }) =>
						`    <xhtml:link rel="alternate" hreflang="${locale}" href="${url}"/>`
				)
				.join('\n');

			const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${primaryUrl.url}"/>`;

			return localeUrls
				.map(
					({ url }) => `  <url>
    <loc>${url}</loc>
${hreflangs}
${xDefault}
  </url>`
				)
				.join('\n');
		})
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
	xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:xhtml="http://www.w3.org/1999/xhtml"
	xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
	xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
	xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
	xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
>
${urlEntries}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
