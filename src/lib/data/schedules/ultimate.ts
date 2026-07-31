import type { DisciplineSchedule } from '../types';
import workshopImage from '$lib/assets/ultimate/workshop.jpg';

/**
 * Ultimate discipline schedule
 * CRITICAL: Must be a function for Wuchale to extract strings!
 * Wuchale's heuristic only extracts strings inside functions.
 */
export const getUltimateSchedule = (): DisciplineSchedule => ({
	discipline: 'ultimate',
	name: 'Ultimate',
	defaultPlace: 'Feld Süd',
	schedule: {
		Samstag: [],
		Sonntag: [
			{
				time: '09:00 - 09:45',
				label: 'Warmup',
				description:
					'Treffen auf dem Kunstrasen, dann individuelles Aufwärmen, um bereit für die Spiele zu sein und das Verletzungsrisiko zu mindern.',
				place: 'Feld Süd',
				type: 'tournament'
			},
			{
				time: '10:00 - 10:25',
				label: 'Lech Layouts – Isar Insides',
				place: 'Feld Süd',
				type: 'tournament'
			},
			{
				time: '10:00 - 10:25',
				label: 'Main Markers – Wörthsee Wings',
				place: 'Feld Nord',
				type: 'tournament'
			},
			{
				time: '10:30 - 10:55',
				label: 'Chiemsee Cutters – Donau Discs',
				place: 'Feld Süd',
				type: 'tournament'
			},
			{
				time: '11:00 - 11:25',
				label: 'Lech Layouts – Chiemsee Cutters',
				place: 'Feld Süd',
				type: 'tournament'
			},
			{
				time: '11:00 - 11:25',
				label: 'Isar Insides – Donau Discs',
				place: 'Feld Nord',
				type: 'tournament'
			},
			{
				time: '11:30 - 11:55',
				label: 'Isar Insides – Wörthsee Wings',
				place: 'Feld Süd',
				type: 'tournament'
			},
			{
				time: '11:30 - 11:55',
				label: 'Lech Layouts – Main Markers',
				place: 'Feld Nord',
				type: 'tournament'
			},
			{
				time: '12:00 - 12:25',
				label: 'Chiemsee Cutters – Main Markers',
				place: 'Feld Süd',
				type: 'tournament'
			},
			{
				time: '12:00 - 12:25',
				label: 'Donau Discs – Wörthsee Wings',
				place: 'Feld Nord',
				type: 'tournament'
			},
			{
				time: '12:30 - 12:55',
				label: 'Lech Layouts – Donau Discs',
				place: 'Feld Süd',
				type: 'tournament'
			},
			{
				time: '12:30 - 12:55',
				label: 'Isar Insides – Chiemsee Cutters',
				place: 'Feld Nord',
				type: 'tournament'
			},
			{
				time: '13:00 - 14:25',
				label: 'Workshop Ultimate Frisbee',
				description:
					'Parallel zu den ersten Finalspielen auf SF Süd findet auf dem SF Nord ein Mitmachangebot statt: ein Workshop für alle Interessierten an Ultimate Frisbee. Ihr braucht nur einigermaßen sportliche Kleidung und Turnschuhe.',
				place: 'Feld Nord',
				type: 'workshop',
				id: 'ultimate-workshop',
				image: workshopImage
			},
			{
				time: '13:00 - 13:25',
				label: 'Isar Insides – Main Markers',
				place: 'Feld Süd',
				type: 'tournament'
			},
			{
				time: '13:00 - 13:25',
				label: 'Lech Layouts – Wörthsee Wings',
				place: 'Feld Nord',
				type: 'tournament'
			},
			{
				time: '13:30 - 13:55',
				label: 'Chiemsee Cutters – Wörthsee Wings',
				place: 'Feld Süd',
				type: 'tournament'
			},
			{
				time: '13:30 - 13:55',
				label: 'Donau Discs – Main Markers',
				place: 'Feld Nord',
				type: 'tournament'
			},
			{
				time: '14:00 - 14:25',
				label: 'Spiel um Platz 5',
				description: 'Platz 6 gegen Platz 5 der Gruppenphase',
				place: 'Feld Süd',
				type: 'tournament'
			},
			{
				time: '14:00 - 14:25',
				label: 'Spiel um Platz 3',
				description: 'Platz 4 gegen Platz 3 der Gruppenphase',
				place: 'Feld Nord',
				type: 'tournament'
			},
			{
				time: '14:30 - 14:55',
				label: 'Finale - Spiel um Platz 1',
				description:
					'Der krönende Abschluss des Ultimate-Turniers: das Finale der beiden Erstplatzierten der Gruppenphase findet auf Feld Süd des Kunstrasens vor hoffentlich vielen Zuschauern statt.',
				place: 'Feld Süd',
				type: 'tournament'
			},
			{
				time: '14:55 - 15:00',
				label: 'Siegerehrung',
				place: 'Feld Süd',
				type: 'tournament'
			}
		]
	}
});
