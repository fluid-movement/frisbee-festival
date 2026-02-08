import type {
	DisciplineSchedule,
	DisciplineId,
	MergedScheduleData,
	MergedScheduleEvent
} from './types';

/**
 * Import schedule getter functions from TypeScript files
 * These functions return schedule objects with strings that Wuchale extracts
 */
import { getFreestyleSchedule } from './schedules/freestyle';
import { getUltimateSchedule } from './schedules/ultimate';
import { getDiscGolfSchedule } from './schedules/disc-golf';
import { getDDCSchedule } from './schedules/double-disc-court';
import { getWheelchairUltimateSchedule } from './schedules/wheelchair-ultimate';

// Store getter references — called lazily so Wuchale catalogs are loaded first
const scheduleGetters: Record<DisciplineId, () => DisciplineSchedule> = {
	freestyle: getFreestyleSchedule,
	ultimate: getUltimateSchedule,
	'disc-golf': getDiscGolfSchedule,
	'double-disc-court': getDDCSchedule,
	'wheelchair-ultimate': getWheelchairUltimateSchedule
};

/**
 * Get schedule for a specific discipline
 */
export function getSchedule(discipline: DisciplineId): DisciplineSchedule {
	return scheduleGetters[discipline]();
}

/**
 * Get all available discipline schedules
 */
export function getAllSchedules(): DisciplineSchedule[] {
	return Object.values(scheduleGetters).map((fn) => fn());
}

/**
 * Merge all discipline schedules into a single schedule organized by day
 * Events from all disciplines are combined under each day and sorted chronologically
 */
export function mergeAllSchedules(): MergedScheduleData {
	const merged: MergedScheduleData = {};
	const days = ['Samstag', 'Sonntag'];

	for (const day of days) {
		const dayEvents: MergedScheduleEvent[] = [];

		for (const fn of Object.values(scheduleGetters)) {
			const disciplineSchedule = fn();
			const events = disciplineSchedule.schedule[day];
			if (events) {
				for (const event of events) {
					dayEvents.push({
						...event,
						discipline: disciplineSchedule.discipline,
						disciplineName: disciplineSchedule.name
					});
				}
			}
		}

		if (dayEvents.length > 0) {
			// Sort events by start time for chronological order
			dayEvents.sort((a, b) => {
				const timeA = a.time.split(' - ')[0];
				const timeB = b.time.split(' - ')[0];
				return timeA.localeCompare(timeB);
			});
			merged[day] = dayEvents;
		}
	}

	return merged;
}

/**
 * Get available discipline IDs
 */
export function getDisciplineIds(): DisciplineId[] {
	return Object.keys(scheduleGetters) as DisciplineId[];
}
