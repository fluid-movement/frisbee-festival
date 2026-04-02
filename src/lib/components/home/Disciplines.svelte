<script lang="ts">
	import freestyleImage from '$lib/assets/freestyle/edo-gitis.png?enhanced';
	import discGolfImage from '$lib/assets/disc-golf/putt.jpg?enhanced';
	import ddcImage from '$lib/assets/ddc/ddc-gallery-3.jpg?enhanced';
	import ultimateImage from '$lib/assets/ultimate/ultimate-jump.jpg?enhanced';
	import wheelchairUltimateImage from '$lib/assets/wheelchair-ultimate/rollstuhl-frisbee-handshake.jpg?enhanced';
	import * as Card from '$lib/components/ui/card';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import { resolve } from '$app/paths';
	import { type RouteId } from '$app/types';
	import { getLocaleForUrl } from '$lib/locale';
	import { Button } from '$lib/components/ui/button';
	import DisciplineBadge from '$lib/components/disciplines/DisciplineBadge.svelte';
	import type { DisciplineId } from '$lib/data/types';
	import type { Picture } from 'vite-imagetools';

	type LocaleRouteId = Extract<RouteId, `/[[locale=lang]]${string}`>;

	type Discipline = {
		name: string;
		disciplineId: DisciplineId;
		description: string;
		image: Picture | string;
		href: LocaleRouteId;
	};

	const disciplines: Discipline[] = [
		{
			name: 'Freestyle Frisbee Weltmeisterschaften',
			disciplineId: 'freestyle',
			description: 'Akrobatik, Kreativität und Rhythmus – Freestyle Disc als Kunstform.',
			image: freestyleImage,
			href: '/[[locale=lang]]/(disciplines)/freestyle'
		},
		{
			name: 'Double Disc Court Deutsche Meisterschaften',
			disciplineId: 'double-disc-court',
			description: 'Zwei Scheiben, zwei Teams, ein Spielfeld – taktischer Teamsport pur.',
			image: ddcImage,
			href: '/[[locale=lang]]/(disciplines)/double-disc-court'
		},
		{
			name: 'Disc Golf Campustreffen',
			disciplineId: 'disc-golf',
			description: 'Golf trifft Frisbee. Präzision und Technik in einem wunderschönen Naturkurs.',
			image: discGolfImage,
			href: '/[[locale=lang]]/(disciplines)/disc-golf'
		},
		{
			name: 'Rollstuhl Ultimate Showmatch',
			disciplineId: 'wheelchair-ultimate',
			description:
				'Inklusion in Aktion. Dieser Sport trennt nicht – er verbindet. Wheelchair Ultimate zeigt, wie kreativ, inklusiv und fair Sport sein kann.',
			image: wheelchairUltimateImage,
			href: '/[[locale=lang]]/(disciplines)/wheelchair-ultimate'
		},
		{
			name: 'Ultimate Bavarian Open',
			disciplineId: 'ultimate',
			description:
				'Das schnellste Mannschaftsspiel der Scheibenwelt. Athletisch, fair und faszinierend.',
			image: ultimateImage,
			href: '/[[locale=lang]]/(disciplines)/ultimate'
		}
	];
</script>

<section class="container-custom text-center">
	<h3 class="text-center uppercase">Spitzensport trifft Community-Spirit</h3>
	<p>
		Erlebe fünf packende Frisbee-Sportarten live, werde in Workshops selbst aktiv und genieße die
		entspannte Festival-Atmosphäre. Das Sommer-Highlight für Fans, Freunde und Familien.
	</p>
</section>

<section class="container-custom">
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<div class="flex flex-col items-center justify-center">
			<Badge variant="outline" class="mx-auto mb-2 block w-fit">Die Welt der Scheibe</Badge>
			<h3 class="mb-0 text-center uppercase">Disziplinen und Turniere</h3>
		</div>
		{#each disciplines as discipline (discipline.name)}
			<Card.Root class="relative min-h-80 overflow-hidden p-0">
				<div class="absolute inset-0">
					<enhanced:img src={discipline.image} alt={discipline.name} class="h-full w-full object-cover" />
					<div
						class="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"
					></div>
					<div class="absolute top-4 left-4 z-10">
						<DisciplineBadge disciplineId={discipline.disciplineId} />
					</div>
				</div>

				<div class="relative z-10 flex h-full flex-col justify-end p-4 text-white">
					<Card.Title class="mb-2 text-base text-white">{discipline.name}</Card.Title>
					<div class="m-0 flex gap-4 text-xs leading-relaxed text-white/80">
						<div>
							{discipline.description}
						</div>
						<Button
							variant="ghostline"
							size="sm"
							href={resolve(discipline.href, { locale: getLocaleForUrl() })}
							class="self-end"
						>
							Mehr <ChevronRight />
						</Button>
					</div>
				</div>
			</Card.Root>
		{/each}
	</div>
</section>
