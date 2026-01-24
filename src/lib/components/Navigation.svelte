<script lang="ts">
	import * as NavigationMenu from '$lib/components/ui/navigation-menu';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import { cn } from '$lib/utils.ts';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Pathname } from '$app/types';
	import { localizedResolve } from '$lib/locale-resolve';

	type ListItemProps = Omit<HTMLAttributes<HTMLAnchorElement>, 'href'> & {
		title: string;
		href: Pathname;
		content: string;
	};
</script>

{#snippet ListItem({ title, content, href, class: className, ...restProps }: ListItemProps)}
	<li>
		<NavigationMenu.Link>
			{#snippet child()}
				<a
					href={localizedResolve(href)}
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
					<a href={localizedResolve('/')} class={navigationMenuTriggerStyle()}> Startseite </a>
				{/snippet}
			</NavigationMenu.Link>
		</NavigationMenu.Item>

		<NavigationMenu.Item>
			<NavigationMenu.Link>
				{#snippet child()}
					<a href={localizedResolve('/festival/schedule')} class={navigationMenuTriggerStyle()}>
						Zuschauen
					</a>
				{/snippet}
			</NavigationMenu.Link>
		</NavigationMenu.Item>

		<NavigationMenu.Item>
			<NavigationMenu.Link>
				{#snippet child()}
					<a href={localizedResolve('/festival/participate')} class={navigationMenuTriggerStyle()}>
						Mitmachen
					</a>
				{/snippet}
			</NavigationMenu.Link>
		</NavigationMenu.Item>

		<!-- Disciplines dropdown -->
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>Die Sportarten</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="grid gap-2 p-2 md:w-100 lg:w-125 lg:grid-cols-[.75fr_1fr]">
					<li class="row-span-4">
						<NavigationMenu.Link
							class="flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-hidden select-none focus:shadow-md"
						>
							{#snippet child({ props })}
								<a {...props} href={localizedResolve('/disciplines')}>
									<div class="mt-4 mb-2 text-lg font-medium">Die Sportarten</div>
									<p class="text-sm leading-tight text-muted-foreground">
										Entdecke die Welt der Scheibe
									</p>
								</a>
							{/snippet}
						</NavigationMenu.Link>
					</li>
					{@render ListItem({
						href: '/disciplines/freestyle',
						title: 'Freestyle',
						content: 'Artistische Tricks und kreative Würfe mit der Frisbee.'
					})}
					{@render ListItem({
						href: '/disciplines/disc-golf',
						title: 'Disc Golf',
						content: 'Präzision und Power in einem Golfspiel mit der Frisbee.'
					})}
					{@render ListItem({
						href: '/disciplines/double-disc-court',
						title: 'Double Disc Court',
						content: 'Ein schnelles Spiel mit zwei Teams und zwei Scheiben.'
					})}
					{@render ListItem({
						href: '/disciplines/ultimate',
						title: 'Ultimate',
						content: 'Teamwork und Strategie in einem intensiven Frisbee-Mannschaftssport.'
					})}
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>

		<NavigationMenu.Item>
			<NavigationMenu.Link>
				{#snippet child()}
					<a href={localizedResolve('/faq')} class={navigationMenuTriggerStyle()}> FAQ </a>
				{/snippet}
			</NavigationMenu.Link>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>
