<script lang="ts">

	import { mergeAllSchedules } from '$lib/data/schedules';
	import { page } from '$app/state';
	import ScheduleLegend from '$lib/components/ScheduleLegend.svelte';
	import { DISCIPLINE_IDS } from '$lib/data/types';
	import type { DisciplineId, MergedScheduleData, MergedScheduleEvent } from '$lib/data/types';
	import { SvelteSet } from 'svelte/reactivity';

	const mergedSchedule = $derived.by(() => {
		page.url;
		return mergeAllSchedules();
	});

	const dayNames: Record<string, string> = $derived.by(() => {
		page.url;
		return {
			Samstag: 'Samstag',
			Sonntag: 'Sonntag'
		};
	});

	let selected = new SvelteSet<DisciplineId>();

	function toggle(id: DisciplineId) {
		selected.has(id) ? selected.delete(id) : selected.add(id);
	}

	const filteredSchedule: MergedScheduleData = $derived(
		selected.size === 0
			? mergedSchedule
			: (Object.fromEntries(
					Object.entries(mergedSchedule)
						.map(([day, events]) => [day, events.filter((e) => selected.has(e.discipline))])
						.filter(([, events]) => (events as MergedScheduleEvent[]).length > 0)
				) as MergedScheduleData)
	);
</script>

<h1 class="container-custom mb-12 text-center">Ablaufplan</h1>

<div class="container-custom">
	<!-- Legend: all disciplines with text labels -->
	<div class="mb-8 flex flex-wrap gap-2">
		{#each DISCIPLINE_IDS as disciplineId (disciplineId)}
			<ScheduleLegend
				{disciplineId}
				inactive={selected.size > 0 && !selected.has(disciplineId)}
				onclick={() => toggle(disciplineId)}
			/>
		{/each}
	</div>

	<div class="grid gap-8 lg:grid-cols-2">
		{#each Object.entries(filteredSchedule) as [day, events] (day)}
			<div>
				<h3 class="uppercase">{dayNames[day] ?? day}</h3>
				<ul>
					{#each events as event (event.time + event.discipline)}
						<li class="grid grid-cols-[auto_1fr] items-center gap-x-4 border-b py-2">
							<span class="text-sm text-muted-foreground">{event.time}</span>
							<span class="text-xs font-semibold uppercase tracking-wide text-orange-500">{event.place}</span>
							<ScheduleLegend disciplineId={event.discipline} showText={false} />
							<div class="flex flex-col gap-0.5">
								<strong>{event.label}</strong>
								{#if event.description}
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
