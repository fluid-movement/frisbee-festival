<script lang="ts">
	import ogImage from '$lib/assets/home/sportschule.webp';
	import { PUBLIC_ORIGIN } from '$env/static/public';
	import { page } from '$app/state';
	import { getLocaleForUrl } from '$lib/locale';
	import Hero from '$lib/components/home/Hero.svelte';
	import Disciplines from '$lib/components/home/Disciplines.svelte';
	import Venue from '$lib/components/home/Venue.svelte';
	import Community from '$lib/components/home/Community.svelte';
	import Sponsors from '$lib/components/home/Sponsors.svelte';
	import { Button } from '$lib/components/ui/button';
	import { resolve } from '$app/paths';
	import Trophy from '@lucide/svelte/icons/trophy';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';

	const locale = $derived(getLocaleForUrl());
</script>

<svelte:head>
	<title>Frisbee Festival München 2026 | 1. & 2. August</title>
	<meta
		name="description"
		content="Erlebe fünf Frisbee-Disziplinen live in München: Freestyle-WM, Disc Golf, Double Disc Court, Ultimate & Rollstuhl Ultimate. 1.–2. August 2026 in Oberhaching."
	/>
	<link rel="canonical" href="{PUBLIC_ORIGIN}{page.url.pathname}" />
	<meta property="og:title" content="Frisbee Festival München 2026 | 1. & 2. August" />
	<meta
		property="og:description"
		content="Erlebe fünf Frisbee-Disziplinen live in München: Freestyle-WM, Disc Golf, Double Disc Court, Ultimate & Rollstuhl Ultimate. 1.–2. August 2026 in Oberhaching."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{PUBLIC_ORIGIN}{page.url.pathname}" />
	<meta property="og:site_name" content="Frisbee Festival München" />
	<meta property="og:image" content="{PUBLIC_ORIGIN}{ogImage}" />
	<meta property="og:locale" content={locale === 'en' ? 'en_US' : 'de_DE'} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Hero />
<section class="container-custom flex flex-col items-center gap-3">
	<p class="my-0 text-sm text-muted-foreground">
		Das Festival ist vorbei – hier sind die Ergebnisse.
	</p>
	<Button href={resolve('/[[locale=lang]]/ergebnisse', { locale: getLocaleForUrl() })} size="lg">
		<Trophy />
		Zu den Ergebnissen
		<ChevronRight />
	</Button>
</section>
<Disciplines />
<Venue />
<Community />
<Sponsors />
