<script lang="ts">
	import Grid from '$lib/components/Grid.svelte';
	import festivalImage from '$lib/assets/home/festival.jpg';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Image from '$lib/components/Image.svelte';
	import Schedule from '$lib/components/Schedule.svelte';
	import { getSchedule } from '$lib/data/schedules';
	import { page } from '$app/state';

	const scheduleData = $derived.by(() => { page.url; return getSchedule('ultimate'); });
</script>

<Grid>
	<article>
		<Badge variant="outline">Teamgeist und Strategie</Badge>
		<h1 class="uppercase">Ultimate</h1>
		<p>
			In hac habitasse platea dictumst. Donec sodales, lectus vitae cursus sollicitudin, arcu risus
			vulputate tortor, id ullamcorper justo eros at lectus. Nullam et dignissim lectus. Nullam
			metus lorem, ullamcorper sit amet mattis a, hendrerit et sem.
		</p>
		<p>
			Wir glauben an den Aufbau einer unterstützenden Gemeinschaft, in der sich Spieler gegenseitig
			ermutigen, Wissen teilen und gemeinsam Erfolge feiern. Unser Sport ist mehr als nur ein Spiel
			– er ist eine Familie.
		</p>
	</article>
	<Image src={festivalImage} alt="Comunity" />
</Grid>

<Schedule schedule={scheduleData.schedule} />
