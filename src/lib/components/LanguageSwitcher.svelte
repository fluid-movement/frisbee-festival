<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { locales } from '../../locales/data.js';
	import type { ResolvedPathname } from '$app/types';

	const languages = [
		{ code: 'de', label: 'Deutsch' },
		{ code: 'en', label: 'English' }
	] as const;

	/**
	 * Build an href for a given language based on the current page without using $page:
	 * - If the current path already has a locale segment (e.g. /en/...), remove it and replace as needed.
	 * - If the current path does NOT have a locale:
	 *   - target 'de' (default) -> use the path without adding /de
	 *   - target other -> prefix the path with /{lang}
	 * Uses `resolve` to ensure base path handling and appends search+hash.
	 */
	function hrefFor(lang: string) {
		// `page` in this project is a plain object with a `url` property.
		// Use it directly instead of treating it as a Svelte store.
		const pathname = page.url?.pathname ?? '/';
		const search = page.url?.search ?? '';
		const hash = page.url?.hash ?? '';

		const segments = pathname.split('/').filter(Boolean);

		// remove existing locale prefix if present
		if (segments.length > 0 && locales.includes(segments[0])) {
			segments.shift();
		}

		const rest = segments.length ? '/' + segments.join('/') : '';
		const raw = lang === 'de' ? rest || '/' : `/${lang}${rest}`;

		// cast the dynamic raw path to any so TypeScript accepts it for resolve(...)
		return resolve(raw) + search + hash;
	}

	/**
	 * Determine whether the given language is the active one for the current URL.
	 * - If URL has a locale prefix, compare it.
	 * - If URL has no prefix, treat 'de' as active.
	 */
	function isActive(lang: string) {
	  console.log(page.url)
		const pathname = page.url?.pathname ?? '/';
		const segments = pathname.split('/').filter(Boolean);
		const first = segments[0];
		if (first && locales.includes(first)) {
			return first === lang;
		}
		return lang === 'de';
	}
</script>

<div class="flex gap-4">
	{#each languages as { code, label } (code)}
		<a
			href={hrefFor(code)}
			hreflang={code}
			aria-current={isActive(code) ? 'true' : undefined}
			data-sveltekit-preload-data="off"
			class="inline-flex items-center rounded-md border px-3 py-1 text-sm"
		>
			{label}
		</a>
	{/each}
</div>
