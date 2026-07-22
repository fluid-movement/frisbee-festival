import type { DisciplineSchedule } from '../types';
import wheelchairWorkshopImage from '$lib/assets/wheelchair-ultimate/rollstuhl-frisbee.webp';
import gameImage from '$lib/assets/wheelchair-ultimate/wheelchair-ultimate.jpg';

/**
 * Wheelchair Ultimate discipline schedule
 * CRITICAL: Must be a function for Wuchale to extract strings!
 * Wuchale's heuristic only extracts strings inside functions.
 */
export const getWheelchairUltimateSchedule = (): DisciplineSchedule => ({
	discipline: 'wheelchair-ultimate',
	name: 'Wheelchair Ultimate',
	defaultPlace: 'Halle 1',
	schedule: {
		Samstag: [
			{
				time: '10:00 - 10:45',
				label: 'Showgame',
				type: 'exhibition',
				description:
					'Beim Exhibition-Match im Rollstuhl-Ultimate zeigen wir euch wie spannend und athletisch diese vom Teamgeist geprägte Sportart ist.'
			},
			{
				time: '11:00 - 15:15',
				label: 'Workshop für alle',
				description:
					'Lerne die Grundlagen des Rollstuhl Ultimate, einschließlich Wurftechniken, Bewegungsstrategien und Teamplay. Alle sind willkommen, egal ob mit oder ohne Beeinträchtigungen.',
				type: 'workshop',
				id: 'wheelchair-workshop',
				image: wheelchairWorkshopImage
			},
			{
				time: '15:30 - 17:00',
				label: 'Offenes Spiel für alle',
				description:
					'Nach dem Rollstuhl Ultimate Workshop können alle TeilnehmerInnen das Gelernte in einem offenen Spiel anwenden. Alle sind willkommen, egal ob mit oder ohne Beeinträchtigungen.',
				type: 'workshop',
        id: 'wheelchair-open-play',
				image: gameImage
			}
		],
		Sonntag: [
			{
				time: '09:00 - 13:00',
				label: 'Offenes Spiel für alle',
				description:
					'Auch am Sonntag laden wir alle Angereisten zum Rollstuhl Ultimate ein: In einem offenen Spiel für alle könnt ihr die Sportart ausprobieren und das Gelernte anwenden. Alle sind willkommen, egal ob mit oder ohne Beeinträchtigungen.',
				type: 'workshop',
				id: 'wheelchair-open-play-sunday',
				image: gameImage
			}
		]
	}
});
