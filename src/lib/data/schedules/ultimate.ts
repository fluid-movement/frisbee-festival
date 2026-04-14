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
				time: '9:00 - 9:45',
				label: 'Warmup',
				description:
					'Treffen auf dem Kunstrasen, dann individuelles Aufwärmen, um bereit für die Spiele zu sein und das Verletzungsrisiko zu mindern.',
				type: 'tournament'
			},
			{
				time: '9:45 - 10:00',
				label: 'Teamzuweisung',
				description:
					'Die angemeldeten SpielerInnen werden vom Veranstalter in Teams eingeteilt. Die Teammitglieder lernen sich kennen und definieren Spielstrategien für Offense und Defense',
				type: 'tournament'
			},
			{
				time: '10:00 - 10:25',
				label: 'Gruppe A: 1-3 + 2-4',
				description: 'Gruppe A: Spielfeld Süd - Team 1 vs 3 /  Spielfeld Nord - Team 2 vs 4',
				type: 'tournament'
			},
			{
				time: '10:30 - 10:55',
				label: 'Gruppe B: 4-7 + 5-8',
				description: 'Gruppe B: Spielfeld Süd - Team 4 vs 7 /  Spielfeld Nord - Team 5 vs 8',
				type: 'tournament'
			},
			{
				time: '11:00 - 11:25',
				label: 'Gruppe A: 3-2 + 4-1',
				description: 'Gruppe A: SF Süd - Team 3 vs 2 /  Spielfeld Nord - Team 4 vs 1',
				type: 'tournament'
			},
			{
				time: '11:30 - 11:55',
				label: 'Gruppe B: 7-6 + 8-5',
				description: 'Gruppe B: SF Süd - Team 7 vs 6 /  Spielfeld Nord - Team 8 vs 5',
				type: 'tournament'
			},
			{
				time: '12:00 - 12:25',
				label: 'Gruppe A: 1-2 + 3-4',
				description: 'Gruppe A: SF Süd - Team 1 vs 2 /  Spielfeld Nord - Team 3 vs 4',
				type: 'tournament'
			},
			{
				time: '12:30 - 12:55',
				label: 'Gruppe B: 5-6 + 7-8',
				description: 'Gruppe B: SF Süd - Team 5 vs 6 /  Spielfeld Nord - Team 7 vs 8',
				type: 'tournament'
			},
			{
				time: '13:00 - 14:25',
				label: 'Workshop Ultimate Frisbee',
				description:
					'Parallel zu den ersten Finalspielen auf SF Süd findet auf dem SF Nord ein Mitmachangebot statt: ein Workshop für alle Interessierten an Ultimate Frisbee. Ihr braucht nur einigermaßen sportliche Kleidung und Turnschuhe.',
				type: 'workshop'
			},
			{
				time: '13:00 - 13:25',
				label: 'Spiel um Platz 7',
				description: 'SF Süd: Finalspiel um Platz 7',
				type: 'tournament'
			},
			{
				time: '13:30 - 13:55',
				label: 'Spiel um Platz 5',
				description: 'SF Süd: Finalspiel um Platz 5',
				type: 'tournament'
			},
			{
				time: '14:00 - 14:25',
				label: 'Spiel um Platz 3',
				description: 'SF Süd: Finalspiel um Platz 3',
				type: 'tournament'
			},
			{
				time: '14:30 - 14:55',
				label: 'Finale - Spiel um Platz 1',
				description:
					'Der krönende Abschluss des Ultimate-Turniers: das Finale der beiden Gruppensieger findet auf Feld Süd des Kunstrasens vor hoffentlich vielen Zuschauern statt.',
				type: 'tournament'
			},
			{
				time: '14:55 - 15:00',
				label: 'Siegerehrung',
				type: 'tournament'
			}
		]
	}
});
