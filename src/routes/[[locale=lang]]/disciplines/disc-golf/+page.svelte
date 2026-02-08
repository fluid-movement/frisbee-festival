<script lang="ts">
	import Grid from '$lib/components/Grid.svelte';
	import festivalImage from '$lib/assets/home/festival.jpg';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Image from '$lib/components/Image.svelte';
	import Schedule from '$lib/components/Schedule.svelte';
	import { getSchedule } from '$lib/data/schedules';
	import { page } from '$app/state';

	const scheduleData = $derived.by(() => { page.url; return getSchedule('disc-golf'); });
</script>

<Grid>
	<article>
		<Badge variant="outline">Präzision und Konzentration</Badge>
		<h1 class="uppercase">Disc Golf</h1>
		<p>
			In hac habitasse platea dictumst. Donec sodales, lectus vitae cursus sollicitudin, arcu risus
			vulputate tortor, id ullamcorper justo eros at lectus. Nullam et dignissim lectus. Nullam
			metus lorem, ullamcorper sit amet mattis a, hendrerit et sem.
		</p>
	</article>
	<Image src={festivalImage} alt="Comunity" />
</Grid>

<Schedule schedule={scheduleData.schedule} />
