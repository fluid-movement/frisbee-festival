import type { DisciplineSchedule } from '../types';

/**
 * Ultimate discipline schedule
 * CRITICAL: Must be a function for Wuchale to extract strings!
 * Wuchale's heuristic only extracts strings inside functions.
 */
export const getUltimateSchedule = (): DisciplineSchedule => ({
	discipline: 'ultimate',
	name: 'Ultimate',
	defaultPlace: 'Feld A',
	schedule: {
		Samstag: [],
		Sonntag: [
			{
				time: '09:00 - 09:30',
				label: 'Warmup',
				type: 'tournament'
			},
			{
				time: '09:30 - 10:00',
				label: 'Teamzuweisung',
				type: 'tournament'
			},
			{
				time: '10:00 - 14:00',
				label: 'Hut Turnier',
				type: 'tournament'
			},
			{
				time: '14:30 - 15:00',
				label: 'Finale',
				type: 'tournament'
			},
			{
				time: '15:00 - 15:30',
				label: 'Siegerehrung',
				type: 'tournament'
			}
		]
	}
});
