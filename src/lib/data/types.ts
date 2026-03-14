/**
 * Event type discriminator for styling and filtering
 */
export const EVENT_TYPES = ['tournament', 'workshop', 'exhibition'] as const;
export type EventType = (typeof EVENT_TYPES)[number];

/**
 * Day name in German (source keys in schedule data)
 */
export const DAY_NAMES = ['Samstag', 'Sonntag'] as const;
export type DayName = (typeof DAY_NAMES)[number];

/**
 * Discipline identifier matching route structure
 */
export const DISCIPLINE_IDS = [
	'ultimate',
	'wheelchair-ultimate',
	'disc-golf',
	'freestyle',
	'double-disc-court'
] as const;
export type DisciplineId = (typeof DISCIPLINE_IDS)[number];

/**
 * Individual schedule event entry
 */
export interface ScheduleEvent {
	/** Time range in format "HH:MM - HH:MM" */
	time: string;
  label: string;
	/** Event type discriminator for styling and filtering */
	type: EventType;
	description?: string;
	/** Overrides the discipline's default place */
	place?: string;
	/** Stable URL anchor for the participate page — required for workshop events */
	id?: string;
	/** Image shown on the participate page card */
	image?: string;
}

/**
 * Schedule data structure: days mapped to event arrays
 */
export type ScheduleData = Record<string, ScheduleEvent[]>;

/**
 * Complete schedule file structure with metadata
 */
export interface DisciplineSchedule {
	discipline: DisciplineId;
	name: string;
	defaultPlace: string;
	schedule: ScheduleData;
}

/**
 * Merged schedule event for combined view
 */
export interface MergedScheduleEvent extends ScheduleEvent {
	discipline: DisciplineId;
	disciplineName: string;
	place: string;
}

/**
 * Merged schedule organized by day, containing events from all disciplines
 */
export type MergedScheduleData = Record<string, MergedScheduleEvent[]>;
