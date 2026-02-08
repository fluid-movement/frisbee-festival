import type { DisciplineSchedule } from '../types';

/**
 * Disc Golf discipline schedule
 * CRITICAL: Must be a function for Wuchale to extract strings!
 * Wuchale's heuristic only extracts strings inside functions.
 */
export const getDiscGolfSchedule = (): DisciplineSchedule => ({
	discipline: 'disc-golf',
	name: 'Disc Golf',
	schedule: {
		Samstag: [
			{
				time: '09:00 - 10:00',
				label: 'Putting Clinic',
				type: 'workshop',
				description: 'Master the fundamentals of disc golf putting'
			},
			{
				time: '10:00 - 13:00',
				label: 'Round 2 - Amateur',
				type: 'tournament'
			},
			{
				time: '13:00 - 16:00',
				label: 'Round 2 - Open',
				type: 'tournament'
			},
			{
				time: '16:00 - 17:00',
				label: 'Distance Driving Workshop',
				type: 'workshop',
				description: 'Techniques for maximizing driving distance'
			}
		],
		Sonntag: [
			{
				time: '09:00 - 12:00',
				label: 'Final Round - Amateur',
				type: 'tournament'
			},
			{
				time: '12:00 - 15:00',
				label: 'Final Round - Open',
				type: 'tournament'
			},
			{
				time: '15:00 - 16:00',
				label: 'Awards Ceremony',
				type: 'tournament'
			}
		]
	}
});
