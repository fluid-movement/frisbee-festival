import type { DisciplineSchedule } from '../types';

/**
 * Double Disc Court discipline schedule
 * CRITICAL: Must be a function for Wuchale to extract strings!
 * Wuchale's heuristic only extracts strings inside functions.
 */
export const getDDCSchedule = (): DisciplineSchedule => ({
	discipline: 'double-disc-court',
	name: 'Double Disc Court',
	defaultPlace: 'Feld B',
	schedule: {
		Samstag: [
			{
				time: '10:00 - 10:30',
				label: 'Warmup / Players Meeting',
				type: 'tournament'
			},
			{
				time: '10:30 - 11:00',
				label: '1. Runde',
				type: 'tournament'
			},
			{
				time: '11:00 - 11:30',
				label: '2. Runde',
				type: 'tournament'
			},
			{
				time: '11:30 - 12:00',
				label: '3. Runde',
				type: 'tournament'
			},
			{
				time: '12:00 - 12:30',
				label: '4. Runde',
				type: 'tournament'
			},
			{
				time: '12:30 - 13:00',
				label: '5. Runde',
				type: 'tournament'
			},
			{
				time: '13:00 - 13:30',
				label: '6. Runde',
				type: 'tournament'
			},
			{
				time: '13:30 - 14:00',
				label: '7. Runde',
				type: 'tournament'
			},
			{
				time: '14:00 - 14:30',
				label: '8. Runde',
				type: 'tournament'
			},
			{
				time: '14:30 - 15:00',
				label: '9. Runde',
				type: 'tournament'
			},
			{
				time: '15:00 - 15:30',
				label: '10. Runde',
				type: 'tournament'
			},
			{
				time: '15:30 - 16:00',
				label: 'Freies Spiel',
				description:
					'Freies Spiel für alle. Hier könnt Ihr das Spiel auch lernen, wenn Ihr neu dabei seid. Es gibt keine festen Teams, sondern es wird einfach drauf los gespielt.',
				type: 'workshop',
				id: 'ddc-freies-spiel-samstag'
			}
		],
		Sonntag: [
			{
				time: '10:00 - 10:30',
				label: 'Warmup',
				type: 'tournament'
			},
			{
				time: '10:30 - 11:00',
				label: '1. Runde',
				type: 'tournament'
			},
			{
				time: '11:00 - 11:30',
				label: '2. Runde',
				type: 'tournament'
			},
			{
				time: '11:30 - 12:00',
				label: '3. Runde',
				type: 'tournament'
			},
			{
				time: '12:00 - 12:30',
				label: '4. Runde',
				type: 'tournament'
			},
			{
				time: '12:30 - 13:00',
				label: '5. Runde',
				type: 'tournament'
			},
			{
				time: '13:00 - 13:30',
				label: '6. Runde',
				type: 'tournament'
			},
			{
				time: '13:30 - 14:00',
				label: 'Semifinale 1 & 2',
				type: 'tournament'
			},
			{
				time: '14:15 - 14:45',
				label: 'Match um dritten Platz',
				type: 'tournament'
      },
      {
				time: '15:00 - 15:30',
				label: 'Finale',
				type: 'tournament'
      },
      {
				time: '15:30 - 16:00',
				label: 'Freies Spiel',
				description:
					'Freies Spiel für alle. Hier könnt Ihr das Spiel auch lernen, wenn Ihr neu dabei seid. Es gibt keine festen Teams, sondern es wird einfach drauf los gespielt.',
				type: 'workshop'
			}
		]
	}
});
