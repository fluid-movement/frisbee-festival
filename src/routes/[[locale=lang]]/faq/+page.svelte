<script lang="ts">
	import Link from '$lib/components/shared/Link.svelte';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import { PUBLIC_ORIGIN } from '$env/static/public';
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>FAQ | Frisbee Festival München</title>
	<meta name="description" content="Häufige Fragen zum Frisbee Festival München: Anreise, Eintritt, Programm, Workshops und mehr. Alles, was du für deinen Besuch am 1.–2. August 2026 wissen musst." />
	<link rel="canonical" href="{PUBLIC_ORIGIN}{page.url.pathname}" />
	<meta property="og:title" content="FAQ | Frisbee Festival München" />
	<meta property="og:description" content="Häufige Fragen zum Frisbee Festival München: Anreise, Eintritt, Programm, Workshops und mehr. Alles, was du für deinen Besuch am 1.–2. August 2026 wissen musst." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{PUBLIC_ORIGIN}{page.url.pathname}" />
	<meta property="og:site_name" content="Frisbee Festival München" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<h1 class="container-custom text-center">Häufige Fragen</h1>

<Accordion.Root type="single" class="container-custom">
	<Accordion.Item>
		<Accordion.Trigger>Wie komm ich hin?</Accordion.Trigger>
		<Accordion.Content>
			<p>Die Sportschule Oberhaching ist einfach mit der S-Bahn erreichbar</p>
		</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item>
		<Accordion.Trigger>Was kostet der Eintritt?</Accordion.Trigger>
		<Accordion.Content>
			<p>
				Nichts! Wir freuen uns über alle, die unseren Sport den wir so lieben entdecken möchten,
				oder einfach zwei unvergessliche Tage mit uns verbringen möchten
			</p>
		</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item>
		<Accordion.Trigger>Warum veranstaltet ihr das Festival?</Accordion.Trigger>
		<Accordion.Content>
			<p>
				Die Freestyle Frisbee Community in München war dieses Jahr dran, die Weltmeisterschaft
				auszutragen. Um die Reichweite unserer Sportart zu erweitern, haben wir uns mit unseren
				verwandten Frisbee Sportarten zusammengetan, um euch die Möglichkeit zu bieten, etwas neues
				zu sehen.
			</p>
		</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item>
		<Accordion.Trigger>Wird es Essen und Trinken geben?</Accordion.Trigger>
		<Accordion.Content>
			<p>
				Natürlich wird es Food Trucks, und einen Ausschank geben, damit ihr den ganzen Tag über
				versorgt seid.
			</p>
		</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item>
		<Accordion.Trigger>Für wen ist das Festival?</Accordion.Trigger>
		<Accordion.Content>
			<p>
				Das Festival ist für Alle! Egal ob jung oder alt, Anfänger oder Profi, Hauptsache ihr habt
				Spaß oder Interesse an der Flugscheibe und wollt einen tollen Tag mit uns verbringen. Auch
				Familien sind explizit willkommen. Verbringt einfach einen entspannten Tag mit uns, und wer
				weiß, vielleicht findet euer Kind eine neue Leidenschaft.
			</p>
		</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item>
		<Accordion.Trigger>Was muss ich tun?</Accordion.Trigger>
		<Accordion.Content>
			<p>
				Einfach erscheinen! Du siehst das Programm auf der <Link
					class="underline"
					href="/[[locale=lang]]/programm">Programm Seite</Link
				>
			</p>
		</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>
