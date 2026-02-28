<script lang="ts">
	import type { RouteId } from '$app/types';
	import type { Snippet } from 'svelte';
	import Link from './Link.svelte';

	let {
		href,
		children
	}: { href: Extract<RouteId, `/[[locale=lang]]${string}`>; children: Snippet } = $props();
</script>

<Link class="transition-colors hover:text-white" {href}>{@render children()}</Link>
