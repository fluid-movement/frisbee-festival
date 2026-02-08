import type { DisciplineSchedule } from '../types';

/**
 * Wheelchair Ultimate discipline schedule
 * CRITICAL: Must be a function for Wuchale to extract strings!
 * Wuchale's heuristic only extracts strings inside functions.
 */
export const getWheelchairUltimateSchedule = (): DisciplineSchedule => ({
	discipline: 'wheelchair-ultimate',
	name: 'Wheelchair Ultimate',
	schedule: {
		Samstag: [
			{
				time: '09:00 - 10:00',
				label: 'Anmeldung und Einführung',
				type: 'tournament',
				description: 'Begrüßung und Einführung in die Regeln des Rollstuhl-Ultimate'
			},
			{
				time: '10:00 - 12:00',
				label: 'Vorrundenspiele Runde 1',
				type: 'tournament'
			},
			{
				time: '12:00 - 13:00',
				label: 'Mittagspause',
				type: 'tournament'
			},
			{
				time: '13:00 - 15:00',
				label: 'Vorrundenspiele Runde 2',
				type: 'tournament'
			},
			{
				time: '15:00 - 16:00',
				label: 'Technik-Workshop',
				type: 'workshop',
				description: 'Wurftechniken und Rollstuhlmanöver für Anfänger'
			},
			{
				time: '16:00 - 17:00',
				label: 'Freies Spiel',
				type: 'tournament'
			}
		],
		Sonntag: [
			{
				time: '09:00 - 10:00',
				label: 'Aufwärmspiele',
				type: 'tournament'
			},
			{
				time: '10:00 - 12:00',
				label: 'Halbfinale',
				type: 'tournament'
			},
			{
				time: '12:00 - 13:00',
				label: 'Mittagspause',
				type: 'tournament'
			},
			{
				time: '13:00 - 14:00',
				label: 'Spiel um Platz 3',
				type: 'tournament'
			},
			{
				time: '14:00 - 15:00',
				label: 'Finale',
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
