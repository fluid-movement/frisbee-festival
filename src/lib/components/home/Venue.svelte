<script lang="ts">
	import festivalImage from '$lib/assets/home/sportschule.webp?enhanced';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Clock from '@lucide/svelte/icons/clock';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Building2 from '@lucide/svelte/icons/building-2';
	import { Calendar } from '@lucide/svelte';
</script>

<section class="relative h-125 overflow-hidden">
	<enhanced:img
		src={festivalImage}
		alt="Sportschule Oberhaching"
		class="absolute inset-0 h-full w-full object-cover"
	/>
	<div class="absolute inset-0 bg-linear-to-b from-black/10 via-black/50 to-black/60"></div>
	<div
		class="container-custom relative z-10 flex h-full flex-col items-center justify-center gap-4 text-center text-white"
	>
		<Badge variant="outline" class="border-white text-white">Event Location</Badge>
		<h2 class="mb-4 font-display text-5xl text-white md:text-7xl">SPORTSCHULE OBERHACHING</h2>
		<div class="hidden sm:flex flex-col gap-2 text-white/90 sm:flex-row sm:gap-8">
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
		<div class="hidden sm:flex max-w-lg items-start gap-2 text-white/70">
			<Building2 class="mt-0.5 h-4 w-4 shrink-0" />
			<span class="text-sm">Mehrere Spielfelder, Zuschauerbereich, Verpflegung, Parkplatz</span>
		</div>
		<div class="sm:hidden flex flex-col gap-3 text-white/90 text-sm w-full max-w-xs text-left">
			<div class="flex items-center gap-3">
				<Calendar class="h-4 w-4 shrink-0" />
				<span>1. - 2. August 2026</span>
			</div>
			<div class="flex items-center gap-3">
				<Clock class="h-4 w-4 shrink-0" />
				<span>9:00 – 19:00 Uhr</span>
			</div>
			<div class="flex items-start gap-3">
				<MapPin class="mt-0.5 h-4 w-4 shrink-0" />
				<span>Sportschule Oberhaching <br/>82041 Oberhaching</span>
			</div>
			<div class="flex items-start gap-3 text-white">
				<Building2 class="mt-0.5 h-4 w-4 shrink-0" />
				<span>Mehrere Spielfelder, Zuschauerbereich, Verpflegung, Parkplatz</span>
			</div>
		</div>
	</div>
</section>
