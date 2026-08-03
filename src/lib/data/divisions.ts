/**
 * Division identifiers used as keys in results.json.
 *
 * The human-readable labels are NOT here: several of them are German ("Damen",
 * "Junioren 18") and need translating, so they live in the `labels` map inside
 * `$lib/components/results/PodiumCard.svelte`. Wuchale's Svelte adapter picks
 * strings out of components automatically, which keeps them out of the `js`
 * adapter's file globs in wuchale.config.js. Same pattern as the discipline
 * labels in ScheduleLegend.svelte / DisciplineBadge.svelte.
 */
export const DIVISION_KEYS = [
	'open',
	'women',
	'mixed',
	'coop',
	'junior-18',
	'master-40',
	'master-50',
	'master-60',
	'women-master-40',
	'women-master-50'
] as const;

export type DivisionKey = (typeof DIVISION_KEYS)[number];
