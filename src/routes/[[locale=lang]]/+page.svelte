<script>
	import festivalImage from '$lib/assets/home/festival.jpg';
	import dfvLogo from '$lib/assets/logo/dfv-logo.jpg';
	import flbyLogo from '$lib/assets/logo/flby-logo.png';
	import fpaLogo from '$lib/assets/logo/fpa-logo.png';
	import wfdfLogo from '$lib/assets/logo/wfdf-logo.png';
	import heroBg from '$lib/assets/home/hero-bg.svg';
	import heroLogo from '$lib/assets/home/hero-logo.svg';
	import heroPerson from '$lib/assets/home/hero-person.png';
	import * as Card from '$lib/components/ui/card';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { buttonVariants } from '$lib/components/ui/button/button.svelte';
	import Clock from '@lucide/svelte/icons/clock';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Building2 from '@lucide/svelte/icons/building-2';
	import Users from '@lucide/svelte/icons/users';
	import Link from '$lib/components/Link.svelte';

	const disciplines = [
		{
			name: 'WFDF Ultimate Frisbee',
			badge: 'Ultimate',
			description:
				'Das schnellste Mannschaftsspiel der Scheibenwelt. Athletisch, fair und faszinierend.',
			time: 'Sa & So, 09:00–18:00',
			image: 'https://www.figma.com/api/mcp/asset/eb023f4b-4a6b-4b72-a3f7-dc6ec7d00263'
		},
		{
			name: 'PDGA German Open',
			badge: 'Disc Golf',
			description: 'Golf trifft Frisbee. Präzision und Technik in einem wunderschönen Naturkurs.',
			time: 'Sa & So, 09:00–17:00',
			image: 'https://www.figma.com/api/mcp/asset/9cd51b23-a2a9-4a04-8e9a-62a5d0493139'
		},
		{
			name: 'FPAW Freestyle Disc',
			badge: 'Freestyle',
			description: 'Akrobatik, Kreativität und Rhythmus – Freestyle Disc als Kunstform.',
			time: 'Sa & So, 10:00–17:00',
			image: 'https://www.figma.com/api/mcp/asset/5b94030f-0714-4cc7-94e8-ec8593ea91d2'
		},
		{
			name: 'Double Disc Court',
			badge: 'DDC',
			description: 'Zwei Scheiben, zwei Teams, ein Spielfeld – taktischer Teamsport pur.',
			time: 'Sa & So, 10:00–17:00',
			image: 'https://www.figma.com/api/mcp/asset/bf0e2a37-04b8-4e7c-83b0-3cf35216694a'
		},
		{
			name: 'Rollstuhl Ultimate',
			badge: 'Rollstuhl Ultimate',
			description:
				'Inklusion in Aktion. Dieser Sport trennt nicht – er verbindet. Wheelchair Ultimate zeigt, wie kreativ, inklusiv und fair Sport sein kann.',
			time: 'Sa & So, 10:00–17:00',
			image: 'https://www.figma.com/api/mcp/asset/bf0e2a37-04b8-4e7c-83b0-3cf35216694a'
		}
	];
</script>

<!-- Hero Section -->
<section class="hero-section relative overflow-hidden bg-[#fff5ed]">
	<!-- Orange organic shape background -->
	<img
		src={heroBg}
		alt=""
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 h-full w-full select-none"
		style="object-fit: fill;"
	/>

	<!-- Date -->
	<p
		class="hero-date pointer-events-none absolute z-10 text-xs font-bold text-[#0a0a0a]"
		style="letter-spacing: 0.07em; font-family: 'Calibri', sans-serif;"
	>
		1. - 2. August 2026
	</p>

	<p
		class="hero-welcome pointer-events-none absolute z-10 text-white uppercase"
		style="font-family: 'Bebas Neue', sans-serif;"
	>
		Willkommen zum
	</p>

	<img
		src={heroLogo}
		alt="Frisbee Festival München"
		class="hero-logo pointer-events-none absolute z-10 select-none"
		style="height: auto;"
	/>

	<!-- Description -->
	<p
		class="hero-desc pointer-events-none absolute z-10 text-[#ffedd4]"
		style="font-family: 'Calibri', sans-serif;"
	>
		Erlebe erstklassigen Frisbeesport und feiere mit uns die Faszination der Flugscheibe in München.
	</p>

	<!-- Person image -->
	<img
		src={heroPerson}
		alt="Frisbee player"
		class="hero-person pointer-events-none absolute select-none"
		style="width: auto; object-fit: contain;"
	/>
</section>

<section class="container-custom">
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<div class="flex flex-col items-center justify-center">
			<Badge variant="outline" class="mx-auto mb-2 block w-fit">Die Welt der Scheibe</Badge>
			<h2 class="mb-8 text-center uppercase">Disziplinen und Turniere</h2>
		</div>
		{#each disciplines as discipline (discipline.name)}
			<Card.Root class="overflow-hidden p-0 sm:relative sm:min-h-80">
				<div class="relative h-44 sm:absolute sm:inset-0 sm:h-auto">
					<img src={discipline.image} alt={discipline.name} class="h-full w-full object-cover" />
					<div
						class="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"
					></div>
					<Badge class="absolute top-4 left-4 z-10 bg-primary">{discipline.badge}</Badge>
				</div>

				<!-- Mobile content below image -->
				<div class="p-4 sm:hidden">
					<div class="mb-1 flex items-center gap-2">
						<Users class="h-4 w-4 shrink-0 text-primary" />
						<span
							class="font-bold tracking-wide uppercase"
							style="font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem;"
							>{discipline.name}</span
						>
					</div>
					<p class="mb-2 text-sm leading-relaxed text-muted-foreground">{discipline.description}</p>
					<div class="flex items-center gap-1.5 text-xs text-muted-foreground">
						<Clock class="h-3.5 w-3.5 shrink-0" />
						<span>{discipline.time}</span>
					</div>
				</div>

				<!-- Desktop overlay content -->
				<div class="relative z-10 hidden h-full flex-col justify-end p-4 text-white sm:flex">
					<Card.Title class="mb-2 text-base text-white">{discipline.name}</Card.Title>
					<Card.Description class="text-xs leading-relaxed text-white/80">
						{discipline.description}
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
		<Card.Root class="bg-[#1e2939] p-8 text-white">
			<Card.Content class="p-0">
				<div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary">
					<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
				</div>
				<h4 class="mb-3 text-white">Eine Community, die gemeinsames Wachstum fördert</h4>
				<p class="mb-0 text-sm leading-relaxed text-white/70">
					Wir glauben an den Aufbau einer unterstützenden Gemeinschaft, in der sich Spieler
					gegenseitig ermutigen, Wissen teilen und gemeinsam Erfolge feiern. Unser Sport ist mehr
					als nur ein Spiel – er ist eine Familie.
				</p>
			</Card.Content>
		</Card.Root>
		<div class="relative min-h-64 overflow-hidden rounded-xl lg:min-h-0">
			<img
				src={festivalImage}
				alt="Community"
				class="absolute inset-0 h-full w-full object-cover"
			/>
		</div>
	</div>
	<div class="mt-6 flex flex-wrap justify-center gap-3">
		<Link href="/[[locale=lang]]/festival/schedule" class={buttonVariants({ size: 'lg' })}
			>Full Schedule →</Link
		>
		<Link href="/[[locale=lang]]/festival/participate" class={buttonVariants({ size: 'lg' })}
			>Mitmachen</Link
		>
	</div>
</section>

<!-- Sponsors Section -->
<section class="container-custom">
	<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
		<div>
			<Badge variant="outline" class="mb-2 w-fit">Strong Partnership</Badge>
			<h2 class="mb-4 font-display text-5xl uppercase">Huge thanks to our sponsors</h2>
			<p class="leading-relaxed text-muted-foreground">
				Das Frisbee Festival schafft Sichtbarkeit für den Frisbeesport und bringt die internationale
				Frisbee-Community nach München. Ermöglicht durch großartige Partnerorganisationen.
			</p>
			<div class="mt-8 flex flex-wrap items-center gap-8">
				<img src={wfdfLogo} alt="WFDF" class="h-12 object-contain" />
				<img src={fpaLogo} alt="FPA" class="h-12 object-contain" />
				<img src={dfvLogo} alt="DFV" class="h-12 object-contain mix-blend-multiply" />
				<img src={flbyLogo} alt="FLBY" class="h-12 object-contain mix-blend-multiply" />
			</div>
		</div>
		<div class="relative min-h-80 overflow-hidden rounded-2xl">
			<img
				src="https://www.figma.com/api/mcp/asset/6b97cebc-42ed-4461-b290-e7e02d0a34ce"
				alt="Festival"
				class="absolute inset-0 h-full w-full object-contain"
			/>
		</div>
	</div>
</section>

<style>
	/* ── Hero – Desktop (≥768px) ───────────────────────── */
	.hero-section {
		height: 742px;
	}
	.hero-date {
		left: 13.7%;
		top: 25.6%;
	}
	.hero-welcome {
		left: 13.7%;
		top: 25.6%;
		font-size: 50px;
		line-height: 120px;
	}
	.hero-logo {
		left: 9.5%;
		top: 39.6%;
		width: 39.3%;
	}
	.hero-desc {
		left: 13.7%;
		top: 70.4%;
		width: 28.8%;
		font-size: 17px;
		line-height: 1.75rem;
	}
	.hero-person {
		left: 41.6%;
		top: 5.9%;
		height: 119.7%;
		z-index: 20;
	}

	/* ── Hero – Mobile (<768px) ────────────────────────── */
	@media (max-width: 767px) {
		.hero-section {
			height: 440px;
		}
		.hero-date {
			left: 7.5%;
			top: 20%;
			font-size: 10px;
		}
		.hero-welcome {
			left: 7.5%;
			top: 20%;
			font-size: 30px;
			line-height: 72px;
		}
		.hero-logo {
			left: 4%;
			top: 37%;
			width: 56%;
		}
		.hero-desc {
			display: none;
		}
		.hero-person {
			right: 0;
			left: auto;
			top: 0%;
			height: 95%;
			z-index: 5;
		}
	}
</style>
