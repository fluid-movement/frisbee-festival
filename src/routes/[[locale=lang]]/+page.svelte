<script lang="ts">
	import festivalImage from '$lib/assets/home/sportschule.webp';
	import dfvLogo from '$lib/assets/logo/dfv-logo.jpg';
	import flbyLogo from '$lib/assets/logo/flby-logo.png';
	import fpaLogo from '$lib/assets/logo/fpa-logo.png';
	import wfdfLogo from '$lib/assets/logo/wfdf-logo.png';
	import heroBg from '$lib/assets/home/hero-bg.svg';
	import heroLogo from '$lib/assets/home/hero-logo.svg';
	import heroPerson from '$lib/assets/home/hero-person.png';
	import freestyleImage from '$lib/assets/freestyle/edo-gitis.png';
	import discGolfImage from '$lib/assets/disc-golf/putt.jpg';
	import ddcImage from '$lib/assets/ddc/ddc-gallery-3.jpg';
	import ultimateImage from '$lib/assets/ultimate/ultimate-jump.jpg';
	import wheelchairUltimateImage from '$lib/assets/wheelchair-ultimate/rollstuhl-frisbee-handshake.jpg';
	import * as Card from '$lib/components/ui/card';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { buttonVariants } from '$lib/components/ui/button/button.svelte';
	import Clock from '@lucide/svelte/icons/clock';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import Building2 from '@lucide/svelte/icons/building-2';
	import { resolve } from '$app/paths';
	import { type RouteId } from '$app/types';
	import { getLocaleForUrl } from '$lib/locale';
	import { Button } from '$lib/components/ui/button';
	import DisciplineBadge from '$lib/components/disciplines/DisciplineBadge.svelte';
	import type { DisciplineId } from '$lib/data/types';
	import { Calendar } from '@lucide/svelte';

	type LocaleRouteId = Extract<RouteId, `/[[locale=lang]]${string}`>;

	type Discipline = {
		name: string;
		disciplineId: DisciplineId;
		description: string;
		time: string;
		image: string;
		href: LocaleRouteId;
	};

	const disciplines: Discipline[] = [
		{
			name: 'Freestyle Frisbee Weltmeisterschaften',
			disciplineId: 'freestyle',
			description: 'Akrobatik, Kreativität und Rhythmus – Freestyle Disc als Kunstform.',
			time: 'Sa & So, 10:00–17:00',
			image: freestyleImage,
			href: '/[[locale=lang]]/(disciplines)/freestyle'
		},
		{
			name: 'Double Disc Court Deutsche Meisterschaften',
			disciplineId: 'double-disc-court',
			description: 'Zwei Scheiben, zwei Teams, ein Spielfeld – taktischer Teamsport pur.',
			time: 'Sa & So, 10:00–17:00',
			image: ddcImage,
			href: '/[[locale=lang]]/(disciplines)/double-disc-court'
		},
		{
			name: 'Disc Golf Munich Open',
			disciplineId: 'disc-golf',
			description: 'Golf trifft Frisbee. Präzision und Technik in einem wunderschönen Naturkurs.',
			time: 'Sa & So, 09:00–17:00',
			image: discGolfImage,
			href: '/[[locale=lang]]/(disciplines)/disc-golf'
		},
		{
			name: 'Rollstuhl Ultimate Showmatch',
			disciplineId: 'wheelchair-ultimate',
			description:
				'Inklusion in Aktion. Dieser Sport trennt nicht – er verbindet. Wheelchair Ultimate zeigt, wie kreativ, inklusiv und fair Sport sein kann.',
			time: 'Sa & So, 10:00–17:00',
			image: wheelchairUltimateImage,
			href: '/[[locale=lang]]/(disciplines)/wheelchair-ultimate'
		},
		{
			name: 'Ultimate Bavarian Open',
			disciplineId: 'ultimate',
			description:
				'Das schnellste Mannschaftsspiel der Scheibenwelt. Athletisch, fair und faszinierend.',
			time: 'Sa & So, 09:00–18:00',
			image: ultimateImage,
			href: '/[[locale=lang]]/(disciplines)/ultimate'
		}
	];
</script>

<!-- Hero Section -->
<section class="relative h-110 overflow-hidden md:h-185">
	<!-- Background SVG: genuinely needs to fill the section -->
	<img
		src={heroBg}
		alt=""
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 h-full w-full select-none"
		style="object-fit: fill;"
	/>

	<!-- Person image: stays absolute because it intentionally overflows vertically -->
	<img
		src={heroPerson}
		alt="Frisbee player"
		class="pointer-events-none absolute top-0 right-0 z-5 h-[95%] w-auto object-contain select-none md:top-[5.9%] md:right-auto md:left-[41.6%] md:z-20 md:h-[119.7%]"
	/>

	<!-- Text content: normal document flow, left-padded column -->
	<div
		class="relative z-20 flex h-full flex-col justify-end pb-24 pl-[9.5%] md:justify-center md:pb-0"
	>
		<p class="mb-0 text-xs font-bold">1. - 2. August 2026</p>
		<h2
			class="leading-tight text-background uppercase"
			style="font-family: 'Bebas Neue', sans-serif;"
		>
			Willkommen zum
		</h2>
		<img
			src={heroLogo}
			alt="Frisbee Festival München"
			class="pointer-events-none h-auto w-[80%] select-none md:w-[39.3%]"
		/>
	</div>
</section>

<section class="container-custom text-center">
	<h3 class="text-center uppercase">Spitzensport trifft Community-Spirit</h3>
	<p>
		Erlebe fünf packende Frisbee-Sportarten live, werde in Workshops selbst aktiv und genieße die
		entspannte Festival-Atmosphäre. Das Sommer-Highlight für Fans, Freunde und Familien.
	</p>
</section>
<!-- Disciplines Section -->
<section class="container-custom">
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<div class="flex flex-col items-center justify-center">
			<Badge variant="outline" class="mx-auto mb-2 block w-fit">Die Welt der Scheibe</Badge>
			<h3 class="mb-0 text-center uppercase">Disziplinen und Turniere</h3>
		</div>
		{#each disciplines as discipline (discipline.name)}
			<Card.Root class="relative min-h-80 overflow-hidden p-0">
				<div class="absolute inset-0">
					<img src={discipline.image} alt={discipline.name} class="h-full w-full object-cover" />
					<div
						class="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"
					></div>
					<div class="absolute top-4 left-4 z-10">
						<DisciplineBadge disciplineId={discipline.disciplineId} />
					</div>
				</div>

				<div class="relative z-10 flex h-full flex-col justify-end p-4 text-white">
					<Card.Title class="mb-2 text-base text-white">{discipline.name}</Card.Title>
					<Card.Description class="m-0 flex gap-4 text-xs leading-relaxed text-white/80">
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
					</Card.Description>
				</div>
			</Card.Root>
		{/each}
	</div>
</section>

<!-- Venue Section -->
<section class="relative h-125 overflow-hidden">
	<img
		src={festivalImage}
		alt="Sportschule Oberhaching"
		class="absolute inset-0 h-full w-full object-cover"
	/>
	<div class="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70"></div>
	<div
		class="container-custom relative z-10 flex h-full flex-col items-center justify-center gap-4 text-center text-white"
	>
		<Badge variant="outline" class="border-white text-white">Event Location</Badge>
		<h2 class="mb-4 font-display text-5xl text-white md:text-7xl">SPORTSCHULE OBERHACHING</h2>
		<div class="flex flex-col gap-2 text-white/90 sm:flex-row sm:gap-8">
			<div class="flex items-center gap-2">
				<Calendar class="h-4 w-4 shrink-0" />
				<span>1. - 2. August 2026</span>
			</div>
			<div class="flex items-center gap-2">
				<Clock class="h-4 w-4 shrink-0" />
				<span>9:00 – 19:00 Uhr</span>
			</div>
			<div class="flex items-center gap-2">
				<MapPin class="h-4 w-4 shrink-0" />
				<span>Sportschule Oberhaching, 82041 Oberhaching</span>
			</div>
		</div>
		<div class="flex max-w-lg items-start gap-2 text-white/80">
			<Building2 class="mt-0.5 h-4 w-4 shrink-0" />
			<span class="text-sm">Mehrere Spielfelder, Zuschauerbereich, Verpflegung, Parkplatz</span>
		</div>
	</div>
</section>

<!-- Community Section -->
<section class="container-custom">
	<Badge variant="outline" class="mx-auto mb-2 block w-fit">Mach mit</Badge>
	<h2 class="mb-8 text-center uppercase">Sei Teil des Festivals</h2>
	<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
		<Card.Root class="bg-teal-dark p-8 text-white">
			<Card.Content class="p-0">
				<h4 class="mb-3 text-white">Zuschauen</h4>
				<p class="mb-0 text-sm leading-relaxed text-white/70">
					Erlebe den Frisbeesport hautnah, von Freestyle-Weltmeisterschaften bis zu spannenden
					Showmatches. Entdecke unseren Zeitplan und verpasse keines der Highlights auf dem
					Festival.
				</p>
			</Card.Content>
			<Card.Footer class="justify-end px-0">
				<Button href={resolve('/[[locale=lang]]/programm', { locale: getLocaleForUrl() })}>
					Programm <ChevronRight />
				</Button>
			</Card.Footer>
		</Card.Root>
		<Card.Root class="bg-teal-dark p-8 text-white">
			<Card.Content class="p-0">
				<h4 class="mb-3 text-white">Mitmachen</h4>
				<p class="mb-0 text-sm leading-relaxed text-white/70">
					Lust selbst aktiv zu werden? Egal ob Anfänger oder Profi – bei unseren Workshops,
					Mitmach-Stationen und Side-Events kannst du die Scheibe selbst fliegen lassen und Teil
					unserer Community werden.
				</p>
			</Card.Content>
			<Card.Footer class="justify-end px-0">
				<Button href={resolve('/[[locale=lang]]/mitmachen', { locale: getLocaleForUrl() })}>
					Workshops <ChevronRight />
				</Button>
			</Card.Footer>
		</Card.Root>
	</div>
</section>

<!-- Sponsors Section -->
<section class="container-custom">
	<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
		<div>
			<Badge variant="outline" class="mb-2 w-fit">Starke Partnerschaften</Badge>
			<h2 class="mb-4 uppercase">Dank an unsere Sponsoren</h2>
			<p class="leading-relaxed text-muted-foreground">
				Gemeinsam bringen wir die Scheibe zum Fliegen! Ein großes Dankeschön an unsere Partner, die
				das Frisbee Festival München und die internationale Community unterstützen.
			</p>
			<div class="mt-8 flex flex-wrap items-center gap-8">
				<img src={wfdfLogo} alt="WFDF" class="h-12 object-contain" />
				<img src={fpaLogo} alt="FPA" class="h-12 object-contain" />
				<img src={dfvLogo} alt="DFV" class="h-12 object-contain mix-blend-multiply" />
				<img src={flbyLogo} alt="FLBY" class="h-12 object-contain mix-blend-multiply" />
			</div>
		</div>
		<div>
			<Badge variant="outline" class="mb-2 w-fit">Das Team hinter dem Event</Badge>
			<h2 class="mb-4 uppercase">Die Organisatoren</h2>
			<p class="leading-relaxed text-muted-foreground">
				Internationale Verbände und lokale Partner vereinen ihre Kräfte, um die Sportschule
				Oberhaching zum Zentrum der Frisbee-Welt zu machen.
			</p>
			<div class="mt-8 flex flex-wrap items-center gap-8">
				<img src={wfdfLogo} alt="WFDF" class="h-12 object-contain" />
				<img src={fpaLogo} alt="FPA" class="h-12 object-contain" />
				<img src={dfvLogo} alt="DFV" class="h-12 object-contain mix-blend-multiply" />
				<img src={flbyLogo} alt="FLBY" class="h-12 object-contain mix-blend-multiply" />
			</div>
		</div>
	</div>
</section>
