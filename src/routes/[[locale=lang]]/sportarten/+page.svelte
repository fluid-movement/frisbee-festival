<script lang="ts">
	import { resolve } from '$app/paths';
	import { type RouteId } from '$app/types';
	import Grid from '$lib/components/layout/Grid.svelte';
	import { getLocaleForUrl } from '$lib/locale';
	import type { Picture } from 'vite-imagetools';
	import { PUBLIC_ORIGIN } from '$env/static/public';
	import { page } from '$app/state';
	import ogImage from '$lib/assets/freestyle/edo-gitis.png';
	import freestyleImage from '$lib/assets/freestyle/edo-gitis.png?enhanced';
	import discGolfImage from '$lib/assets/disc-golf/putt.jpg?enhanced';
	import ddcImage from '$lib/assets/ddc/Scheibenerwachen-197.jpg?enhanced';
	import ultimateImage from '$lib/assets/ultimate/ultimate-jump.jpg?enhanced';
	import wheelchairUltimateImage from '$lib/assets/wheelchair-ultimate/rollstuhl-frisbee-handshake.jpg?enhanced';
</script>

<svelte:head>
	<title>Die Sportarten | Frisbee Festival München</title>
	<meta name="description" content="Fünf Frisbee-Disziplinen auf einen Blick: Freestyle, Disc Golf, Double Disc Court, Ultimate und Rollstuhl Ultimate – live beim Frisbee Festival München am 1.–2. August 2026." />
	<link rel="canonical" href="{PUBLIC_ORIGIN}{page.url.pathname}" />
	<meta property="og:title" content="Die Sportarten | Frisbee Festival München" />
	<meta property="og:description" content="Fünf Frisbee-Disziplinen auf einen Blick: Freestyle, Disc Golf, Double Disc Court, Ultimate und Rollstuhl Ultimate – live beim Frisbee Festival München am 1.–2. August 2026." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{PUBLIC_ORIGIN}{page.url.pathname}" />
	<meta property="og:site_name" content="Frisbee Festival München" />
	<meta property="og:image" content="{PUBLIC_ORIGIN}{ogImage}" />
	<meta property="og:locale" content={getLocaleForUrl() === 'en' ? 'en_US' : 'de_DE'} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

{#snippet card(title: string, href: Extract<RouteId, `/[[locale=lang]]${string}`>, image: Picture | string)}
	<a href={resolve(href, { locale: getLocaleForUrl() })} class="group">
		<div class="relative aspect-square overflow-hidden rounded-xl">
			<enhanced:img
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
	{@render card('Freestyle Frisbee', '/[[locale=lang]]/(disciplines)/freestyle', freestyleImage)}
	{@render card('Disc Golf', '/[[locale=lang]]/(disciplines)/disc-golf', discGolfImage)}
	{@render card('Double Disc Court', '/[[locale=lang]]/(disciplines)/double-disc-court', ddcImage)}
	{@render card('Ultimate Frisbee', '/[[locale=lang]]/(disciplines)/ultimate', ultimateImage)}
	{@render card(
		'Rollstuhl Ultimate Frisbee',
		'/[[locale=lang]]/(disciplines)/wheelchair-ultimate',
		wheelchairUltimateImage
	)}
</Grid>
