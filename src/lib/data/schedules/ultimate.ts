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
	defaultPlace: 'Feld A',
	schedule: {
		Samstag: [],
		Sonntag: [
			{
				time: '09:00 - 09:45',
				label: 'Warmup',
				description:
					'Treffen auf dem Kunstrasen, dann individuelles Aufwärmen, um bereit für die Spiele zu sein und das Verletzungsrisiko zu mindern.',
				type: 'tournament'
			},
			{
				time: '10:00 - 10:25',
				label: 'Lech Layouts – Isar Insides + Main Markers – Wörthsee Wings',
				description:
					'Feld Süd: Lech Layouts – Isar Insides / Feld Nord: Main Markers – Wörthsee Wings',
				type: 'tournament'
			},
			{
				time: '10:30 - 10:55',
				label: 'Chiemsee Cutters – Donau Discs',
				description: 'Feld Süd: Chiemsee Cutters – Donau Discs',
				type: 'tournament'
			},
			{
				time: '11:00 - 11:25',
				label: 'Lech Layouts – Chiemsee Cutters + Isar Insides – Donau Discs',
				description:
					'Feld Süd: Lech Layouts – Chiemsee Cutters / Feld Nord: Isar Insides – Donau Discs',
				type: 'tournament'
			},
			{
				time: '11:30 - 11:55',
				label: 'Isar Insides – Wörthsee Wings + Lech Layouts – Main Markers',
				description:
					'Feld Süd: Isar Insides – Wörthsee Wings / Feld Nord: Lech Layouts – Main Markers',
				type: 'tournament'
			},
			{
				time: '12:00 - 12:25',
				label: 'Chiemsee Cutters – Main Markers + Donau Discs – Wörthsee Wings',
				description:
					'Feld Süd: Chiemsee Cutters – Main Markers / Feld Nord: Donau Discs – Wörthsee Wings',
				type: 'tournament'
			},
			{
				time: '12:30 - 12:55',
				label: 'Lech Layouts – Donau Discs + Isar Insides – Chiemsee Cutters',
				description:
					'Feld Süd: Lech Layouts – Donau Discs / Feld Nord: Isar Insides – Chiemsee Cutters',
				type: 'tournament'
			},
			{
				time: '13:00 - 14:25',
				label: 'Workshop Ultimate Frisbee',
				description:
					'Parallel zu den ersten Finalspielen auf SF Süd findet auf dem SF Nord ein Mitmachangebot statt: ein Workshop für alle Interessierten an Ultimate Frisbee. Ihr braucht nur einigermaßen sportliche Kleidung und Turnschuhe.',
				type: 'workshop',
				id: 'ultimate-workshop',
				image: workshopImage
			},
			{
				time: '13:00 - 13:25',
				label: 'Isar Insides – Main Markers + Lech Layouts – Wörthsee Wings',
				description:
					'Feld Süd: Isar Insides – Main Markers / Feld Nord: Lech Layouts – Wörthsee Wings',
				type: 'tournament'
			},
			{
				time: '13:30 - 13:55',
				label: 'Chiemsee Cutters – Wörthsee Wings + Donau Discs – Main Markers',
				description:
					'Feld Süd: Chiemsee Cutters – Wörthsee Wings / Feld Nord: Donau Discs – Main Markers',
				type: 'tournament'
			},
			{
				time: '14:00 - 14:25',
				label: 'Spiel um Platz 5 + Spiel um Platz 3',
				description:
					'Feld Süd: 6. gegen 5. der Gruppenphase / Feld Nord: 4. gegen 3. der Gruppenphase',
				type: 'tournament'
			},
			{
				time: '14:30 - 14:55',
				label: 'Finale - Spiel um Platz 1',
				description:
					'Der krönende Abschluss des Ultimate-Turniers: das Finale der beiden Erstplatzierten der Gruppenphase findet auf Feld Süd des Kunstrasens vor hoffentlich vielen Zuschauern statt.',
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
