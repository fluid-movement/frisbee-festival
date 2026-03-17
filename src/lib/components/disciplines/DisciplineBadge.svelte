<script lang="ts">
	import type { DisciplineId } from '$lib/data/types';
	import { Users, Accessibility, Target, Wind, Trophy } from '@lucide/svelte/icons';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { tv } from 'tailwind-variants';
	import type { Component } from 'svelte';

	let { disciplineId }: { disciplineId: DisciplineId } = $props();

	const badge = tv({
		base: 'text-white border-transparent',
		variants: {
			discipline: {
				ultimate: 'bg-ultimate',
				'wheelchair-ultimate': 'bg-wheelchair-ultimate',
				'disc-golf': 'bg-disc-golf',
				freestyle: 'bg-freestyle',
				'double-disc-court': 'bg-ddc'
			}
		}
	});

	const configs: Record<DisciplineId, { label: string; Icon: Component }> = {
		ultimate: { label: 'Ultimate', Icon: Users },
		'wheelchair-ultimate': { label: 'Rollstuhl Ultimate', Icon: Accessibility },
		'disc-golf': { label: 'Disc Golf', Icon: Target },
		freestyle: { label: 'Freestyle', Icon: Wind },
		'double-disc-court': { label: 'Double Disc Court', Icon: Trophy }
	};

	const { label, Icon } = $derived(configs[disciplineId]);
</script>

<Badge class={badge({ discipline: disciplineId })}>
	<Icon />
	{label}
</Badge>
