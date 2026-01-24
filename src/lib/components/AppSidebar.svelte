<script lang="ts">
	import { page } from '$app/state';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import HouseIcon from '@lucide/svelte/icons/house';
	import AwardIcon from '@lucide/svelte/icons/award';
	import DiscIcon from '@lucide/svelte/icons/disc';
	import MessageCircleQuestionMarkIcon from '@lucide/svelte/icons/message-circle-question-mark';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { localizedResolve, getPathWithoutLocale } from '$lib/locale-resolve';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import Logo from './Logo.svelte';
	import { useSidebar } from '$lib/components/ui/sidebar';

	const sidebar = useSidebar();
	const currentPath = $derived(getPathWithoutLocale(page.url.pathname));
</script>

<Sidebar.Root side="right">
	<Sidebar.Content class="flex flex-col justify-between gap-8">
		<Sidebar.Group>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					<Sidebar.MenuItem>
						<Logo class="float-end" onclick={sidebar.toggle}/>
					</Sidebar.MenuItem>

					<!-- Home -->
					<Sidebar.MenuItem>
						<Sidebar.MenuButton onclick={sidebar.toggle} isActive={currentPath === '/'}>
							{#snippet child({ props })}
								<a href={localizedResolve('/')} {...props}>
									<HouseIcon />
									<span>Startseite</span>
								</a>
							{/snippet}
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>

					<!-- Zuschauen -->
					<Sidebar.MenuItem>
						<Sidebar.MenuButton onclick={sidebar.toggle} isActive={currentPath === '/festival/schedule'}>
							{#snippet child({ props })}
								<a href={localizedResolve('/festival/schedule')} {...props}>
									<CalendarIcon />
									<span>Zuschauen</span>
								</a>
							{/snippet}
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>

					<!-- Mitmachen -->
					<Sidebar.MenuItem>
						<Sidebar.MenuButton onclick={sidebar.toggle} isActive={currentPath === '/festival/participate'}>
							{#snippet child({ props })}
								<a href={localizedResolve('/festival/participate')} {...props}>
									<AwardIcon />
									<span>Mitmachen</span>
								</a>
							{/snippet}
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>

					<!-- Die Sportarten with children -->
					<Sidebar.MenuItem>
						<Sidebar.MenuButton onclick={sidebar.toggle} isActive={currentPath === '/disciplines'}>
							{#snippet child({ props })}
								<a href={localizedResolve('/disciplines')} {...props}>
									<DiscIcon />
									<span>Die Sportarten</span>
								</a>
							{/snippet}
						</Sidebar.MenuButton>
						<Sidebar.MenuSubItem class="ml-12">
							<Sidebar.MenuSubButton onclick={sidebar.toggle} isActive={currentPath === '/disciplines/freestyle'}>
								{#snippet child({ props })}
									<a href={localizedResolve('/disciplines/freestyle')} {...props}>Freestyle</a>
								{/snippet}
							</Sidebar.MenuSubButton>
						</Sidebar.MenuSubItem>
						<Sidebar.MenuSubItem class="ml-12">
							<Sidebar.MenuSubButton onclick={sidebar.toggle} isActive={currentPath === '/disciplines/disc-golf'}>
								{#snippet child({ props })}
									<a href={localizedResolve('/disciplines/disc-golf')} {...props}>Disc Golf</a>
								{/snippet}
							</Sidebar.MenuSubButton>
						</Sidebar.MenuSubItem>
						<Sidebar.MenuSubItem class="ml-12">
							<Sidebar.MenuSubButton onclick={sidebar.toggle} isActive={currentPath === '/disciplines/double-disc-court'}>
								{#snippet child({ props })}
									<a href={localizedResolve('/disciplines/double-disc-court')} {...props}>Double Disc Court</a>
								{/snippet}
							</Sidebar.MenuSubButton>
						</Sidebar.MenuSubItem>
						<Sidebar.MenuSubItem class="ml-12">
							<Sidebar.MenuSubButton onclick={sidebar.toggle} isActive={currentPath === '/disciplines/ultimate'}>
								{#snippet child({ props })}
									<a href={localizedResolve('/disciplines/ultimate')} {...props}>Ultimate</a>
								{/snippet}
							</Sidebar.MenuSubButton>
						</Sidebar.MenuSubItem>
					</Sidebar.MenuItem>

					<!-- FAQ -->
					<Sidebar.MenuItem>
						<Sidebar.MenuButton onclick={sidebar.toggle} isActive={currentPath === '/faq'}>
							{#snippet child({ props })}
								<a href={localizedResolve('/faq')} {...props}>
									<MessageCircleQuestionMarkIcon />
									<span>FAQ</span>
								</a>
							{/snippet}
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
		<Sidebar.Group>
			<Sidebar.GroupLabel>Sprache</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					<LanguageSwitcher />
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>
