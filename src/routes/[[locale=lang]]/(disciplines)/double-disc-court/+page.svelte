<script lang="ts">
	import Grid from '$lib/components/layout/Grid.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Schedule from '$lib/components/schedule/Schedule.svelte';
	import { getSchedule } from '$lib/data/schedules';
	import { getLocaleForUrl } from '$lib/locale';
	import { Trophy } from '@lucide/svelte/icons';
	import ogImage from '$lib/assets/ddc/ddc.jpg';
	import { PUBLIC_ORIGIN } from '$env/static/public';
	import { page } from '$app/state';

	const locale = $derived(getLocaleForUrl());

	const scheduleData = $derived.by(() => {
		void locale;
		return getSchedule('double-disc-court');
	});
</script>

<svelte:head>
	<title>Double Disc Court DM | Frisbee Festival München</title>
	<meta name="description" content="Deutsche Meisterschaft im Double Disc Court: zwei Teams, zwei Scheiben, ein Spielfeld. Rasanter Frisbeesport pur in München. 1.–2. August 2026 in Oberhaching." />
	<link rel="canonical" href="{PUBLIC_ORIGIN}{page.url.pathname}" />
	<meta property="og:title" content="Double Disc Court DM | Frisbee Festival München" />
	<meta property="og:description" content="Deutsche Meisterschaft im Double Disc Court: zwei Teams, zwei Scheiben, ein Spielfeld. Rasanter Frisbeesport pur in München. 1.–2. August 2026 in Oberhaching." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{PUBLIC_ORIGIN}{page.url.pathname}" />
	<meta property="og:site_name" content="Frisbee Festival München" />
	<meta property="og:image" content="{PUBLIC_ORIGIN}{ogImage}" />
	<meta property="og:locale" content={locale === 'en' ? 'en_US' : 'de_DE'} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Grid>
	<article>
		<Badge class="mb-4" variant="outline">Aktion und Reaktion</Badge>
		<div class="flex gap-2">
			<Trophy size="38" class="mb-4 text-ddc" />
			<h1 class="uppercase">Double Disc Court</h1>
		</div>
		<p>
			Der wohl einzige Sport der Welt, bei dem zwei Sportgeräte gleichzeitig im Spiel sind! DDC ist
			ein rasantes Teamspiel, bei dem zwei Teams mit je zwei Spieler:innen gleichzeitig mit zwei
			Scheiben gegeneinander antreten. Spannung pur ist garantiert, wenn Taktik, Geschwindigkeit und
			Präzision über Sieg oder Niederlage entscheiden.
		</p>
		<h5>Zwei Quadrate, zwei Scheiben, kein Pardon</h5>
		<p>
			Das Spielfeld besteht aus zwei Quadraten mit 13 m Seitenlänge, die in einem Abstand von 17 m
			zueinander liegen. Ziel ist es, die eigene Spielfeldhälfte zu verteidigen und die Gegner durch
			geschickte Würfe unter Druck zu setzen. Damit es nicht langweilig wird, befinden sich immer
			zwei Scheiben gleichzeitig im Spiel. Diese werden bei jedem Punkt simultan angeworfen – und
			dann geht es blitzschnell hin und her. Einen Punkt erzielt man, wenn die Scheibe im
			gegnerischen Feld liegen bleibt oder der Gegner ins „Aus“ wirft. Die Krönung ist das
			sogenannte „Double“: Berührt das gegnerische Team beide Scheiben gleichzeitig, wandern sofort
			zwei Punkte auf das eigene Konto.
		</p>
		<h5>Kommunikation als Schlüssel zum Erfolg</h5>
		<p>
			Gespielt wird DDC mit den leichtesten und damit windanfälligsten Scheiben der Frisbee-Welt.
			Das erfordert nicht nur eine extreme Beherrschung des Sportgeräts, sondern auch ein perfektes
			Stellungsspiel und blitzschnelle Reaktionen. Doch Technik allein reicht nicht: Die
			Kommunikation im Team ist alles. Nur wer sich blind abspricht, kann den fatalen,
			gleichzeitigen Kontakt beider Scheiben verhindern und im richtigen Moment zum Gegenangriff
			ansetzen.
		</p>
		<h5>Die Deutsche Meisterschaften in München</h5>
		<p>
			DDC gilt als die charmante „Nischensportart in der Nischensportart“ mit einer familiären
			Community und starkem Zusammenhalt. Wie bei allen Frisbeesportarten gibt es keine
			Schiedsrichter; strittige Situationen werden fair direkt auf dem Feld gelöst. Wenn in München
			die Deutschen Meisterschaften ausgetragen werden, erlebst du diesen „Spirit of the Game“ auf
			höchstem Niveau. Sei dabei, wenn Deutschlands beste Teams taktisch anspruchsvoll um jeden
			Zentimeter kämpfen und die Faszination der zwei Scheiben erlebbar machen.
		</p>
	</article>
	<enhanced:img
		src="$lib/assets/ddc/ddc.jpg"
		alt="Community"
		class="h-full w-full rounded-xl object-cover"
	/>
</Grid>

<Schedule schedule={scheduleData.schedule} />

<div class="container-custom grid gap-4 md:grid-cols-3">
	<enhanced:img
		src="$lib/assets/ddc/ddc-gallery-3.jpg"
		alt="Double Disc Court"
		class="h-full w-full rounded-xl object-cover"
	/>
	<enhanced:img
		src="$lib/assets/ddc/ddc-action.jpg"
		alt="Double Disc Court"
		class="h-full w-full rounded-xl object-cover"
	/>
	<enhanced:img
		src="$lib/assets/ddc/ddc2.jpeg"
		alt="Double Disc Court"
		class="h-full w-full rounded-xl object-cover"
	/>
</div>
