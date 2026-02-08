<script>
	import Banner from '$lib/components/Banner.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import ImageWithText from '$lib/components/ImageWithText.svelte';
	import festivalImage from '$lib/assets/home/festival.jpg';
	import * as Card from '$lib/components/ui/card';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Clock from '@lucide/svelte/icons/clock';
</script>

<ImageWithText src={festivalImage} height="h-[60vh]">
	<div class="text-center text-white">
		<h1 class="container-custom mb-12">Willkommen zum Frisbee-Festival</h1>
		<p>1.-2. August 2026</p>
		<p>Sportschule Oberhaching</p>
	</div>
</ImageWithText>

<article class="container-custom">
	<Badge variant="outline" class="mx-auto mb-2 block">Die Welt der Scheibe</Badge>
	<h2 class="mb-8 text-center uppercase">Disziplinen und Turniere</h2>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each ['Ultimate', 'Disc Golf', 'Freestyle', 'Double Disc Court', 'Wheelchair Ultimate'] as item (item)}
			<Card.Root class="relative min-h-100 overflow-hidden p-0">
				<img src={festivalImage} alt={item} class="absolute inset-0 h-full w-full object-cover" />
				<div class="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20"></div>
				<Badge class="absolute top-4 left-4 z-10">{item}</Badge>
				<div class="relative z-10 flex h-full flex-col justify-end p-6 text-white">
					<Card.Title class="text-primary-background mb-3">{item}</Card.Title>
					<Card.Description class="text-primary-background mb-0 text-sm/6">
						In hac habitasse platea dictumst. Donec sodales, lectus vitae cursus sollicitudin, arcu
						risus vulputate tortor, id ullamcorper justo eros at lectus. Nullam et dignissim lectus.
						Nullam metus lorem, ullamcorper sit amet mattis a, hendrerit et sem.
						<div class="mt-2 flex items-center text-center">
							<Clock class="mr-2 h-4 w-4" /><span>Saturday 10:00 - 16:00</span>
						</div>
					</Card.Description>
				</div>
			</Card.Root>
		{/each}
	</div>
</article>

<Banner>
	<div class="min-h-100 rounded-md bg-gray-200"></div>
</Banner>

<article class="container-custom">
	<Badge variant="outline" class="mx-auto mb-2 block">Mach mit</Badge>
	<h2 class="mb-8 text-center uppercase">Sei Teil des Festivals</h2>
	<Grid>
		<Card.Root class="bg-card-foreground text-card">
			<Card.Content>
				<h4>Eine Community, die gemeinsames Wachstum fördert</h4>
				<p>
					Wir glauben an den Aufbau einer unterstützenden Gemeinschaft, in der sich Spieler
					gegenseitig ermutigen, Wissen teilen und gemeinsam Erfolge feiern. Unser Sport ist mehr
					als nur ein Spiel – er ist eine Familie.
				</p>
			</Card.Content>
		</Card.Root>
		<img src={festivalImage} alt="Community" class="rounded-xl object-contain" />
	</Grid>
</article>
