import type {
	DisciplineResults,
	DisciplineId,
	ResolvedPlacement,
	ResultDivision,
	ResultsData
} from './types';
import data from './results.json';

/**
 * Final standings of the festival, grouped by discipline.
 *
 * Unlike the schedules this is plain JSON and not a getter function: the content
 * is made up of team and player names, which are identical in every locale and
 * must therefore not go through Wuchale extraction. The one translatable field,
 * the division label, is keyed into `$lib/data/divisions`.
 */
export const results = data as ResultsData;

export function getResults(discipline: DisciplineId): DisciplineResults | undefined {
	return results.disciplines.find((d) => d.discipline === discipline);
}

/** Total number of divisions across all disciplines */
export function countDivisions(disciplines: DisciplineResults[]): number {
	return disciplines.reduce((n, d) => n + d.divisions.length, 0);
}

/**
 * Resolve the authoring shorthand into a uniform list: fill in implicit places
 * and mark ranks that more than one placement shares.
 */
export function resolvePodium(division: ResultDivision): ResolvedPlacement[] {
	const placements = division.podium.map((entry, i) =>
		typeof entry === 'string'
			? { name: entry, place: i + 1, playoff: false }
			: { name: entry.name, place: entry.place ?? i + 1, playoff: entry.playoff ?? false }
	);

	const counts = new Map<number, number>();
	for (const p of placements) {
		counts.set(p.place, (counts.get(p.place) ?? 0) + 1);
	}

	return placements.map((p) => ({ ...p, shared: (counts.get(p.place) ?? 0) > 1 }));
}
