<script lang="ts">
	import Grid from '$lib/components/layout/Grid.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Schedule from '$lib/components/schedule/Schedule.svelte';
	import { getSchedule } from '$lib/data/schedules';
	import { getLocaleForUrl } from '$lib/locale';
	import { Accessibility } from '@lucide/svelte/icons';

	const locale = $derived(getLocaleForUrl());

	const scheduleData = $derived.by(() => {
		void locale;
		return getSchedule('wheelchair-ultimate');
	});
</script>

<article>
	<Grid>
		<div>
			<Badge class="mb-4" variant="outline">Inklusion und Action</Badge>
			<div class="flex gap-2">
				<Accessibility size="38" class="mb-4 text-wheelchair-ultimate" />
				<h1 class="uppercase">Rollstuhl Ultimate</h1>
			</div>
			<p>
				Rollstuhl Ultimate ist eine angepasste Version von Ultimate Frisbee, die für AthletInnen mit
				körperlichen Beeinträchtigungen entwickelt wurde. Es bewahrt die Kernwerte des
				traditionellen Ultimate – wie berührungsfreies Spiel, Selbstschiedsrichterei und den „Spirit
				of the Game" – und führt gleichzeitig Anpassungen ein, die speziell auf Rollstuhlfahrer
				zugeschnitten sind. Das Ergebnis ist ein wirklich inklusiver Sport, der Teamarbeit,
				Agilität, strategisches Denken und aktive Teilhabe für Menschen mit unterschiedlichsten
				Mobilitätsniveaus fördert.
			</p>
			<p>
				Dieser Sport trennt nicht – er verbindet. Rollstuhl Ultimate zeigt, wie kreativ, inklusiv
				und fair Sport sein kann, wenn alle gemeinsam spielen. Wer es ausprobiert, entdeckt nicht
				nur ein mitreißendes Spiel, sondern auch ein neues Gemeinschaftsgefühl. Also: Platz nehmen,
				Scheibe schnappen und Ultimate aus einer Perspektive erleben, die jeden Spieler nachhaltig
				beeindruckt.
			</p>
		</div>
		<enhanced:img src="$lib/assets/wheelchair-ultimate/rollstuhl-frisbee.jpg" alt="Rollstuhl Frisbee" class="h-full w-full rounded-xl object-cover" />
		<enhanced:img src="$lib/assets/wheelchair-ultimate/rollstuhl-frisbee-handshake.jpg" alt="Rollstuhl Frisbee" class="h-full w-full rounded-xl object-cover" />
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
