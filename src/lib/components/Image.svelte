<script lang="ts">
    import { cn } from '$lib/utils';

    let {
		src,
		alt,
		class: className = ''
	}: {
		src: string | null | undefined;
		alt: string | null | undefined;
		class?: string;
	} = $props();
</script>

{#if src}
	<img {src} {alt} class={cn('h-full w-full rounded-xl object-cover', className)} />
{/if}