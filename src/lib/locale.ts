import { page } from '$app/state';
import { locales } from '../locales/data.js';

export function getLocaleForUrl(): string {
  const segments = page.url.pathname.split('/').filter(Boolean);
	return locales.includes(segments[0]) ? segments[0] : ''; // de should return empty string
}