<script lang="ts">
	import BackButton from '$lib/components/disciplines/BackButton.svelte';
 	import type { LayoutProps } from './../../../$types';

  let { children }: LayoutProps = $props();
</script>

<BackButton />
{@render children()}