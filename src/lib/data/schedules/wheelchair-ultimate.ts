import type { DisciplineSchedule } from '../types';
import wheelchairWorkshopImage from '$lib/assets/wheelchair-ultimate/rollstuhl-frisbee.jpg';

/**
 * Wheelchair Ultimate discipline schedule
 * CRITICAL: Must be a function for Wuchale to extract strings!
 * Wuchale's heuristic only extracts strings inside functions.
 */
export const getWheelchairUltimateSchedule = (): DisciplineSchedule => ({
	discipline: 'wheelchair-ultimate',
	name: 'Wheelchair Ultimate',
	defaultPlace: 'Feld A',
	schedule: {
		Samstag: [
			{
				time: '10:00 - 11:00',
				label: 'Demo Spiel',
				type: 'exhibition',
				description: 'Ein spannendes Spiel zwischen zwei Teams, um die Fähigkeiten und den Spaß am Rollstuhl Ultimate zu zeigen.'
      },
			{
			time: '11:00 - 15:00',
			label: 'Workshop für alle',
			description: 'Lerne die Grundlagen des Rollstuhl Ultimate, einschließlich Wurftechniken, Bewegungsstrategien und Teamplay. Alle sind willkommen, egal ob mit oder ohne Behinderung.',
			type: 'workshop',
			id: 'wheelchair-workshop',
			image: wheelchairWorkshopImage
		},
		{
			time: '15:30 - 17:00',
			label: 'Offenes Spiel für alle',
			description: 'Nach dem Workshop können alle TeilnehmerInnen das Gelernte in einem offenen Spiel anwenden.',
			type: 'workshop',
			id: 'wheelchair-open-play'
		}
		],
		Sonntag: []
	}
});
