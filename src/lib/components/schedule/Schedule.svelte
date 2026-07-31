<script lang="ts">
	import type { ScheduleData } from '$lib/data/types';
	import type { Snippet } from 'svelte';
	import { getLocaleForUrl } from '$lib/locale';
	import Button from '$lib/components/ui/button/button.svelte';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';

	let { schedule, children }: { schedule: ScheduleData; children?: Snippet } = $props();

	const locale = $derived(getLocaleForUrl());

	const dayNames: Record<string, string> = $derived.by(() => {
		void locale;
		return {
			Samstag: 'Samstag',
			Sonntag: 'Sonntag'
		};
	});

	const participatePath = $derived(locale ? `/${locale}/mitmachen` : '/mitmachen');
</script>

<div class="container-custom">
	<h3 class="uppercase">Programm</h3>
	{#if children}<p>{@render children()}</p>{/if}
	<ul class="mb-4">
		<li class="flex items-center gap-2">
			<span class="flex size-2 rounded-full bg-foreground"></span>
			<strong>Anschauen</strong>
		</li>
		<li class="flex items-center gap-2">
			<span class="flex size-2 rounded-full bg-primary"></span>
			<strong class="text-primary">Mitmachen</strong>
		</li>
	</ul>
	<div class="grid gap-8 lg:grid-cols-2">
		{#each Object.entries(schedule) as [day, events] (day)}
			{#if events.length > 0}
				<ul class="grid grid-cols-[auto_1fr] gap-x-4">
					<li class="col-span-full grid grid-cols-subgrid">
						<h5 class="col-start-2 uppercase">{dayNames[day] ?? day}</h5>
					</li>
					{#each events as event (event.time + event.label)}
						<li
							class="col-span-full mb-1 grid grid-cols-subgrid border-b border-solid pb-1 last:border-none"
						>
							<div class="whitespace-nowrap {event.type === 'workshop' ? 'text-primary' : ''}">
								{event.time}
							</div>
							<div class="flex flex-col gap-1">
								{#if event.place}
									<span class="text-xs font-semibold tracking-wide text-orange-500 uppercase"
										>{event.place}</span
									>
								{/if}
								<strong class={event.type === 'workshop' ? 'text-primary' : ''}>
									{event.label}
								</strong>
								{#if event.type === 'workshop' && event.id}
									<Button href="{participatePath}#{event.id}" class="self-start"
										>Mehr <ChevronRight /></Button
									>
								{:else if event.description}
									<span class="text-sm text-muted-foreground">{event.description}</span>
								{/if}
							</div>
						</li>
					{/each}
				</ul>
			{/if}
		{/each}
	</div>
</div>
