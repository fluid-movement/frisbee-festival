import type { DisciplineSchedule } from '../types';

/**
 * Double Disc Court discipline schedule
 * CRITICAL: Must be a function for Wuchale to extract strings!
 * Wuchale's heuristic only extracts strings inside functions.
 */
export const getDDCSchedule = (): DisciplineSchedule => ({
	discipline: 'double-disc-court',
	name: 'Double Disc Court',
	schedule: {
		Samstag: [
			{
				time: '09:00 - 10:00',
				label: 'Advanced Strategies Workshop',
				type: 'workshop',
				description: 'Tactics and positioning for competitive DDC'
			},
			{
				time: '10:00 - 12:00',
				label: 'Singles Tournament - Round 1',
				type: 'tournament'
			},
			{
				time: '12:00 - 14:00',
				label: 'Singles Tournament - Round 2',
				type: 'tournament'
			},
			{
				time: '14:00 - 16:00',
				label: 'Doubles Tournament - Semifinals',
				type: 'tournament'
			},
			{
				time: '16:00 - 17:00',
				label: 'Doubles Tournament - Finals',
				type: 'tournament'
			}
		],
		Sonntag: [
			{
				time: '09:00 - 11:00',
				label: 'Singles Tournament - Semifinals',
				type: 'tournament'
			},
			{
				time: '11:00 - 12:00',
				label: 'Singles Tournament - 3rd Place',
				type: 'tournament'
			},
			{
				time: '12:00 - 13:00',
				label: 'Singles Tournament - Finals',
				type: 'tournament'
			},
			{
				time: '13:00 - 14:00',
				label: 'Awards Ceremony',
				type: 'tournament'
			}
		]
	}
});
