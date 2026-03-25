<script lang="ts">
	import Grid from '$lib/components/layout/Grid.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Schedule from '$lib/components/schedule/Schedule.svelte';
	import { getSchedule } from '$lib/data/schedules';
	import { getLocaleForUrl } from '$lib/locale';
	import { Wind } from '@lucide/svelte/icons';

	const locale = $derived(getLocaleForUrl());

	const scheduleData = $derived.by(() => {
		void locale;
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
			Freestyle Frisbee ist die spektakuläre Verschmelzung von Akrobatik, Tanz und Präzision. Zu
			packenden Beats zeigen die Athleten choreografierte Shows, die die Schwerkraft scheinbar
			aufheben. Ein mitreißendes Erlebnis, das Sport und Kunst perfekt vereint.
		</p>

		<h5>Kunst der Bewegung</h5>

		<p>
			Im Kern geht es beim Freestyle darum, die rotierende Scheibe durch technisch anspruchsvolle
			Tricks zu manipulieren. Die Basis fast aller Manöver ist der Nail Delay: Die Scheibe rotiert
			auf dem Fingernagel. Spieler:innen kombinieren kontrollierte Manipulationen der Frisbee mit
			Kicks, Körperdrehungen und spektakulären Catches. Ob solo oder im Team – beim Freestyle zählt
			der „Flow“. Es ist ein Spiel mit der Physik, bei dem Wind und Eigenrotation genutzt werden, um
			unmögliche Flugbahnen zu kreieren. Es geht nicht nur um Schwierigkeit, sondern auch um den
			persönlichen Stil und die akrobatische Leichtigkeit.
		</p>

		<h5>Teamwork und Kreativität</h5>

		<p>
			Im Freestyle gibt es keine Grenzen. Teams verschmelzen zu einer Einheit, in der jeder Trick
			auf dem nächsten aufbaut – so präzise wie ein modernes Ballett. Diese Freiheit macht Freestyle
			zur individuellsten und kreativsten Disziplin des Frisbeesports.
		</p>
	</article>
	<enhanced:img src="$lib/assets/home/festival.jpg" alt="Community" class="h-full w-full rounded-xl object-cover" />
</Grid>

<Schedule schedule={scheduleData.schedule}>
	An diesem Wochenende findet die Weltmeisterschaft im Freestyle Frisbee auf dem Festivalgelände
	statt!
</Schedule>

<section class="container-custom">
  <h5>Freestyle Patrons</h5>
  <p>
  	Diese Weltmeisterschaften leben vom Spirit unserer Community – wir danken unseren Patrons herzlich
  	für ihre wertvolle Unterstützung, die diesen Sport erst zum Fliegen bringt.
  </p>
  <ul>
  	<li>Paul Kenny</li>
  	<li>Larry Imperiale</li>
  	<li>Waldemar “Wowa” Wagner</li>
  </ul>  
</section>
