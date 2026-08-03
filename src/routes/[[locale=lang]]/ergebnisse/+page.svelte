<script lang="ts">
	import { results, countDivisions } from '$lib/data/results';
	import { getSchedule } from '$lib/data/schedules';
	import { DISCIPLINE_IDS } from '$lib/data/types';
	import type { DisciplineId } from '$lib/data/types';
	import ScheduleLegend from '$lib/components/schedule/ScheduleLegend.svelte';
	import DisciplineBadge from '$lib/components/disciplines/DisciplineBadge.svelte';
	import PodiumCard from '$lib/components/results/PodiumCard.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { SvelteSet } from 'svelte/reactivity';
	import { X } from '@lucide/svelte/icons';
	import { getLocaleForUrl } from '$lib/locale';
	import { PUBLIC_ORIGIN } from '$env/static/public';
	import { page } from '$app/state';

	const locale = $derived(getLocaleForUrl());

	const disciplineNames: Record<DisciplineId, string> = $derived.by(() => {
		void locale;
		return Object.fromEntries(DISCIPLINE_IDS.map((id) => [id, getSchedule(id).name])) as Record<
			DisciplineId,
			string
		>;
	});

	let selected = new SvelteSet<DisciplineId>();

	function toggle(id: DisciplineId) {
		if (selected.has(id)) {
			selected.delete(id);
		} else {
			selected.add(id);
		}
	}

	function clearAll() {
		selected.clear();
	}

	const anyFilter = $derived(selected.size > 0);

	const filteredResults = $derived(
		results.disciplines.filter((d) => selected.size === 0 || selected.has(d.discipline))
	);

	const totalVisible = $derived(countDivisions(filteredResults));
	const totalAll = $derived(countDivisions(results.disciplines));
</script>

<svelte:head>
	<title>Ergebnisse | Frisbee Festival München</title>
	<meta
		name="description"
		content="Alle Ergebnisse des Frisbee Festivals München: die Podestplätze aller Sportarten und Divisionen vom 1.–2. August 2026 in der Sportschule Oberhaching."
	/>
	<link rel="canonical" href="{PUBLIC_ORIGIN}{page.url.pathname}" />
	<meta property="og:title" content="Ergebnisse | Frisbee Festival München" />
	<meta
		property="og:description"
		content="Alle Ergebnisse des Frisbee Festivals München: die Podestplätze aller Sportarten und Divisionen vom 1.–2. August 2026 in der Sportschule Oberhaching."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{PUBLIC_ORIGIN}{page.url.pathname}" />
	<meta property="og:site_name" content="Frisbee Festival München" />
	<meta property="og:locale" content={locale === 'en' ? 'en_US' : 'de_DE'} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<h1 class="container-custom mb-12 text-center">Ergebnisse</h1>

<div class="container-custom">
	<p class="mb-8">
		Das Festival ist vorbei – und was für ein Wochenende! Hier findest du die Podestplätze aller
		Sportarten und Divisionen. Vielen Dank an alle Teilnehmenden, Helferinnen und Helfer und
		Zuschauer, die dieses Wochenende unvergesslich gemacht haben. Nutze die Filter, um direkt zu
		deiner Sportart zu springen.
	</p>

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

	<!-- Active filter status bar -->
	{#if anyFilter}
		<div class="mb-6 flex items-center gap-4">
			<p class="my-0 text-sm text-muted-foreground">
				{totalVisible} von {totalAll} Divisionen angezeigt
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

	{#if filteredResults.length === 0}
		<p class="text-muted-foreground">Für diese Auswahl liegen keine Ergebnisse vor.</p>
	{/if}

	<div class="flex flex-col gap-12">
		{#each filteredResults as { discipline, divisions } (discipline)}
			<section>
				<div class="mb-6 flex flex-wrap items-center gap-3">
					<h2 class="mb-0 uppercase">{disciplineNames[discipline]}</h2>
					<DisciplineBadge disciplineId={discipline} />
				</div>
				<div class="grid gap-6 lg:grid-cols-2">
					{#each divisions as division (division.id)}
						<PodiumCard {division} disciplineName={disciplineNames[discipline]} />
					{/each}
				</div>
			</section>
		{/each}
	</div>
</div>
