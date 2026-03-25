<script lang="ts">
	import Grid from '$lib/components/layout/Grid.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Schedule from '$lib/components/schedule/Schedule.svelte';
	import { getSchedule } from '$lib/data/schedules';
	import { getLocaleForUrl } from '$lib/locale';
	import { Accessibility } from '@lucide/svelte/icons';
	import ogImage from '$lib/assets/wheelchair-ultimate/rollstuhl-frisbee.jpg';
	import { PUBLIC_ORIGIN } from '$env/static/public';
	import { page } from '$app/state';

	const locale = $derived(getLocaleForUrl());

	const scheduleData = $derived.by(() => {
		void locale;
		return getSchedule('wheelchair-ultimate');
	});
</script>

<svelte:head>
	<title>Rollstuhl Ultimate Showmatch | Frisbee Festival München</title>
	<meta name="description" content="Rollstuhl Ultimate beim Frisbee Festival München: inklusiver Sport auf höchstem Niveau. Showmatch & Workshops für alle. 1.–2. August 2026 in Oberhaching." />
	<link rel="canonical" href="{PUBLIC_ORIGIN}{page.url.pathname}" />
	<meta property="og:title" content="Rollstuhl Ultimate Showmatch | Frisbee Festival München" />
	<meta property="og:description" content="Rollstuhl Ultimate beim Frisbee Festival München: inklusiver Sport auf höchstem Niveau. Showmatch & Workshops für alle. 1.–2. August 2026 in Oberhaching." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{PUBLIC_ORIGIN}{page.url.pathname}" />
	<meta property="og:site_name" content="Frisbee Festival München" />
	<meta property="og:image" content="{PUBLIC_ORIGIN}{ogImage}" />
	<meta property="og:locale" content={locale === 'en' ? 'en_US' : 'de_DE'} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<article>
	<Grid>
		<div>
			<Badge class="mb-4" variant="outline">Inklusion und Action</Badge>
			<div class="flex gap-2">
				<Accessibility size="38" class="mb-4 text-wheelchair-ultimate" />
				<h1 class="uppercase">Rollstuhl Ultimate</h1>
			</div>
			<p>
				Inklusion in Aktion: Dieser Sport trennt nicht – er verbindet. Rollstuhl Ultimate zeigt, wie
				kreativ, inklusiv und fair Sport sein kann, wenn alle gemeinsam spielen. Es ist eine
				packende Erfahrung, die Menschen zusammenbringt und zeigt, dass sportlicher Erfolg vor allem
				von Übersicht, Geschick und Teamarbeit abhängt.
			</p>
			<h5>Was ist Rollstuhl Ultimate?</h5>
			<p>
				Rollstuhl Ultimate ist eine adaptierte Version des klassischen Ultimate Frisbee. Die
				Kernwerte bleiben dabei identisch: Kontaktloses Spiel, Eigenverantwortung bei der
				Regelauslegung (Self-Officiating) und der „Spirit of the Game“ stehen an oberster Stelle.
				Durch gezielte Anpassungen für Rollstuhlfahrer:innen entsteht ein zutiefst inklusiver Sport,
				der Beweglichkeit, strategisches Denken und die aktive Teilnahme von Menschen mit
				unterschiedlichsten Mobilitätsgraden fördert.
			</p>
			<h5>Was macht es so besonders?</h5>
			<p>
				Es ist mehr als nur ein Spiel – es ist pure Energie. Sobald du über das Feld fährst, die
				Scheibe fängst und mit deinem Team kombinierst, spürst du die Freude, die diesen Sport
				definiert. Rollstuhl Ultimate ist schnell, fair und fesselnd. Da der Erfolg weniger von rein
				körperlichen Voraussetzungen als vielmehr von taktischem Verständnis und Kooperation
				abhängt, ist der Sport für jede:n zugänglich und spannend.
			</p>
			<h5>Erlebe den Perspektivwechsel hautnah</h5>
			<p>
				Beim Frisbee Festival München machen wir diesen Sport für alle greifbar. Neben packenden
				Showmatches der Profis laden unsere Workshops jede:n – egal ob mit oder ohne Behinderung –
				ein, selbst in den Sportrollstuhl zu steigen. Entdecke die Herausforderung dieser
				Fortbewegung, gewinne neue Perspektiven und erlebe ein berauschendes Spiel auf Augenhöhe.
				Nimm Platz, schnapp dir die Scheibe und werde Teil unserer Gemeinschaft!
			</p>
		</div>
		<enhanced:img
			src="$lib/assets/wheelchair-ultimate/rollstuhl-frisbee.jpg"
			alt="Rollstuhl Frisbee"
			class="h-full w-full rounded-xl object-cover"
		/>
		<enhanced:img
			src="$lib/assets/wheelchair-ultimate/rollstuhl-frisbee-handshake.jpg"
			alt="Rollstuhl Frisbee"
			class="h-full w-full rounded-xl object-cover"
		/>
		<p>
			Es ist mehr als nur ein Spiel – es ist ein Erlebnis, das Menschen zusammenbringt. In dem
			Moment, in dem man über das Spielfeld rollt, die Scheibe fängt und mit seinen Mitspielern
			zusammenarbeitet, spürt man die Energie und Freude, die diesen Sport ausmachen. Er ist
			schnell, fair und mitreißend. Erfolg hängt von Aufmerksamkeit, Können und Zusammenarbeit ab –
			und nicht allein von körperlicher Leistungsfähigkeit – was ihn aufregend und für alle
			zugänglich macht. Warum jeder es ausprobieren sollte – mit oder ohne Behinderung Rollstuhl
			Ultimate bietet eine neue Perspektive auf sportliche Bewegung und Teamarbeit. Spieler ohne
			Behinderung entdecken schnell die Herausforderung und den Spaß, einen Rollstuhl zu
			manövrieren, und gewinnen dabei eine neue Wertschätzung für die Athletik von Rollstuhlfahrern.
			Gleichzeitig genießen Spieler mit Behinderung einen Rahmen, in dem sie gleichberechtigt
			teilnehmen und ihre Fähigkeiten voll entfalten können.
		</p>
	</Grid>
</article>

<Schedule schedule={scheduleData.schedule} />
