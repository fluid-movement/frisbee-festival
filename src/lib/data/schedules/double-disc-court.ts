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
				time: '10:30 - 12:00',
				label: 'Vorrunde Block 1',
				type: 'tournament',
				description:
					'Gespielt wird in zwei Gruppen "Round robin", wobei die stärkeren Teams in den vorderen Feldern zu sehen sein werden.'
			},
			{
				time: '12:00 - 13:00',
				label: 'Regelkunde',
				type: 'workshop',
				description:
					'Lernt die Besonderheiten der DDC-Würfe kennen und das Feld treffen und natürlich auch die Regeln, damit ihr dem Spiel besser folgen könnt. Erlebt, wie komplex es ist, gleichzeitig zu kommunizieren und zu agieren indem ihr die ankommenden Scheiben anzählt und beim Werfen eurem Partner signalisiert, dass eure Scheibe wieder in der Luft ist, damit er nun wiederum seine Scheibe fangen kann.'
			},
			{
				time: '13:00 - 16:00',
				label: 'Vorrunde Block 2',
				type: 'tournament',
				description: 'Fortsetzung der "Round Robin" Phase'
			}
		],
		Sonntag: [
			{
				time: '10:30 - 13:30',
				label: 'Poolphase',
				type: 'tournament',
				description:
					'Aufteilung der Gruppen in Pools nach Leistung und Ausspielen der unteren Platzierungen.'
			},
			{
				time: '13:30 - 14:15',
				label: 'Semifinale 1 & 2',
				type: 'tournament',
				description: 'Spiele der Top 4, endlich entscheidet sich, wer ins Finale einzieht'
			},
			{
				time: '14:15 - 15:00',
				label: 'Match um 3. Platz',
				type: 'tournament',
				description:
					'Der Kampf um den Bronzepokal und natürlich geht es auch weiterhin um die begehrten Punkte für die Weltrangliste'
			},
			{
				time: '15:00 - 16:00',
				label: 'Finale',
				type: 'tournament',
				description:
					'Die Krönung des Turniers - alle Teilnehmer schauen gespannt zu, wer dieses Jahr das Rennen macht.'
			},
			{
				time: '16:00 - 19:00',
				label: 'Freies Spiel',
				type: 'workshop',
				description:
					'Nach der Siegerehrung findet nochmal ein Freies Spiel für alle statt. Zum Ausklang könnt Ihr das Spiel auch lernen, wenn Ihr neu dabei seid. Es gibt keine festen Teams, sondern es wird einfach drauf los gespielt.'
			}
		]
	}
});
