<script lang="ts">
	import type { ScheduleData } from '$lib/data/types';
	import { page } from '$app/state';

	interface Props {
		schedule: ScheduleData;
	}

	let { schedule }: Props = $props();

	const dayNames: Record<string, string> = $derived.by(() => {
		page.url;
		return {
			Samstag: 'Samstag',
			Sonntag: 'Sonntag'
		};
	});
</script>

<div class="container-custom">
	<ul class="mb-4">
		<li class="flex items-center gap-2">
			<span class="flex size-2 rounded-full bg-foreground"></span>
			<strong>Anschauen</strong>
		</li>
		<li class="flex items-center gap-2">
			<span class="flex size-2 rounded-full bg-primary"></span>
			<strong>Mitmachen</strong>
		</li>
	</ul>
	<div class="grid gap-8 lg:grid-cols-2">
		{#each Object.entries(schedule) as [day, events] (day)}
			<div>
				<h3 class="uppercase">{dayNames[day] ?? day}</h3>
				<ul>
					{#each events as event (event.time)}
						<li class="grid grid-cols-[min-content_1fr] gap-x-4 pb-1 mb-1 border-b border-solid last:border-none">
							<div class="whitespace-nowrap {event.type === 'workshop' ? 'text-primary' : ''}">
								{event.time}
							</div>
							<div class="flex flex-col gap-1">
								<strong class={event.type === 'workshop' ? 'text-primary' : ''}>
									{event.label}
								</strong>
								{#if event.description}
									<span class="text-sm text-muted-foreground">{event.description}</span>
								{/if}
							</div>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</div>
