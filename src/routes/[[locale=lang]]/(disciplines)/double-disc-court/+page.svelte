<script lang="ts">
	import Grid from '$lib/components/layout/Grid.svelte';
	import ddcImage from '$lib/assets/ddc/ddc.jpg';
	import galleryImage from '$lib/assets/ddc/ddc-action.jpg';
	import galleryImage2 from '$lib/assets/ddc/ddc2.jpeg';
	import galleryImage3 from '$lib/assets/ddc/ddc-gallery-3.jpg';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Image from '$lib/components/shared/Image.svelte';
	import Schedule from '$lib/components/schedule/Schedule.svelte';
	import { getSchedule } from '$lib/data/schedules';
	import { page } from '$app/state';
	import { Trophy } from '@lucide/svelte/icons';

	const scheduleData = $derived.by(() => {
		page.url;
		return getSchedule('double-disc-court');
	});
</script>

<Grid>
	<article>
		<Badge class="mb-4" variant="outline">Aktion und Reaktion</Badge>
		<div class="flex gap-2">
			<Trophy size="38" class="mb-4 text-ddc" />
			<h1 class="uppercase">Double Disc Court</h1>
		</div>
		<h5>
			Double Disc Court - der wohl einzige Sport, bei dem zwei Sportgeräte gleichzeitig im Spiel
			sind!
		</h5>
		<p>
			Double Disc Court (DDC) ist ein rasantes Teamspiel, bei dem zwei Teams mit je zwei
			Spieler*innen gleichzeitig mit zwei Scheiben gegeneinander antreten. Ziel ist es, die eigene
			Spielfeldhälfte zu verteidigen und die Gegner durch geschickte Würfe unter Druck zu setzen.
			Spannung pur ist garantiert, wenn Taktik, Geschwindigkeit und Präzision über Sieg oder
			Niederlage entscheiden. Das Spielfeld besteht aus zwei Quadraten mit 13 m Seitenlänge, die 17
			m Abstand haben. Jedes Feld wird von einem Team aus zwei Spielern verteidigt. Ziel ist es,
			eine Scheibe im gegnerischen Feld zu platzieren. Und damit es nicht langweilig wird, befinden
			sich zwei Scheiben im Spiel. Diese werden bei jedem Punkt gleichzeitig angeworfen und dann
			geht es hin und her, bis ein Punkt (oder zwei) erzielt wird. Einen Punkt bekommt man, wenn es
			gelingt, die Scheibe so im Feld zu platzieren, dass diese dort liegen bleibt. Ferner erhält
			man einen Punkt, wenn die vom Gegner geworfene Scheibe das “Aus” berührt. Zwei Punkte bekommt
			man, wenn beide Scheiben vom gegnerischen Team gleichzeitig berührt werden. Gespielt wird mit
			den leichtesten und daher windanfälligsten Scheiben. Daher ist dieser Sport nicht nur
			anspruchsvoll an die Beherrschung des Sportgeräts, sondern fordert ein gutes Stellungsspiel
			und Reaktion, aber vor allem eine gute Kommunikation im Team, um den gleichzeitigen Kontakt
			der Scheiben zu verhindern.
		</p>
		<p>
			Wie bei allen Frisbeesportarten gibt es auch beim DDC keine Schiedsrichter. Strittige
			Situationen werden diskutiert und im Zweifelsfall wiederholt. Als Nischensportart in einer
			Nischensportart hat DDC eine sehr familiäre Community, die langsam aber stetig wächst.
		</p>
	</article>
	<Image class="object-cover" src={ddcImage} alt="Comunity" />
</Grid>

<Schedule schedule={scheduleData.schedule} />

<div class="container-custom grid gap-4 md:grid-cols-3">
	<Image src={galleryImage3} alt="Double Disc Court" />
	<Image src={galleryImage} alt="Double Disc Court" />
	<Image src={galleryImage2} alt="Double Disc Court" />
</div>
