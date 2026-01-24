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
	<img {src} {alt} class={cn('h-full w-full rounded-md object-cover', className)} />
{:else}
	<div class={cn('flex h-full w-full items-center justify-center rounded-md bg-gray-200 text-gray-500', className)}>
		<span>No Image</span>
	</div>
{/if}