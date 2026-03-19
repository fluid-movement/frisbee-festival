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
				time: '09:00 - 10:00',
				label: 'Putting Clinic',
				type: 'workshop',
				id: 'putting-clinic',
				description:
					'Lerne die Grundlagen des Disc Golf Puttens. Unsere erfahrenen Spieler zeigen dir Technik und Positionierung für präzise Putts aus kurzer und mittlerer Distanz.',
				image: discGolfPuttImage
			},
			{
				time: '10:00 - 13:00',
				label: '2. Runde – Amateur',
				type: 'tournament'
			},
			{
				time: '13:00 - 16:00',
				label: '2. Runde – Open',
				type: 'tournament'
			},
			{
				time: '16:00 - 17:00',
				label: 'Weite-Wurf Workshop',
				type: 'workshop',
				id: 'distance-driving-workshop',
				description:
					'Techniken zur Maximierung der Wurfweite. Unsere Profis zeigen dir, wie du mit der richtigen Technik mehr Distanz aus deinem Wurf herausholst.'
			}
		],
		Sonntag: [
			{
				time: '09:00 - 12:00',
				label: 'Finalrunde – Amateur',
				type: 'tournament'
			},
			{
				time: '12:00 - 15:00',
				label: 'Finalrunde – Open',
				type: 'tournament'
			},
			{
				time: '15:00 - 16:00',
				label: 'Siegerehrung',
				type: 'tournament'
			}
		]
	}
});
