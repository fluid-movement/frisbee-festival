<script lang="ts">
	import type { EventType } from '$lib/data/types';
	import { Medal, BookOpen, Sparkles } from '@lucide/svelte/icons';
	import Button from '$lib/components/ui/button/button.svelte';
	import { tv } from 'tailwind-variants';
	import type { Component } from 'svelte';

	let { eventType, showText = true, inactive = false, active = false, onclick }: {
		eventType: EventType;
		showText?: boolean;
		inactive?: boolean;
		active?: boolean;
		onclick?: () => void;
	} = $props();

	const badge = tv({
		base: 'cursor-pointer bg-transparent border transition-opacity',
		variants: {
			type: {
				tournament: 'border-event-tournament text-event-tournament',
				workshop: 'border-event-workshop text-event-workshop',
				exhibition: 'border-event-exhibition text-event-exhibition'
			},
			inactive: {
				true: 'opacity-40'
			},
			active: {
				true: 'ring-2 ring-offset-2 ring-current'
			}
		}
	});

	const configs: Record<EventType, { label: string; Icon: Component }> = {
		tournament: { label: 'Turnier', Icon: Medal },
		workshop: { label: 'Workshop', Icon: BookOpen },
		exhibition: { label: 'Exhibition', Icon: Sparkles }
	};
</script>

{#snippet typeBadge(type: EventType)}
	{@const { label, Icon } = configs[type]}
	<Button class={badge({ type, inactive, active })} size={showText ? 'default' : 'icon-sm'} {onclick}>
		<Icon />
		{#if showText}{label}{/if}
	</Button>
{/snippet}

{@render typeBadge(eventType)}
