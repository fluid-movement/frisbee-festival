import { page } from '$app/state';
import { resolve } from '$app/paths';
import type { Pathname, ResolvedPathname } from '$app/types';
import { sourceLocale, locales } from '../locales/data.js';

function isExternalUrl(path: string): boolean {
	return /^(https?:)?\/\//.test(path) || path.startsWith('mailto:') || path.startsWith('tel:');
}

function isAnchorOnly(path: string): boolean {
	return path.startsWith('#');
}

function hasLocalePrefix(path: string): boolean {
	const segments = path.split('/').filter(Boolean);
	return segments.length > 0 && locales.includes(segments[0]);
}

function getCurrentLocale(): string {
	const segments = page.url.pathname.split('/').filter(Boolean);
	return locales.includes(segments[0]) ? segments[0] : sourceLocale;
}

export function getPathWithoutLocale(pathname: string): string {
	const segments = pathname.split('/').filter(Boolean);
	if (segments[0] && locales.includes(segments[0])) {
		return '/' + segments.slice(1).join('/') || '/';
	}
	return pathname;
}

export function localizedResolve(path: Pathname): ResolvedPathname {
	// Pass through edge cases unchanged
	if (isExternalUrl(path) || isAnchorOnly(path) || hasLocalePrefix(path)) {
		return resolve(path);
	}

	const currentLocale = getCurrentLocale();

	// Default locale (German) - no prefix
	if (currentLocale === sourceLocale) {
		return resolve(path);
	}

	// Non-default locale - add prefix
	const normalizedPath = path.startsWith('/') ? path : `/${path}`;
	return resolve(`/${currentLocale}${normalizedPath}` as Pathname);
}
