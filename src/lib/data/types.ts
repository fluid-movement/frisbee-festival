import type { DivisionKey } from './divisions';

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

/**
 * A single placement.
 *
 * Authoring shorthand: a plain string means "next place in order", so a normal
 * podium can be written as `["A", "B", "C"]`. Use the object form when the rank
 * is not simply the position — shared places repeat the same `place` number.
 */
export interface ResultPlacement {
	name: string;
	/** Explicit rank; defaults to the position in the array. Repeat it for a tie. */
	place?: number;
	/** Rank was decided in a playoff ("nach Stechen") */
	playoff?: boolean;
}

/** Normalised placement — `place` resolved, ties flagged */
export interface ResolvedPlacement {
	name: string;
	place: number;
	playoff: boolean;
	/** Another placement in the same division holds this rank */
	shared: boolean;
}

/**
 * Podium of a single division.
 *
 * Note: the names live in `src/lib/data/results.json` and are therefore NOT
 * translated by Wuchale — that is correct, they are proper nouns. The division
 * label is the exception and comes from `divisions.ts` via `division`.
 */
export interface ResultDivision {
	/** Stable URL anchor, unique across the whole results page */
	id: string;
	/** Key into `getDivisionLabels()` in `$lib/data/divisions` */
	division: DivisionKey;
	/** Bare filename inside src/lib/assets/ergebnisse/ — optional */
	photo?: string;
	/** Placements in finishing order */
	podium: (string | ResultPlacement)[];
}

/**
 * All divisions of one discipline
 */
export interface DisciplineResults {
	discipline: DisciplineId;
	divisions: ResultDivision[];
}

/**
 * Root shape of results.json
 */
export interface ResultsData {
	disciplines: DisciplineResults[];
}
