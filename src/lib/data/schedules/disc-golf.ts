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
        time: '10:00 - 12:00',
        place: 'Sponsors & Food Trucks Area',
				label: '1. WOD | DiscMatch Meisterschaft',
				type: 'workshop',
				description: 'Taucht ein, in die Welt einer neuen Frisbeesport-Disziplin! DiscMatch ist ein Frisbee Duell, das Treffsicherheit mit Geschwindigkeit vereint. Triff Deine Würfe vor Deinem Gegenspieler und werde 1. WOD | DiscMatch Champion 🏆Hauptpreis: Eine Nacht für zwei Personen in der Bierhimmel-Suite des 1. Bier- und Wohlfühlhotels Gut Riedelsbach.',
				id: 'disc-match-battle-1',
				image: discGolfPuttImage
			},
			{
        time: '13:00 - 15:00',
        place: 'Sponsors & Food Trucks Area',
				label: '1. WOD | DiscMatch Meisterschaft',
				type: 'workshop',
				description: 'Taucht ein, in die Welt einer neuen Frisbeesport-Disziplin! DiscMatch ist ein Frisbee Duell, das Treffsicherheit mit Geschwindigkeit vereint. Triff Deine Würfe vor Deinem Gegenspieler und werde 1. WOD | DiscMatch Champion 🏆Hauptpreis: Eine Nacht für zwei Personen in der Bierhimmel-Suite des 1. Bier- und Wohlfühlhotels Gut Riedelsbach.',
				id: 'disc-match-battle-2',
				image: discGolfPuttImage
			},
			{
				time: '17:00 - 17:30',
        place: 'Sponsors & Food Trucks Area',
				label: '1. WOD | DiscMatch Meisterschaft - Finale ',
				type: 'workshop',
				description: 'Die besten Putter und Putterinnen treten im Final gegeneinander an.Hauptpreis: Eine Nacht für zwei Personen in der Bierhimmel-Suite des 1. Bier- und Wohlfühlhotels Gut Riedelsbach. Gleich nach der Siegerehrung geht es mit dem Bayerischen Rapper Duo Liquid & Maniac ins Live Konzert. Seid dabei und feiert mit!',
				id: 'disc-match-final',
				image: discGolfPuttImage
			},
			{
				time: '17:30 - 18:30',
        place: 'Sponsors & Food Trucks Area',
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
