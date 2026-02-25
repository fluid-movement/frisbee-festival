<script lang="ts">
	import type { DisciplineId } from '$lib/data/types';
	import { Users, Accessibility, Target, Wind } from '@lucide/svelte/icons';
	import Button from '$lib/components/ui/button/button.svelte';
	import { tv } from 'tailwind-variants';
	import type { Component } from 'svelte';

	let { disciplineId, showText = true, inactive = false, onclick }: {
		disciplineId: DisciplineId;
		showText?: boolean;
		inactive?: boolean;
		onclick?: () => void;
	} = $props();

	const badge = tv({
		base: 'text-white transition-opacity',
		variants: {
			discipline: {
				ultimate: 'bg-ultimate',
				'wheelchair-ultimate': 'bg-wheelchair-ultimate',
				'disc-golf': 'bg-disc-golf',
				freestyle: 'bg-freestyle',
				'double-disc-court': 'bg-ddc'
			},
			inactive: {
				true: 'opacity-40'
			}
		}
	});

	const configs: Record<DisciplineId, { label: string; Icon: Component }> = {
		ultimate: { label: 'Ultimate', Icon: Users },
		'wheelchair-ultimate': { label: 'Rollstuhl Ultimate', Icon: Accessibility },
		'disc-golf': { label: 'Disc Golf', Icon: Target },
		freestyle: { label: 'Freestyle', Icon: Wind },
		'double-disc-court': { label: 'Double Disc Court', Icon: Accessibility }
	};
</script>

{#snippet disciplineBadge(id: DisciplineId)}
	{@const { label, Icon } = configs[id]}
	<Button class={badge({ discipline: id, inactive })} size={showText ? 'default' : 'icon-sm'} {onclick}>
		<Icon />
		{#if showText}{label}{/if}
	</Button>
{/snippet}

{@render disciplineBadge(disciplineId)}
