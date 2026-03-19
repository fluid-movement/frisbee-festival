<script lang="ts">
	import Grid from '$lib/components/layout/Grid.svelte';
	import mainImage from '$lib/assets/disc-golf/disc-golf-cropped.jpg';
	import puttImage from '$lib/assets/disc-golf/putt.jpg';
	import walkingImage from '$lib/assets/disc-golf/walking.jpg';
	import throwImage from '$lib/assets/disc-golf/throw.jpg';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Image from '$lib/components/shared/Image.svelte';
	import Schedule from '$lib/components/schedule/Schedule.svelte';
	import { getSchedule } from '$lib/data/schedules';
	import { getLocaleForUrl } from '$lib/locale';
	import { Target } from '@lucide/svelte/icons';

	const locale = $derived(getLocaleForUrl());

	const scheduleData = $derived.by(() => {
		void locale;
		return getSchedule('disc-golf');
	});
</script>

<Grid>
	<article>
		<Badge class="mb-4" variant="outline">Präzision und Konzentration</Badge>
		<div class="flex gap-2">
			<Target size="38" class="mb-4 text-disc-golf" />
			<h1 class="uppercase">Disc Golf</h1>
		</div>
		<p>
			Discgolf verbindet die Präzision des Golfsports mit der Dynamik der Frisbee. Statt Ball und
			Schläger werden spezielle Wurfscheiben verwendet, die mit möglichst wenigen Würfen in ein Ziel
			– einen Fangkorb – gespielt werden. Dabei gilt es, Technik, Wurfstärke und ein gutes Auge zu
			kombinieren. Ein Discgolfkurs hat in der Regel 18 Bahnen. Jede Bahn hat einen festgelegten
			Abwurfpunkt. Nach dem ersten Wurf spielt man von da weiter, wo die Disc liegengeblieben ist.
			Dies macht man so lange, bis die Disc in dem Fangkorb zur Ruhe gekommen ist.
		</p>
		<h5>Was für ein Discgolf-Turnier findet beim Frisbee Festival statt?</h5>
		<p>
			Im Rahmen des Frisbee Festivals organisiert der Disc Golf München e.V. zum dritten Mal ein
			großes Turnier in der Sportschule Oberhaching. Den Auftakt machten die Bayerischen Disc Golf
			Meisterschaften 2024, ehe es im letzten Jahr zur Premiere vom Campustreffen kam. Dieses wird
			nun in seine zweite Ausgabe gehen. Das Campustreffen ist ein Turnier der Serie “German Disc
			Golf Tour South”. Zu den Teilnehmer*innen gehören einige der besten Spieler*innen
			Deutschlands. Gespielt wird in acht Altersdivisionen über drei Runden zu je 18 Bahnen. Wer
			über die drei Tage die wenigsten Würfe benötigt hat, gewinnt.
		</p>
		<h5>Wo kann ich Discgolf selbst ausprobieren?</h5>
		<p>
			Hier in der Sportschule! Entweder gleich heute an dem Stand von Disc Golf München e.V., oder
			das ganze Jahr über auf dem für die Öffentlichkeit zugänglichen Kurs. An der Rezeption
			bekommst du eine Tageskarte (6€) und Leihscheiben.
		</p>
	</article>
	<Image src={mainImage} alt="Disc Golf" />
</Grid>

<Schedule schedule={scheduleData.schedule} />

<div class="container-custom grid gap-4 md:grid-cols-3">
	<Image src={puttImage} alt="Disc Golf Putt" />
	<Image src={walkingImage} alt="Disc Golf Community" />
	<Image src={throwImage} alt="Disc Golf far throw" />
</div>
