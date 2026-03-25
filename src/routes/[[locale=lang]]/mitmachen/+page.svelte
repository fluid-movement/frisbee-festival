<script lang="ts">
	import { getAllSchedules } from '$lib/data/schedules';
	import { DAY_NAMES, type DisciplineId } from '$lib/data/types';
	import { getLocaleForUrl } from '$lib/locale';
	import DisciplineBadge from '$lib/components/disciplines/DisciplineBadge.svelte';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Clock from '@lucide/svelte/icons/clock';

	interface WorkshopEntry {
		id: string;
		title: string;
		disciplineId: DisciplineId;
		time: string;
		place: string;
		description: string;
		image?: string;
	}

	const locale = $derived(getLocaleForUrl());

	const byDay = $derived.by((): Record<string, WorkshopEntry[]> => {
		void locale;
		const result: Record<string, WorkshopEntry[]> = {};
		for (const disciplineSchedule of getAllSchedules()) {
			for (const [day, events] of Object.entries(disciplineSchedule.schedule)) {
				for (const event of events) {
					if (event.type === 'workshop' && event.id) {
						(result[day] ??= []).push({
							id: event.id,
							title: event.label,
							disciplineId: disciplineSchedule.discipline,
							time: event.time,
							place: event.place ?? disciplineSchedule.defaultPlace,
							description: event.description ?? '',
							image: event.image
						});
					}
				}
			}
		}
		// Sort each day's workshops by start time
		for (const workshops of Object.values(result)) {
			workshops.sort((a, b) => a.time.localeCompare(b.time));
		}
		return result;
	});
</script>

{#snippet workshopCard(w: WorkshopEntry)}
	<div id={w.id} class="flex flex-col overflow-hidden rounded-xl border border-secondary">
		{#if w.image}
			<img src={w.image} alt={w.title} class="h-48 w-full object-cover" />
		{/if}
		<div class="flex flex-col gap-2 p-5">
			<DisciplineBadge disciplineId={w.disciplineId} />
			<h4 class="my-0">{w.title}</h4>
			<div class="flex flex-wrap gap-3 text-sm text-muted-foreground">
				<span class="flex items-center gap-1"><Clock class="size-4" />{w.time}</span>
				<span class="flex items-center gap-1"><MapPin class="size-4" />{w.place}</span>
			</div>
			<p class="text-sm leading-relaxed">{w.description}</p>
		</div>
	</div>
{/snippet}

<h1 class="container-custom mb-12 text-center">Mitmachen</h1>

<p class="container-custom">
	Zuschauen ist gut, Selberwerfen ist besser. Wir bieten euch die Chance, die Faszination Frisbee
	direkt auszuprobieren. In unseren Workshops zeigen euch erfahrene Spieler:innen die Kniffe der
	verschiedenen Disziplinen – völlig egal, wie viel Erfahrung ihr mitbringt. Sucht euch unten euren
	Slot aus und werdet Teil des Festivals!
</p>
<div class="container-custom flex flex-col gap-10">
	{#each DAY_NAMES as day (day)}
		{#if byDay[day]?.length}
			<section>
				<h2 class="mb-6 uppercase">{day}</h2>
				<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{#each byDay[day] as w (w.id)}
						{@render workshopCard(w)}
					{/each}
				</div>
			</section>
		{/if}
	{/each}
</div>
