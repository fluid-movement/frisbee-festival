<script lang="ts">
	import type { ResultDivision } from '$lib/data/types';
	import type { DivisionKey } from '$lib/data/divisions';
	import type { Picture } from '@sveltejs/enhanced-img';
	import * as Card from '$lib/components/ui/card';
	import { resolvePodium } from '$lib/data/results';
	import { Trophy } from '@lucide/svelte/icons';
	import { tv } from 'tailwind-variants';

	let {
		division,
		disciplineName
	}: {
		division: ResultDivision;
		/** Translated discipline name, used for the photo alt text */
		disciplineName: string;
	} = $props();

	/** Division labels live here so Wuchale's Svelte adapter translates them */
	const labels: Record<DivisionKey, string> = {
		open: 'Open',
		women: 'Damen',
		mixed: 'Mixed',
		coop: 'Coop',
		'junior-18': 'Junioren 18',
		'master-40': 'Master 40',
		'master-50': 'Master 50',
		'master-60': 'Master 60',
		'women-master-40': 'Damen Master 40',
		'women-master-50': 'Damen Master 50'
	};

	const divisionLabel = $derived(labels[division.division]);

	const allPhotos = import.meta.glob<{ default: Picture }>(
		'/src/lib/assets/ergebnisse/*.{jpg,jpeg,png,webp,avif}',
		{ eager: true, query: '?enhanced' }
	);

	/** Missing files resolve to undefined so a not-yet-uploaded photo cannot break the build */
	const photo = $derived(
		division.photo ? allPhotos[`/src/lib/assets/ergebnisse/${division.photo}`]?.default : undefined
	);

	const placements = $derived(resolvePodium(division));

	const rank = tv({
		base: 'flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold',
		variants: {
			place: {
				1: 'bg-amber-400 text-amber-950',
				2: 'bg-slate-300 text-slate-800',
				3: 'bg-amber-700 text-amber-50',
				other: 'bg-muted text-muted-foreground'
			}
		}
	});

	function medal(place: number) {
		return place <= 3 ? (place as 1 | 2 | 3) : ('other' as const);
	}
</script>

<Card.Root id={division.id} class="scroll-mt-24 border shadow-sm">
	<Card.Header>
		<h3 class="mb-0 text-xl">{divisionLabel}</h3>
	</Card.Header>
	<!-- Photo comes after the podium in the DOM but reads first on narrow screens -->
	<Card.Content class="flex flex-col-reverse gap-6 sm:flex-row sm:items-center">
		<ol class="my-0 flex min-w-0 grow list-none flex-col gap-3 p-0">
			{#each placements as { name, place, playoff, shared } (name)}
				<li class="flex items-center gap-3">
					<span class={rank({ place: medal(place) })}>{place}</span>
					<span class="min-w-0">
						<span class:font-bold={place === 1}>{name}</span>
						{#if shared || playoff}
							<span class="ml-1 text-sm whitespace-nowrap text-muted-foreground">
								{#if shared}(geteilt){/if}{#if playoff}(nach Stechen){/if}
							</span>
						{/if}
					</span>
					{#if place === 1}
						<Trophy class="size-4 shrink-0 text-amber-500" aria-hidden="true" />
					{/if}
				</li>
			{/each}
		</ol>
		{#if photo}
			<enhanced:img
				src={photo}
				alt="Siegerehrung {disciplineName} {divisionLabel}"
				class="h-40 w-full shrink-0 rounded-lg object-cover sm:w-56"
			/>
		{/if}
	</Card.Content>
</Card.Root>
