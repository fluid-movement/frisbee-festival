<script lang="ts">
	import Grid from '$lib/components/layout/Grid.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Schedule from '$lib/components/schedule/Schedule.svelte';
	import { getSchedule } from '$lib/data/schedules';
	import { getLocaleForUrl } from '$lib/locale';
	import { Target } from '@lucide/svelte/icons';
	import ogImage from '$lib/assets/disc-golf/disc-golf-cropped.jpg';
	import { PUBLIC_ORIGIN } from '$env/static/public';
	import { page } from '$app/state';

	const locale = $derived(getLocaleForUrl());

	const scheduleData = $derived.by(() => {
		void locale;
		return getSchedule('disc-golf');
	});
</script>

<svelte:head>
	<title>Disc Golf Munich Open | Frisbee Festival München</title>
	<meta name="description" content="Disc Golf München Open: Deutschlands beste Spieler:innen bei der German Disc Golf Tour South in Oberhaching. 8 Divisionen, 3 Runden, 18 Bahnen. 1.–2. August 2026." />
	<link rel="canonical" href="{PUBLIC_ORIGIN}{page.url.pathname}" />
	<meta property="og:title" content="Disc Golf Munich Open | Frisbee Festival München" />
	<meta property="og:description" content="Disc Golf München Open: Deutschlands beste Spieler:innen bei der German Disc Golf Tour South in Oberhaching. 8 Divisionen, 3 Runden, 18 Bahnen. 1.–2. August 2026." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{PUBLIC_ORIGIN}{page.url.pathname}" />
	<meta property="og:site_name" content="Frisbee Festival München" />
	<meta property="og:image" content="{PUBLIC_ORIGIN}{ogImage}" />
	<meta property="og:locale" content={locale === 'en' ? 'en_US' : 'de_DE'} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Grid>
	<article>
		<Badge class="mb-4" variant="outline">Präzision und Konzentration</Badge>
		<div class="flex gap-2">
			<Target size="38" class="mb-4 text-disc-golf" />
			<h1 class="uppercase">Disc Golf</h1>
		</div>
		<p>
			Disc Golf verbindet die zeitlose Präzision des Golfsports mit der dynamischen Flugphysik der
			Frisbee. Statt Ball und Schläger kommen spezialisierte Wurfscheiben zum Einsatz, die mit
			möglichst wenigen Würfen in ein Ziel – einen Fangkorb aus Metall – befördert werden müssen.
			Ein Sport für jedes Alter, der Technik, Kraft und Konzentration in der Natur vereint.
		</p>
		<h5>Wie funktioniert Disc Golf?</h5>
		<p>
			Das Prinzip ist einfach, die Umsetzung eine faszinierende Herausforderung: Ein Kurs besteht in
			der Regel aus 18 Bahnen. Jede Bahn beginnt an einem festgelegten Abwurfpunkt. Von dort aus
			spielst du immer genau von der Stelle weiter, an der deine Disc liegen geblieben ist, bis die
			Scheibe im Fangkorb zur Ruhe kommt. Dabei gilt es, Bäume zu umspielen, Windverhältnisse zu
			lesen und für jede Distanz die richtige Scheibe zu wählen – vom schnellen „Driver“ für den
			weiten Abwurf bis zum präzisen „Putter“ für den finalen Wurf in die Ketten.
		</p>
		<h5>Das Munich Open “Campustreffen” in München</h5>
		<p>
			Das Frisbee Festival bringt mit dem „Campustreffen“ die nationale Elite nach München. Als Teil
			der „German Disc Golf Tour South“ kämpfen hier Deutschlands beste Spieler:innen in acht
			Divisionen über drei Runden auf 18 Bahnen um den Sieg. Wer die wenigsten Würfe benötigt,
			gewinnt – die perfekte Chance, erstklassigen Sport und Profi-Techniken hautnah zu erleben!
		</p>
		<h5>Probier es selbst aus!</h5>
		<p>
			Die Sportschule Oberhaching verfügt auch abseits des Frisbee Festivals über einen öffentlich
			zugänglichen Kurs. An der Rezeption erhältst du für 6 € eine Tageskarte sowie Leihscheiben.
			Pack deine Freunde ein und starte deine eigene Runde!
		</p>
	</article>
	<enhanced:img
		src="$lib/assets/disc-golf/disc-golf-cropped.jpg"
		alt="Disc Golf"
		class="h-full w-full rounded-xl object-cover"
	/>
</Grid>

<Schedule schedule={scheduleData.schedule} />

<div class="container-custom grid gap-4 md:grid-cols-3">
	<enhanced:img
		src="$lib/assets/disc-golf/putt.jpg"
		alt="Disc Golf Putt"
		class="h-full w-full rounded-xl object-cover"
	/>
	<enhanced:img
		src="$lib/assets/disc-golf/walking.jpg"
		alt="Disc Golf Community"
		class="h-full w-full rounded-xl object-cover"
	/>
	<enhanced:img
		src="$lib/assets/disc-golf/throw.jpg"
		alt="Disc Golf far throw"
		class="h-full w-full rounded-xl object-cover"
	/>
</div>
