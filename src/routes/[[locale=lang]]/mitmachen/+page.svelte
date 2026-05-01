<script lang="ts">
	import { getAllSchedules } from '$lib/data/schedules';
	import { DAY_NAMES, type DisciplineId } from '$lib/data/types';
	import { getLocaleForUrl } from '$lib/locale';
	import { PUBLIC_ORIGIN } from '$env/static/public';
	import { page } from '$app/state';
	import DisciplineBadge from '$lib/components/disciplines/DisciplineBadge.svelte';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Clock from '@lucide/svelte/icons/clock';
	import Grid from '$lib/components/layout/Grid.svelte';
	import { resolve } from '$app/paths';

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

<svelte:head>
	<title>Workshops & Mitmachen | Frisbee Festival München</title>
	<meta
		name="description"
		content="Frisbee selbst ausprobieren beim Frisbee Festival München: Workshops in Freestyle, Disc Golf, DDC, Ultimate und Rollstuhl Ultimate. Für alle – kostenlos, 1.–2. August 2026."
	/>
	<link rel="canonical" href="{PUBLIC_ORIGIN}{page.url.pathname}" />
	<meta property="og:title" content="Workshops & Mitmachen | Frisbee Festival München" />
	<meta
		property="og:description"
		content="Frisbee selbst ausprobieren beim Frisbee Festival München: Workshops in Freestyle, Disc Golf, DDC, Ultimate und Rollstuhl Ultimate. Für alle – kostenlos, 1.–2. August 2026."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{PUBLIC_ORIGIN}{page.url.pathname}" />
	<meta property="og:site_name" content="Frisbee Festival München" />
	<meta property="og:locale" content={locale === 'en' ? 'en_US' : 'de_DE'} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

{#snippet workshopCard(w: WorkshopEntry)}
	<div id={w.id} class="flex flex-col overflow-hidden rounded-xl bg-muted-foreground/10">
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

<Grid class="container-custom">
	<div>
		<h1 class="container-custom mb-12 text-center">Mitmachen</h1>
		<p>
			Zuschauen ist gut, Selberwerfen ist besser. Wir bieten euch die Chance, die Faszination
			Frisbee direkt auszuprobieren. In unseren Workshops zeigen euch erfahrene Spieler:innen die
			Kniffe der verschiedenen Disziplinen – völlig egal, wie viel Erfahrung ihr mitbringt. Sucht
			euch unten euren Slot aus und werdet Teil des Festivals!
		</p>
	</div>
	<div class="rounded-xl bg-primary/40 p-8">
		<div class="flex items-center gap-4 mb-4">
			<div class="w-1/3 flex-none">
				<enhanced:img src="$lib/assets/mitmachen/tafisa-licensed-logo.png" />
			</div>
			<h5 class="grow">The Association For International Sport for All (TAFISA)</h5>
		</div>

		<p>
			Das Frisbee Festival München ist stolz darauf, ein lizensiertes Event der TAFISA zu sein. Mehr
			Infos zu "Sport für alle" auf der <a
				class="underline"
				href={resolve('/[[locale=lang]]/faq', { locale: getLocaleForUrl() })}>FAQ Seite</a
			>
		</p>
	</div>
</Grid>
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
