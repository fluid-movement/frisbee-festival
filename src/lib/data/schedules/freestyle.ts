import type { DisciplineSchedule } from '../types';
import freestyleWorkshopImage from '$lib/assets/freestyle/coop.jpg';

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
				time: '10:00 - 11:00',
        label: 'Semi Finale Mixed Pool 1',
        description: 'Bei Mixed Pairs bestehen die Teams aus einem Mann und einer Frau.',
				type: 'tournament'
			},
			{
				time: '11:30 - 12:30',
        label: 'Semi Finale Mixed Pool 1',
        description: 'Bei Mixed Pairs bestehen die Teams aus einem Mann und einer Frau.',
				type: 'tournament'
			},
			{
				time: '13:00 - 14:00',
				label: 'Freestyle Workshop',
				description: 'Wir bringen euch die Basics des Freestyle Frisbee bei. Alle sind willkommen, egal ob ihr bereits eine Frisbeesportart spielt, oder noch nie eine Scheibe in der Hand hattet.',
				type: 'workshop',
				id: 'freestyle-workshop',
				image: freestyleWorkshopImage
			},
      {
        time: '17:00 - 21:00',
        label: 'Freestyle Jam',
        description: '"Jammen" ist das freie Spiel beim Freestyle. Schauen sie den besten SpielerInnen der Welt zu, wie sie ihre kreativsten Tricks zeigen und sich gegenseitig inspirieren. Es gibt keine Regeln, nur Spaß und beeindruckende Scheibenakrobatik.',
        type: 'exhibition'
			}
		],
		Sonntag: [
			{
				time: '10:00 - 11:00',
        label: 'Finale Open Pairs',
				type: 'tournament'
			},
			{
				time: '11:30 - 12:30',
        label: 'Finale Women Pairs',
				type: 'tournament'
			},
			{
				time: '13:00 - 14:00',
				label: 'Junior Challenge powered by XDISC',
				type: 'workshop',
				id: 'junior-challenge'
			},
			{
				time: '14:00 - 15:00',
				label: 'Finale Mixed Pairs',
				type: 'tournament'
			},
			{
				time: '15:30 - 16:30',
				label: 'Finale Coop',
				type: 'tournament',
			},
			{
				time: '16:30 - 17:30',
        label: 'Freestyle Jam',
        description: '"Jammen" ist das freie Spiel beim Freestyle. Schauen sie den besten SpielerInnen der Welt zu, wie sie ihre kreativsten Tricks zeigen und sich gegenseitig inspirieren. Es gibt keine Regeln, nur Spaß und beeindruckende Scheibenakrobatik.',
				type: 'tournament'
			},
			{
				time: '17:30 - 18:30',
				label: 'Siegerehrung',
				type: 'tournament'
			},
		]
	}
});
