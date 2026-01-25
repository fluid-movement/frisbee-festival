import type { ParamMatcher } from '@sveltejs/kit';
import { locales } from '../locales/data.js';

export const match = ((param: string) => {
  return locales.includes(param)
}) satisfies ParamMatcher;
