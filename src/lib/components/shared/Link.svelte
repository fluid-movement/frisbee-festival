<script lang="ts">
	import { resolve } from '$app/paths';
	import type { RouteId } from '$app/types';
	import type { Snippet } from 'svelte';
	import { getLocaleForUrl } from '$lib/locale';

	let {
		class: className = '',
		href,
		children
	}: {
		class?: string;
		href: Extract<RouteId, `/[[locale=lang]]${string}`>;
		children: Snippet;
	} = $props();
</script>

<a href={resolve(href, { locale: getLocaleForUrl() })} class={className}>
	{@render children()}
</a>
