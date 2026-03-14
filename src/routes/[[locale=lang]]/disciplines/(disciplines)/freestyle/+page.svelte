<script lang="ts">
	import Grid from '$lib/components/Grid.svelte';
	import festivalImage from '$lib/assets/home/festival.jpg';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Image from '$lib/components/Image.svelte';
	import Schedule from '$lib/components/Schedule.svelte';
	import { getSchedule } from '$lib/data/schedules';
	import { page } from '$app/state';
	import { Wind } from '@lucide/svelte/icons';

	const scheduleData = $derived.by(() => {
		page.url;
		return getSchedule('freestyle');
	});
</script>

<Grid>
	<article>
		<Badge class="mb-4" variant="outline">Jetzt wirds kreativ</Badge>
		<div class="flex gap-2">
			<Wind size="38" class="text-freestyle" />
			<h1 class="uppercase">Freestyle Frisbee</h1>
		</div>
		<p>
			Freestyle Frisbee ist die Kunst, mit der Wurfscheibe kreative und artistische Moves zu zeigen.
			Die zur Musik choreografierten Shows vereinen die Eleganz von Tanz und Gymnastik mit dem Spiel
			von Werfen und Fangen. Ein spektakuläres, vielseitiges und mitreißendes Erlebnis für Publikum
			und Teilnehmer gleichermaßen.
		</p>
		
		<h5>Kunst der Bewegung</h5>
		
		<p>
			Was Freestyle Frisbee so besonders macht, ist die perfekte Verschmelzung von Sport, Tanz und
			Artistik. Jeder Wurf, jeder Fang wird zur künstlerischen Ausdrucksform. Die Scheibe wird unter
			dem Bein hindurch geworfen, hinter dem Rücken gefangen oder mit den Fingernägeln balanciert.
			Spieler vollführen Sprünge, Rollen und sogar Saltos, während die Frisbee durch die Luft
			gleitet. Die Synchronisation zwischen den Teammitgliedern muss dabei perfekt sein – wie bei
			einem Pas de Deux im Ballett.
		</p>
		
		<h5>Teamwork und Kreativität</h5>
		
		<p>
			Im Freestyle Frisbee verschmelzen die Spieler zu einer Einheit. Jede Bewegung ist aufeinander
			abgestimmt, jeder Trick baut auf dem vorherigen auf. Die besten Teams entwickeln ihren eigenen
			Stil und erfinden ständig neue Kombinationen. Die Kreativität kennt dabei keine Grenzen: Von
			eleganten, fließenden Bewegungen bis zu explosiven, kraftvollen Tricks ist alles möglich.
			Diese kreative Freiheit macht Freestyle Frisbee zu einer der individuellsten Sportarten
			überhaupt.
		</p>
	</article>
	<Image src={festivalImage} alt="Comunity" />
</Grid>

<Schedule schedule={scheduleData.schedule}>
  An diesem Wochenende findet die Weltmeisterschaft im Freestyle Frisbee auf dem Festivalgelände statt!
</Schedule>
