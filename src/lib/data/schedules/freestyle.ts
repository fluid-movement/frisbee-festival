import type { DisciplineSchedule } from '../types';

/**
 * Freestyle discipline schedule
 * CRITICAL: Must be a function for Wuchale to extract strings!
 * Wuchale's heuristic only extracts strings inside functions.
 */
export const getFreestyleSchedule = (): DisciplineSchedule => ({
	discipline: 'freestyle',
	name: 'Freestyle',
	schedule: {
		Samstag: [
			{
				time: '10:00 - 11:00',
				label: 'Introduction',
				type: 'tournament'
			},
			{
				time: '11:00 - 12:00',
				label: 'Open Pairs',
				type: 'tournament'
			},
			{
				time: '12:00 - 13:00',
				label: 'Mixed Pairs',
				type: 'tournament'
			},
			{
				time: '13:00 - 14:00',
				label: 'Delay Basics',
				type: 'workshop'
			},
			{
				time: '14:00 - 15:00',
				label: 'Coop',
				type: 'tournament'
			},
			{
				time: '15:00 - 17:00',
				label: 'Wurf Workshop für alle',
				type: 'workshop'
			},
			{
				time: '17:00 - 18:00',
				label: 'Woman Pairs',
				type: 'tournament'
			}
		],
		Sonntag: [
			{
				time: '10:00 - 11:00',
				label: 'Introduction',
				type: 'tournament'
			},
			{
				time: '11:00 - 12:00',
				label: 'Open Pairs',
				type: 'tournament'
			},
			{
				time: '12:00 - 13:00',
				label: 'Mixed Pairs',
				type: 'tournament'
			},
			{
				time: '13:00 - 14:00',
				label: 'Delay Basics',
				type: 'workshop'
			},
			{
				time: '14:00 - 15:00',
				label: 'Coop',
				type: 'tournament'
			},
			{
				time: '15:00 - 17:00',
				label: 'Wurf Workshop für alle',
				type: 'workshop'
			},
			{
				time: '17:00 - 18:00',
				label: 'Woman Pairs',
				type: 'tournament'
			}
		]
	}
});
