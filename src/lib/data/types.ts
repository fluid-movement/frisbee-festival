/**
 * Event type discriminator for styling and filtering
 */
export type EventType = 'tournament' | 'workshop' | 'exhibition';

/**
 * Day name in German (source keys in schedule data)
 */
export type DayName = 'Samstag' | 'Sonntag';

/**
 * Individual schedule event entry
 */
export interface ScheduleEvent {
	/** Time range in format "HH:MM - HH:MM" */
	time: string;
	label: string;
	type: EventType;
	description?: string;
}

/**
 * Schedule data structure: days mapped to event arrays
 */
export type ScheduleData = Record<string, ScheduleEvent[]>;

/**
 * Discipline identifier matching route structure
 */
export type DisciplineId =
	| 'freestyle'
	| 'ultimate'
	| 'disc-golf'
	| 'double-disc-court'
	| 'wheelchair-ultimate';

/**
 * Complete schedule file structure with metadata
 */
export interface DisciplineSchedule {
	/** Discipline identifier */
	discipline: DisciplineId;
	/** Display name (will be extracted for translation) */
	name: string;
	/** Schedule data organized by day */
	schedule: ScheduleData;
}

/**
 * Merged schedule event for combined view
 * Used when showing all disciplines on one page
 */
export interface MergedScheduleEvent extends ScheduleEvent {
	/** Source discipline for this event */
	discipline: DisciplineId;
	/** Discipline display name */
	disciplineName: string;
}

/**
 * Merged schedule organized by day, containing events from all disciplines
 */
export type MergedScheduleData = Record<string, MergedScheduleEvent[]>;
