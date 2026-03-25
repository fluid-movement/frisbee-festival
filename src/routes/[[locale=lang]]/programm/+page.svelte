<script lang="ts">
	import { mergeAllSchedules } from '$lib/data/schedules';
	import ScheduleLegend from '$lib/components/schedule/ScheduleLegend.svelte';
	import ScheduleTypeBadge from '$lib/components/schedule/ScheduleTypeBadge.svelte';
	import { DISCIPLINE_IDS, EVENT_TYPES } from '$lib/data/types';
	import type {
		DisciplineId,
		EventType,
		MergedScheduleData,
		MergedScheduleEvent
	} from '$lib/data/types';
	import { SvelteSet } from 'svelte/reactivity';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ChevronRight, X } from '@lucide/svelte/icons';
	import { getLocaleForUrl } from '$lib/locale';

	const locale = $derived(getLocaleForUrl());

	const mergedSchedule = $derived.by(() => {
		void locale;
		return mergeAllSchedules();
	});

	const dayNames: Record<string, string> = $derived.by(() => {
		void locale;
		return {
			Samstag: 'Samstag',
			Sonntag: 'Sonntag'
		};
	});

	let selected = new SvelteSet<DisciplineId>();
	let selectedTypes = new SvelteSet<EventType>();

	function toggle(id: DisciplineId) {
		if (selected.has(id)) {
			selected.delete(id);
		} else {
			selected.add(id);
		}
	}

	function toggleType(t: EventType) {
		if (selectedTypes.has(t)) {
			selectedTypes.delete(t);
		} else {
			selectedTypes.add(t);
		}
	}

	function clearAll() {
		selected.clear();
		selectedTypes.clear();
	}

	const anyFilter = $derived(selected.size > 0 || selectedTypes.size > 0);

	const participatePath = $derived(locale ? `/${locale}/mitmachen` : '/mitmachen');

	const filteredSchedule: MergedScheduleData = $derived(
		Object.fromEntries(
			Object.entries(mergedSchedule)
				.map(([day, events]) => [
					day,
					events.filter(
						(e) =>
							(selected.size === 0 || selected.has(e.discipline)) &&
							(selectedTypes.size === 0 || selectedTypes.has(e.type))
					)
				])
				.filter(([, events]) => (events as MergedScheduleEvent[]).length > 0)
		) as MergedScheduleData
	);

	const totalVisible = $derived(
		Object.values(filteredSchedule).reduce((n, events) => n + events.length, 0)
	);
	const totalAll = $derived(
		Object.values(mergedSchedule).reduce((n, events) => n + events.length, 0)
	);
</script>

<h1 class="container-custom mb-12 text-center">Programm</h1>
<p class="container-custom">
	Verpasse kein Highlight! Mit unserem dynamischen Zeitplan und der Festival-Karte hast du alle
	Events fest im Blick. Nutze die Filter, um das Programm nach Sportarten und Kategorien zu
	sortieren und deinen Besuch perfekt zu planen. Such dir deine Favoriten aus und erlebe ein
	unvergessliches Frisbee Wochenende!
</p>
<div class="container-custom">
	<!-- Discipline filter -->
	<div class="mb-4 flex flex-wrap gap-2">
		{#each DISCIPLINE_IDS as disciplineId (disciplineId)}
			<ScheduleLegend
				{disciplineId}
				active={selected.has(disciplineId)}
				inactive={selected.size > 0 && !selected.has(disciplineId)}
				onclick={() => toggle(disciplineId)}
			/>
		{/each}
	</div>

	<!-- Event type filter -->
	<div class="mb-4 flex flex-wrap gap-2">
		{#each EVENT_TYPES as eventType (eventType)}
			<ScheduleTypeBadge
				{eventType}
				active={selectedTypes.has(eventType)}
				inactive={selectedTypes.size > 0 && !selectedTypes.has(eventType)}
				onclick={() => toggleType(eventType)}
			/>
		{/each}
	</div>

	<!-- Active filter status bar -->
	{#if anyFilter}
		<div class="mb-6 flex items-center gap-4">
			<p class="my-0 text-sm text-muted-foreground">
				{totalVisible} von {totalAll} Einträgen angezeigt
			</p>
			<Button
				variant="outline"
				size="sm"
				onclick={clearAll}
				class="cursor-pointer gap-1 text-muted-foreground hover:text-muted-foreground"
			>
				<X />
				Filter entfernen
			</Button>
		</div>
	{:else}
		<div class="mb-6"></div>
	{/if}

	<div class="grid gap-8 lg:grid-cols-2">
		{#each Object.entries(filteredSchedule) as [day, events] (day)}
			<div>
				<h3 class="uppercase">{dayNames[day] ?? day}</h3>
				<ul>
					{#each events as event (event.time + event.discipline)}
						<li class="grid grid-cols-[auto_1fr] items-center gap-x-4 border-b py-2">
							<span class="text-sm text-muted-foreground">{event.time}</span>
							<span class="text-xs font-semibold tracking-wide text-orange-500 uppercase"
								>{event.place}</span
							>
							<div class="flex gap-1">
								<ScheduleLegend disciplineId={event.discipline} showText={false} />
								<ScheduleTypeBadge eventType={event.type} showText={false} />
							</div>
							<div class="flex flex-col gap-0.5">
								<strong>{event.label}</strong>
								{#if event.type === 'workshop' && event.id}
									<Button href="{participatePath}#{event.id}" class="self-start"
										>Mehr <ChevronRight /></Button
									>
								{:else if event.description}
									<span class="text-sm text-muted-foreground">{event.description}</span>
								{/if}
							</div>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</div>
