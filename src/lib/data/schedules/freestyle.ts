import type { DisciplineSchedule } from '../types';
import freestyleWorkshopImage from '$lib/assets/freestyle/coop.jpg';
import xDiscImage from '$lib/assets/freestyle/xdisc.jpg';

/**
 * Freestyle discipline schedule
 * CRITICAL: Must be a function for Wuchale to extract strings!
 * Wuchale's heuristic only extracts strings inside functions.
 */
export const getFreestyleSchedule = (): DisciplineSchedule => ({
	discipline: 'freestyle',
	name: 'Freestyle',
	defaultPlace: 'Freestyle Feld',
	schedule: {
		Samstag: [
			{
				time: '10:00 - 12:30',
				label: 'Halbfinale Mixed Pairs',
				description:
					'In diesem Halbfinale kämpfen gemischte Duos (Mann und Frau) mit artistischen Choreografien um den Einzug ins Finale am Sonntag.',
				type: 'tournament'
			},
			{
				time: '13:00 - 14:00',
				label: 'Freestyle Workshop',
				description:
					'In diesem Workshop bringen wir euch die Basics des Freestyle Frisbee bei. Alle sind willkommen, egal ob ihr bereits eine Frisbeesportart spielt, oder noch nie eine Scheibe in der Hand hattet. Mindestalter: 8 Jahre.',
				type: 'workshop',
				id: 'freestyle-workshop',
				image: freestyleWorkshopImage
			},
			{
				time: '14:00 - 16:30',
        label: 'Halbfinale Open Coop',
        place: 'Halle 1',
				description:
					'Beim Halbfinale der Open Coop Kategorie demonstrieren Dreierteams ihr blindes Verständnis und ihre Geschicklichkeit an der Scheibe um ins Finale am Sonntag einzuziehen.',
				type: 'tournament'
			},
			{
				time: '17:00 - 21:00',
				label: 'Freestyle Jam',
				description:
					'"Jammen" ist das freie Spiel beim Freestyle. Schauen sie den besten SpielerInnen der Welt zu, wie sie ihre kreativsten Tricks zeigen und sich gegenseitig inspirieren. Es gibt keine Regeln, nur Spaß und beeindruckende Scheibenakrobatik.',
				type: 'exhibition'
			}
		],
		Sonntag: [
			{
				time: '10:00 - 11:00',
				label: 'Finale Open Pairs',
				description:
					'Im großen Finale der Open Pairs zeigen die besten Zweierteams ihre spektakulärsten Moves, um den begehrten Titel zu gewinnen.',
				type: 'tournament'
			},
			{
				time: '11:30 - 12:30',
				label: 'Finale Women Pairs',
				description: 'Das Finale der Frauen-Paare verspricht hochklassige Akrobatik im Kampf um die Weltmeisterschaft.',
				type: 'tournament'
			},
			{
				time: '13:00 - 14:00',
				label: 'Junior Challenge powered by XDISC',
				description:
					'Trau dich und zeige deine Frisbee-Tricks vor dem Publikum der Freestyle Frisbee Weltmeisterschaften und gewinne tolle Preise von unserem Sponsor XDISC.',
				type: 'workshop',
        id: 'junior-challenge',
				image: xDiscImage
			},
			{
				time: '14:00 - 15:00',
				label: 'Finale Mixed Pairs',
				description:
					'Im Finale der Mixed Pairs verbinden gemischte Paare Eleganz und Dynamik zu einer beeindruckenden sportlichen Darbietung.',
				type: 'tournament'
			},
			{
				time: '15:30 - 16:30',
				label: 'Finale Open Coop',
				description:
					'Die Teams der Open Coop Kategorie treten im Finale an, um durch perfektes Zusammenspiel und technische Brillanz zu überzeugen.',
				type: 'tournament'
			},
			{
				time: '16:30 - 17:30',
				label: 'Freestyle Jam',
				description:
					'"Jammen" ist das freie Spiel beim Freestyle. Schauen sie den besten SpielerInnen der Welt zu, wie sie ihre kreativsten Tricks zeigen und sich gegenseitig inspirieren. Es gibt keine Regeln, nur Spaß und beeindruckende Scheibenakrobatik.',
				type: 'exhibition'
			},
			{
				time: '17:30 - 18:30',
				label: 'Siegerehrung',
				description: 'Die feierliche Siegerehrung bildet den krönenden Abschluss des Festivals - hier werden die Weltmeister gekührt.',
				type: 'tournament'
			}
		]
	}
});
