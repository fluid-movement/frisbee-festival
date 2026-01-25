<script lang="ts">
	import { resolve } from '$app/paths';
	import { type RouteId } from '$app/types';
	import Grid from '$lib/components/Grid.svelte';
	import { getLocaleForUrl } from '$lib/locale';
</script>

{#snippet card(title: string, href: RouteId)}
	<a href={resolve(href, {locale: getLocaleForUrl()})}>
		<div
			class="flex min-h-100 items-center justify-center rounded-md bg-stone-200 transition-all duration-500 ease-in-out hover:scale-102 hover:bg-stone-300"
		>
			<h2>{title}</h2>
		</div>
	</a>
{/snippet}

<h1 class="container-custom mb-12 text-center">Die Sportarten</h1>
<Grid>
	<div class="flex flex-col items-center justify-center">
	  <h2>Title text</h2>
	</div>
	{@render card('Freestyle Frisbee', '/[[locale=lang]]/disciplines/freestyle')}
	{@render card('Disc Golf', '/[[locale=lang]]/disciplines/disc-golf')}
	{@render card('Double Disc Court', '/[[locale=lang]]/disciplines/double-disc-court')}
</Grid>
