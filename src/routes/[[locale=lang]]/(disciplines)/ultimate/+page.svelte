<script lang="ts">
	import Grid from '$lib/components/layout/Grid.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Schedule from '$lib/components/schedule/Schedule.svelte';
	import { getSchedule } from '$lib/data/schedules';
	import { getLocaleForUrl } from '$lib/locale';
	import { Users } from '@lucide/svelte/icons';
	import ogImage from '$lib/assets/ultimate/ultimate.jpg';
	import { PUBLIC_ORIGIN } from '$env/static/public';
	import { page } from '$app/state';

	const locale = $derived(getLocaleForUrl());

	const scheduleData = $derived.by(() => {
		void locale;
		return getSchedule('ultimate');
	});
</script>

<svelte:head>
	<title>Ultimate Frisbee Bavarian Open | Frisbee Festival München</title>
	<meta
		name="description"
		content="Die Bavarian Open: Ultimate Frisbee auf hohem Niveau in München. Schnell, athletisch, fair – live erleben am 1.–2. August 2026 in der Sportschule Oberhaching."
	/>
	<link rel="canonical" href="{PUBLIC_ORIGIN}{page.url.pathname}" />
	<meta property="og:title" content="Ultimate Frisbee Bavarian Open | Frisbee Festival München" />
	<meta
		property="og:description"
		content="Die Bavarian Open: Ultimate Frisbee auf hohem Niveau in München. Schnell, athletisch, fair – live erleben am 1.–2. August 2026 in der Sportschule Oberhaching."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{PUBLIC_ORIGIN}{page.url.pathname}" />
	<meta property="og:site_name" content="Frisbee Festival München" />
	<meta property="og:image" content="{PUBLIC_ORIGIN}{ogImage}" />
	<meta property="og:locale" content={locale === 'en' ? 'en_US' : 'de_DE'} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Grid>
	<article>
		<Badge class="mb-4" variant="outline">Teamgeist und Strategie</Badge>
		<div class="flex gap-2">
			<Users size="38" class="mb-4 text-ddc" />
			<h1 class="uppercase">Ultimate Frisbee</h1>
		</div>
		<p>
			Ultimate ist die wohl bekannteste und rasanteste Teamsportart der Scheibenwelt. Hier treffen
			Schnelligkeit und Athletik auf maximale Fairness. Zwei Teams versuchen, die Scheibe durch
			geschickte Pässe über das Feld zu bewegen und in der gegnerischen Endzone zu fangen. Da
			Körperkontakt tabu ist, sind eine exzellente Körperbeherrschung und punktgenaues Teamwork die
			Schlüssel zum Erfolg.
		</p>
		<h5>Die wohl fairste Teamsportart der Welt</h5>
		<p>
			Das Besondere am Ultimate: Es wird selbst auf Weltmeisterschafts-Niveau ohne externe
			Schiedsrichter gespielt. Alle Entscheidungen werden von den Spieler:innen auf dem Feld selbst
			getroffen. Dieser selbstregulierende Grundgedanke, der „Spirit of the Game“, steht über allem.
			Nach jedem Spiel bewerten sich die Teams gegenseitig in Kategorien wie Fairplay und
			Kommunikation. Diese Spirit-Wertung ist oft genauso prestigeträchtig wie der Turniersieg
			selbst. Zudem wird Ultimate häufig im „Mixed-Modus“ gespielt, bei dem Frauen und Männer
			gemeinsam in einem Team auf dem Platz stehen – ein echtes Vorbild für einen modernen Sport.
		</p>
	</article>
	<enhanced:img
		src="$lib/assets/ultimate/ultimate.jpg"
		alt="Ultimate Frisbee"
		class="h-full w-full rounded-xl object-cover"
	/>
</Grid>
<Grid>
	<div>
		<h5>Ein Sport auf dem Vormarsch</h5>
		<p>
			Was Ende der 1960er Jahre in New Jersey eher durch Zufall begann - die SchülerInnen der
			Columbia High School begannen sich die Kuchenbleche der Bäckerei «Frisbie Baking Company»
			zuzuwerfen - hat sich längst professionalisiert. In Deutschland sind mittlerweile rund 200
			Vereine mit über 10.000 Mitgliedern im Verband registriert, und die Nationalteams gehören zur
			europäischen Spitze. Bei der letzten Weltmeisterschaft 2024 an der Gold Coast belegten die
			deutschen Teams in den Kategorien Open, Damen und Mixed jeweils hervorragende Plätze unter den
			Top 7 weltweit. Und bei den World Games 2025 in Chengdu, China, belegte das deutsche
			Mixed-Ultimate Frisbee-Team wieder den hervorragenden vierten Platz. Nach starken Leistungen
			in der Vorrunde verpasste das Team knapp eine Medaille, wurde jedoch als fairste Mannschaft
			mit dem „Spirit-Award“ ausgezeichnet.
		</p>
	</div>
	<div>
		<h5>Die Bavarian Open in München</h5>
		<p>
			Im Rahmen des Frisbee Festivals veranstalten wir die Bavarian Open, ein Ultimate
			Frisbee-Turnier im sog. Hat-Format. Das ist eine besondere Form des Wettkampfs, bei dem die
			Mannschaften nicht als feste Teams anreisen, sondern sich Einzelpersonen jeden Alters und
			Geschlechts individuell anmelden. Im Vordergrund stehen hier das Kennenlernen neuer
			SpielerInnen, Spaß und der Spirit of the Game, weniger der verbissene Leistungsgedanke wie bei
			regulären Meisterschaften. Es ist die trotzdem perfekte Gelegenheit, die Dynamik des Spiels
			aus nächster Nähe zu erleben, spektakuläre „Layouts“ (Hechtwürfe nach der Scheibe) zu sehen
			und die mitreißende Stimmung am Spielfeldrand aufzusaugen.
		</p>
	</div>
</Grid>
<Schedule schedule={scheduleData.schedule} />

<div class="container-custom grid gap-4 md:grid-cols-3">
	<enhanced:img
		src="$lib/assets/ultimate/ultimate-pull.jpg"
		alt="Ultimate Frisbee"
		class="h-full w-full rounded-xl object-cover"
	/>
	<enhanced:img
		src="$lib/assets/ultimate/spirit.jpg"
		alt="Ultimate Frisbee"
		class="h-full w-full rounded-xl object-cover"
	/>
	<enhanced:img
		src="$lib/assets/ultimate/ultimate-contest.jpg"
		alt="Ultimate Frisbee"
		class="h-full w-full rounded-xl object-cover"
	/>
</div>
