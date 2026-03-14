<script lang="ts">
	import { resolve } from '$app/paths';
	import { type RouteId } from '$app/types';
	import Grid from '$lib/components/Grid.svelte';
	import { getLocaleForUrl } from '$lib/locale';
	import freestyleImage from '$lib/assets/freestyle/edo-gitis.png';
	import discGolfImage from '$lib/assets/disc-golf/putt.jpg';
	import ddcImage from '$lib/assets/ddc/ddc-gallery-3.jpg'
	import ultimateImage from '$lib/assets/ultimate/ultimate-jump.jpg';
	import wheelchairUltimateImage from '$lib/assets/wheelchair-ultimate/rollstuhl-frisbee-handshake.jpg';
</script>

{#snippet card(title: string, href: Extract<RouteId, `/[[locale=lang]]${string}`>, image: string)}
	<a href={resolve(href, { locale: getLocaleForUrl() })} class="group">
		<div class="relative aspect-square overflow-hidden rounded-xl">
			<img
				src={image}
				alt={title}
				class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-102"
			/>
			<div
				class="absolute right-0 bottom-0 left-0 mask-[linear-gradient(to_top,black_50%,transparent)] px-4 pt-16 backdrop-blur-md"
			>
				<h3 class="text-center text-white uppercase drop-shadow-sm">{title}</h3>
			</div>
		</div>
	</a>
{/snippet}

<h1 class="container-custom mb-12 text-center">Die Sportarten</h1>
<Grid>
	<div class="hidden flex-col items-center justify-center md:flex">
		<h5>Entdecke die vielseitigen Frisbee-Sportarten</h5>
	</div>
	{@render card(
		'Freestyle Frisbee',
		'/[[locale=lang]]/disciplines/(disciplines)/freestyle',
		freestyleImage
	)}
	{@render card('Disc Golf', '/[[locale=lang]]/disciplines/(disciplines)/disc-golf', discGolfImage)}
	{@render card(
		'Double Disc Court',
		'/[[locale=lang]]/disciplines/(disciplines)/double-disc-court',
		ddcImage
	)}
	{@render card('Ultimate', '/[[locale=lang]]/disciplines/(disciplines)/ultimate', ultimateImage)}
	{@render card(
		'Rollstuhl Ultimate',
		'/[[locale=lang]]/disciplines/(disciplines)/wheelchair-ultimate',
		wheelchairUltimateImage
	)}
</Grid>
