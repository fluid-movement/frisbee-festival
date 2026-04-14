import type { DisciplineSchedule } from '../types';
import discGolfPuttImage from '$lib/assets/disc-golf/putt.jpg';

/**
 * Disc Golf discipline schedule
 * CRITICAL: Must be a function for Wuchale to extract strings!
 * Wuchale's heuristic only extracts strings inside functions.
 */
export const getDiscGolfSchedule = (): DisciplineSchedule => ({
	discipline: 'disc-golf',
	name: 'Disc Golf',
	defaultPlace: 'Disc Golf Kurs',
	schedule: {
		Samstag: [
			{
				time: '08:30 - 18:00',
				label: '2. Runde Campustreffen',
				type: 'tournament',
				description: '2. Runde des Turniers, Golfstart, ca. alle 12 Minuten ein Flight'
			},
			{
				time: '16:00 - 17:00',
				label: 'Weitwurf-Workshop',
				type: 'workshop',
				id: 'dg-distance'
			}
		],
		Sonntag: [
			{
				time: '08:00 - 18:00',
				label: '3. Runde Campustreffen',
        type: 'tournament',
        description: '3. Runde des Turniers, Golfstart, ca. alle 10 Minuten ein Flight'
			},
			{
				time: '15:00 - 16:00',
				label: 'Putting Clinic',
        type: 'workshop',
        id: 'dg-putt',
        image: discGolfPuttImage,
			},
		]
	}
});
