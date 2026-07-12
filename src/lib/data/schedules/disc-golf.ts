import type { DisciplineSchedule } from '../types';
import discGolfPuttImage from '$lib/assets/disc-golf/putt.jpg';
import throwImage from '$lib/assets/disc-golf/distance.jpeg';

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
				time: '10:00 - 17:00',
				label: 'Disc Golf für alle – einfach ausprobieren!',
				type: 'workshop',
				description:
					'Auf unserem Putting-Discgolf-Parcours mit sechs abwechslungsreichen Bahnen kannst du die Faszination des Disc Golfs ganz unkompliziert kennenlernen. Unterschiedliche Würfe und kleine Herausforderungen sorgen für Spaß bei Groß und Klein – ganz ohne Vorkenntnisse. Der Parcours ist am Samstag und Sonntag durchgehend geöffnet und kann jederzeit ausprobiert werden. Leihscheibe und Einweisung am Discgolf Turnierbüro.',
				id: 'dg-for-all',
				image: throwImage
			},
			{
				time: '11:00 - 16:30',
				label: 'DiscMatch-Battle by WOD',
				type: 'workshop',
				description: 'Zeig wie gut deine Putting Skills sind - im Battle Eins gegen Eins',
				id: 'disc-match-battle',
				image: discGolfPuttImage
			},
			{
				time: '17:00 - 17:30',
				label: 'DiscMatch-Battle Finale by WOD',
				type: 'workshop',
				description: 'Die besten Putter und Putterinnen treten im Final gegeneinander an',
				id: 'disc-match-final',
				image: discGolfPuttImage
			},
			{
				time: '17:30 - 18:30',
				label: 'Liquid & Maniac',
				type: 'exhibition',
				description:
					'Das DiscMatch Finale wird musikalisch abgeschlossen mit feinstem boarisch Rap aus Regensburg'
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
				time: '10:00 - 15:00',
				label: 'Disc Golf für alle – einfach ausprobieren!',
				type: 'workshop',
				description:
					'Auf unserem Putting-Discgolf-Parcours mit sechs abwechslungsreichen Bahnen kannst du die Faszination des Disc Golfs ganz unkompliziert kennenlernen. Unterschiedliche Würfe und kleine Herausforderungen sorgen für Spaß bei Groß und Klein – ganz ohne Vorkenntnisse. Der Parcours ist am Samstag und Sonntag durchgehend geöffnet und kann jederzeit ausprobiert werden.',
				id: 'dg-putt',
				image: throwImage
			}
		]
	}
});
