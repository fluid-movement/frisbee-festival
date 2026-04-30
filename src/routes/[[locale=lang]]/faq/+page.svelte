<script lang="ts">
	import Link from '$lib/components/shared/Link.svelte';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import { PUBLIC_ORIGIN } from '$env/static/public';
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>FAQ | Frisbee Festival München</title>
	<meta
		name="description"
		content="Häufige Fragen zum Frisbee Festival München: Anreise, Eintritt, Programm, Workshops und mehr. Alles, was du für deinen Besuch am 1.–2. August 2026 wissen musst."
	/>
	<link rel="canonical" href="{PUBLIC_ORIGIN}{page.url.pathname}" />
	<meta property="og:title" content="FAQ | Frisbee Festival München" />
	<meta
		property="og:description"
		content="Häufige Fragen zum Frisbee Festival München: Anreise, Eintritt, Programm, Workshops und mehr. Alles, was du für deinen Besuch am 1.–2. August 2026 wissen musst."
	/>
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
			<p>
				Die Sportschule Oberhaching liegt verkehrsgünstig im Süden Münchens und ist sowohl mit
				öffentlichen Verkehrsmitteln als auch mit dem Auto einfach zu erreichen.
			</p>
			<b> Anfahrt mit der S-Bahn </b>
			<p>
				Dank der direkten Anbindung an die S-Bahn-Linie S3 Richtung Deisenhofen oder Holzkirchen
				(Haltestelle Furth) gelangt ihr bequem und schnell aus dem Münchner Stadtgebiet zu uns –
				ideal für Tagesgäste, Teilnehmer von Trainingslagern, Schulklassen oder Tagungen.
			</p>
			<b> Anfahrt mit dem Auto </b>
			<p>
				Für alle, die mit dem PKW anreisen, bietet die nahegelegene Autobahn A8 (München – Salzburg)
				eine unkomplizierte und schnelle Verbindung. Einfach auf der A995/E54 bis Ausfahrt
				Oberhaching und dann der Beschilderung „Sportschule Oberhaching“ folgen. Parkmöglichkeiten
				stehen auf dem Gelände der Sportschule kostenlos zur Verfügung.
			</p>
			<a
				class="underline"
				rel="external"
				href="https://www.google.com/maps/place/Sportschule+Oberhaching/@48.036526,11.590923,138456m/data=!3m1!1e3!4m9!3m8!1s0x479dddebe0e3164f:0x2c53f75f79085b0!5m2!4m1!1i2!8m2!3d48.0362343!4d11.5905633!16s%2Fg%2F1td_44qt?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDMzMS4wIKXMDSoASAFQAw%3D%3D"
				>Hier der Link zu Google Maps</a
			>
			<enhanced:img
				src="$lib/assets/faq/anfahrt.webp"
				alt="Anfahrt"
				class="mt-8 h-full w-full rounded-xl object-cover"
			/>
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
				verwandten Frisbee Sportarten zusammengetan, um euch die Möglichkeit zu bieten, etwas Neues
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
				Einfach vorbeikommen! Du siehst das Programm auf der <Link
					class="underline"
					href="/[[locale=lang]]/programm">Programmseite</Link
				>
			</p>
		</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item>
		<Accordion.Trigger>Was bedeutet Sport für Alle?</Accordion.Trigger>
		<Accordion.Content>
			<p>
				Sport für alle ist ein Begriff, der oft im Zusammenhang mit körperlicher Aktivität genannt
				wird (mit der Abkürzung SAPA für Sport for All and Physical Activity). Der Begriff wird vor
				allem von TAFISA verwendet, dem Weltverband für Sport für Alle (The Association for
				International Sport for All). Sein Motto lautet: “Die Welt durch Sport für Alle zu einem
				besseren Ort zu machen”.
			</p>
		</Accordion.Content>
	</Accordion.Item><Accordion.Item>
		<Accordion.Trigger>Was unterscheidet Sport für Alle vom Breitensport?</Accordion.Trigger>
		<Accordion.Content>
			<p>
				Breitensport sagt gewöhnlich: “Kommt alle, wenn ihr könnt.” Sport für Alle hingegen
				betrachtet, welche Zielgruppen besondere Schwierigkeiten haben, am Breitensport
				teilzunehmen. Dabei handelt es sich häufig um Kinder und Jugendliche, um Frauen, um sich
				nicht-binär identifizierende Personen, um Menschen mit Behinderungen oder um ältere Menschen
				oder um Menschen, die aufgrund unterschiedlicher Merkmale diskriminiert werden. Sport für
				Alle macht sich zur Aufgabe, Angebote für gesellschaftlich benachteiligte Personen zu
				schaffen, um ihnen die Teilnahme an Sport und körperlicher Aktivität zu ermöglichen.
			</p>
		</Accordion.Content>
	</Accordion.Item>
	<Accordion.Item>
		<Accordion.Trigger>
			Wofür steht die Auszeichnung des Frisbee Festivals als Sport für Alle-Event?
		</Accordion.Trigger>
		<Accordion.Content>
			<p>
				Die Auszeichnung des Frisbee Festivals München als lizenziertes Sport für Alle-Event belegt,
				dass die Veranstaltung als wichtiger Beitrag zur Förderung von körperlicher Aktivität
				angesehen wird. Der Weltverband für Sport für Alle (TAFISA) zeichnet damit Veranstaltungen
				mit einem hohen Engagement zur Förderung einer Kultur der Inklusion aus. Dabei spielt auch
				die öffentlichkeitswirksame Kombination eines Spitzensportevents mit Breitensport und der
				Ansprache verschiedener Zielgruppen eine besondere Rolle. Die TAFISA-Lizenzierung ist Events
				mit einem starken Fokus auf Sport für Alle vorbehalten, da diese zur weltweiten Förderung
				von körperlicher Aktivität gerade von gesellschaftlich benachteiligten Zielgruppen
				beitragen, im Einklang mit den UN-Nachhaltigkeitszielen und den Themen der TAFISA-Mission
				2030.
			</p>
		</Accordion.Content>
	</Accordion.Item>
</Accordion.Root>
