<script lang="ts">
	import * as NavigationMenu from '$lib/components/ui/navigation-menu';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import { cn } from '$lib/utils.ts';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { RouteId } from '$app/types';
	import { getLocaleForUrl } from '$lib/locale';
	import { resolve } from '$app/paths';
	import festivalImage from '$lib/assets/home/festival.jpg';

	let { inverted = false }: { inverted?: boolean } = $props();

	const linkClass = $derived(
		cn(
			navigationMenuTriggerStyle(),
			inverted &&
				'bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white'
		)
	);

	type ListItemProps = Omit<HTMLAttributes<HTMLAnchorElement>, 'href'> & {
		title: string;
		routeId: RouteId;
		content: string;
	};
</script>

{#snippet ListItem({ title, content, routeId, class: className, ...restProps }: ListItemProps)}
	<li>
		<NavigationMenu.Link>
			{#snippet child()}
				<a
					href={resolve(routeId as '/[[locale=lang]]', { locale: getLocaleForUrl() })}
					class={cn(
						'block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...restProps}
				>
					<div class="text-sm leading-none font-medium">{title}</div>
					<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{content}
					</p>
				</a>
			{/snippet}
		</NavigationMenu.Link>
	</li>
{/snippet}

<NavigationMenu.Root viewport={false} class="hidden md:block">
	<NavigationMenu.List>
		<!-- Simple nav items -->
		<NavigationMenu.Item>
			<NavigationMenu.Link>
				{#snippet child()}
					<a href={resolve('/[[locale=lang]]', { locale: getLocaleForUrl() })} class={linkClass}>
						Startseite
					</a>
				{/snippet}
			</NavigationMenu.Link>
		</NavigationMenu.Item>

		<NavigationMenu.Item>
			<NavigationMenu.Link>
				{#snippet child()}
					<a
						href={resolve('/[[locale=lang]]/programm', { locale: getLocaleForUrl() })}
						class={linkClass}
					>
						Programm
					</a>
				{/snippet}
			</NavigationMenu.Link>
		</NavigationMenu.Item>

		<NavigationMenu.Item>
			<NavigationMenu.Link>
				{#snippet child()}
					<a
						href={resolve('/[[locale=lang]]/mitmachen', { locale: getLocaleForUrl() })}
						class={linkClass}
					>
						Mitmachen
					</a>
				{/snippet}
			</NavigationMenu.Link>
		</NavigationMenu.Item>

		<!-- Disciplines dropdown -->
		<NavigationMenu.Item>
			<NavigationMenu.Trigger
				class={inverted
					? 'bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 data-[state=open]:bg-white/10'
					: ''}>Die Sportarten</NavigationMenu.Trigger
			>
			<NavigationMenu.Content>
				<ul class="grid gap-2 p-2 md:w-100 lg:w-125 lg:grid-cols-[.75fr_1fr]">
					<li class="row-span-5">
						<NavigationMenu.Link
							class="flex h-full w-full no-underline outline-hidden select-none focus:shadow-md"
						>
							{#snippet child({ props })}
								<a
									{...props}
									href={resolve('/[[locale=lang]]/sportarten', { locale: getLocaleForUrl() })}
								>
									<div class="relative h-full overflow-hidden rounded-md">
										<img
											src={festivalImage}
											alt="Die Sportarten"
											class="h-full w-full object-cover brightness-60"
										/>
										<div
											class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
										>
											<div class="mb-2 text-lg font-medium text-white">Die Sportarten</div>
											<p class="text-sm leading-tight text-white/80">
												Entdecke die Welt der Scheibe
											</p>
										</div>
									</div>
								</a>
							{/snippet}
						</NavigationMenu.Link>
					</li>
					{@render ListItem({
						routeId: '/[[locale=lang]]/(disciplines)/freestyle',
						title: 'Freestyle',
						content: 'Artistische Tricks und kreative Würfe mit der Frisbee.'
					})}
					{@render ListItem({
						routeId: '/[[locale=lang]]/(disciplines)/disc-golf',
						title: 'Disc Golf',
						content: 'Präzision und Power in einem Golfspiel mit der Frisbee.'
					})}
					{@render ListItem({
						routeId: '/[[locale=lang]]/(disciplines)/double-disc-court',
						title: 'Double Disc Court',
						content: 'Ein schnelles Spiel mit zwei Teams und zwei Scheiben.'
					})}
					{@render ListItem({
						routeId: '/[[locale=lang]]/(disciplines)/ultimate',
						title: 'Ultimate',
						content: 'Teamwork und Strategie in einem intensiven Frisbee-Mannschaftssport.'
					})}
					{@render ListItem({
						routeId: '/[[locale=lang]]/(disciplines)/wheelchair-ultimate',
						title: 'Rollstuhl Ultimate',
						content: 'Teamwork und Strategie in einem intensiven Frisbee-Mannschaftssport.'
					})}
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>

		<NavigationMenu.Item>
			<NavigationMenu.Link>
				{#snippet child()}
					<a
						href={resolve('/[[locale=lang]]/faq', { locale: getLocaleForUrl() })}
						class={linkClass}
					>
						FAQ
					</a>
				{/snippet}
			</NavigationMenu.Link>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>
