<script lang="ts">
	import Grid from '$lib/components/layout/Grid.svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Schedule from '$lib/components/schedule/Schedule.svelte';
	import { getSchedule } from '$lib/data/schedules';
	import { getLocaleForUrl } from '$lib/locale';
	import { Wind } from '@lucide/svelte/icons';
	import ogImage from '$lib/assets/home/festival.jpg';
	import { PUBLIC_ORIGIN } from '$env/static/public';
	import { page } from '$app/state';

	const locale = $derived(getLocaleForUrl());

	const scheduleData = $derived.by(() => {
		void locale;
		return getSchedule('freestyle');
	});
</script>

<svelte:head>
	<title>Freestyle Frisbee WM | Frisbee Festival München</title>
	<meta name="description" content="Die Freestyle Frisbee Weltmeisterschaft in München: Akrobatik, Tricks und Teamwork auf höchstem Niveau. 1.–2. August 2026 in der Sportschule Oberhaching." />
	<link rel="canonical" href="{PUBLIC_ORIGIN}{page.url.pathname}" />
	<meta property="og:title" content="Freestyle Frisbee WM | Frisbee Festival München" />
	<meta property="og:description" content="Die Freestyle Frisbee Weltmeisterschaft in München: Akrobatik, Tricks und Teamwork auf höchstem Niveau. 1.–2. August 2026 in der Sportschule Oberhaching." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{PUBLIC_ORIGIN}{page.url.pathname}" />
	<meta property="og:site_name" content="Frisbee Festival München" />
	<meta property="og:image" content="{PUBLIC_ORIGIN}{ogImage}" />
	<meta property="og:locale" content={locale === 'en' ? 'en_US' : 'de_DE'} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

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
		<h5>Kunst in Bewegung</h5>
		<p>
			Im Kern geht es beim Freestyle darum, die rotierende Scheibe durch technisch anspruchsvolle
			Tricks zu manipulieren. Die Basis fast aller Manöver ist der Nail Delay: Die Scheibe rotiert
			auf dem Fingernagel. Spieler:innen kombinieren kontrollierte Manipulationen der Frisbee mit
			Kicks, Körperdrehungen und spektakulären Catches. Ob solo oder im Team – beim Freestyle zählt
			der „Flow“. Es ist ein Spiel mit der Physik, bei dem Wind und Eigenrotation genutzt werden, um
			unmögliche Flugbahnen zu kreieren. Es geht nicht nur um Schwierigkeit, sondern auch um den
			persönlichen Stil und die akrobatische Leichtigkeit.
		</p>
		<h5>Kreativität & Teamwork</h5>
		<p>
			Im Freestyle gibt es keine Grenzen. Teams verschmelzen zu einer Einheit, in der jeder Trick
			auf dem nächsten aufbaut – so präzise wie ein modernes Ballett. Diese Freiheit macht Freestyle
			zur individuellsten und kreativsten Disziplin des Frisbeesports.
		</p>
		<h5>Die Weltmeisterschaften in München</h5>
		<p>
			Wenn die globale Elite bei der Weltmeisterschaft in München zusammenkommt, verwandelt sich das
			Spielfeld in eine Bühne für sportliche Höchstleistungen. In choreografierten Routinen treten
			die Athlet:innen zur Musik an, wobei eine Fachjury die Darbietungen nach strengen Kriterien
			bewertet. Dabei fließen die technische Schwierigkeit der Manöver, die Sicherheit in der
			Ausführung sowie die künstlerische Präsentation und Musikalität in die Wertung ein. Diese
			Weltmeisterschaften sind jedoch weit mehr als ein reiner Wettkampf: Sie sind das pulsierende
			Zentrum einer leidenschaftlichen Community, in der Innovationen gefeiert werden und der
			„Spirit of the Game“ – der Respekt und die Freude am gemeinsamen Spiel – stets an erster
			Stelle steht.
		</p>
	</article>
	<enhanced:img
		src="$lib/assets/home/festival.jpg"
		alt="Community"
		class="h-full w-full rounded-xl object-cover"
	/>
</Grid>

<Schedule schedule={scheduleData.schedule} />

<section class="container-custom">
	<h5>Freestyle Patrons</h5>
	<p>
		Diese Weltmeisterschaften leben vom Spirit unserer Community – wir danken unseren Patrons
		herzlich für ihre wertvolle Unterstützung, die diesen Sport erst zum Fliegen bringt.
	</p>
	<ul>
		<li>Paul Kenny</li>
		<li>Larry Imperiale</li>
		<li>Waldemar “Wowa” Wagner</li>
	</ul>
</section>
