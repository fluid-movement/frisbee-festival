import type { DisciplineSchedule } from '../types';

/**
 * Ultimate discipline schedule
 * CRITICAL: Must be a function for Wuchale to extract strings!
 * Wuchale's heuristic only extracts strings inside functions.
 */
export const getUltimateSchedule = (): DisciplineSchedule => ({
	discipline: 'ultimate',
	name: 'Ultimate',
	defaultPlace: 'Field A',
	schedule: {
		Samstag: [
			{
				time: '09:00 - 11:00',
				label: 'Pool Play Round 3',
				type: 'tournament'
			},
			{
				time: '11:00 - 13:00',
				label: 'Pool Play Round 4',
				type: 'tournament'
			},
			{
				time: '13:00 - 15:00',
				label: 'Quarterfinals',
				type: 'tournament'
			},
			{
				time: '15:00 - 17:00',
				label: 'Defense Strategies Workshop',
				type: 'workshop',
				description: 'Advanced defensive positioning and marking techniques'
			}
		],
		Sonntag: [
			{
				time: '09:00 - 11:00',
				label: 'Semifinals',
				type: 'tournament'
			},
			{
				time: '11:00 - 12:00',
				label: '3rd Place Game',
				type: 'tournament'
			},
			{
				time: '12:00 - 13:00',
				label: 'Finals',
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
