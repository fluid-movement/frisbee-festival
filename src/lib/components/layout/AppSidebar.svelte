<script lang="ts">
	import { page } from '$app/state';
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import HouseIcon from '@lucide/svelte/icons/house';
	import AwardIcon from '@lucide/svelte/icons/award';
	import DiscIcon from '@lucide/svelte/icons/disc';
	import MessageCircleQuestionMarkIcon from '@lucide/svelte/icons/message-circle-question-mark';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { getLocaleForUrl } from '$lib/locale';
	import { resolve } from '$app/paths';
	import LanguageSwitcher from '../shared/LanguageSwitcher.svelte';
	import Logo from '../shared/Logo.svelte';
	import { useSidebar } from '$lib/components/ui/sidebar';

	const sidebar = useSidebar();
	const currentPath = $derived(page.url.pathname);
</script>

<Sidebar.Root side="right">
	<Sidebar.Content class="flex flex-col justify-between gap-8">
		<Sidebar.Group>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					<Sidebar.MenuItem>
						<Logo class="float-end" onclick={sidebar.toggle} />
					</Sidebar.MenuItem>

					<!-- Home -->
					<Sidebar.MenuItem>
						<Sidebar.MenuButton onclick={sidebar.toggle} isActive={currentPath === '/'}>
							{#snippet child({ props })}
								<a href={resolve('/[[locale=lang]]', { locale: getLocaleForUrl() })} {...props}>
									<HouseIcon />
									<span>Startseite</span>
								</a>
							{/snippet}
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>

					<!-- Zuschauen -->
					<Sidebar.MenuItem>
						<Sidebar.MenuButton onclick={sidebar.toggle} isActive={currentPath === '/programm'}>
							{#snippet child({ props })}
								<a
									href={resolve('/[[locale=lang]]/programm', { locale: getLocaleForUrl() })}
									{...props}
								>
									<CalendarIcon />
									<span>Zuschauen</span>
								</a>
							{/snippet}
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>

					<!-- Mitmachen -->
					<Sidebar.MenuItem>
						<Sidebar.MenuButton onclick={sidebar.toggle} isActive={currentPath === '/mitmachen'}>
							{#snippet child({ props })}
								<a
									href={resolve('/[[locale=lang]]/mitmachen', { locale: getLocaleForUrl() })}
									{...props}
								>
									<AwardIcon />
									<span>Mitmachen</span>
								</a>
							{/snippet}
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>

					<!-- Die Sportarten with children -->
					<Sidebar.MenuItem>
						<Sidebar.MenuButton onclick={sidebar.toggle} isActive={currentPath === '/sportarten'}>
							{#snippet child({ props })}
								<a
									href={resolve('/[[locale=lang]]/sportarten', { locale: getLocaleForUrl() })}
									{...props}
								>
									<DiscIcon />
									<span>Die Sportarten</span>
								</a>
							{/snippet}
						</Sidebar.MenuButton>
						<Sidebar.MenuSub>
							<Sidebar.MenuSubItem>
								<Sidebar.MenuSubButton
									onclick={sidebar.toggle}
									isActive={currentPath === '/freestyle'}
								>
									{#snippet child({ props })}
										<a
											href={resolve('/[[locale=lang]]/(disciplines)/freestyle', {
												locale: getLocaleForUrl()
											})}
											{...props}>Freestyle</a
										>
									{/snippet}
								</Sidebar.MenuSubButton>
							</Sidebar.MenuSubItem>
							<Sidebar.MenuSubItem>
								<Sidebar.MenuSubButton
									onclick={sidebar.toggle}
									isActive={currentPath === '/disc-golf'}
								>
									{#snippet child({ props })}
										<a
											href={resolve('/[[locale=lang]]/(disciplines)/disc-golf', {
												locale: getLocaleForUrl()
											})}
											{...props}>Disc Golf</a
										>
									{/snippet}
								</Sidebar.MenuSubButton>
							</Sidebar.MenuSubItem>
							<Sidebar.MenuSubItem>
								<Sidebar.MenuSubButton
									onclick={sidebar.toggle}
									isActive={currentPath === '/double-disc-court'}
								>
									{#snippet child({ props })}
										<a
											href={resolve('/[[locale=lang]]/(disciplines)/double-disc-court', {
												locale: getLocaleForUrl()
											})}
											{...props}>Double Disc Court</a
										>
									{/snippet}
								</Sidebar.MenuSubButton>
							</Sidebar.MenuSubItem>
							<Sidebar.MenuSubItem>
								<Sidebar.MenuSubButton
									onclick={sidebar.toggle}
									isActive={currentPath === '/ultimate'}
								>
									{#snippet child({ props })}
										<a
											href={resolve('/[[locale=lang]]/(disciplines)/ultimate', {
												locale: getLocaleForUrl()
											})}
											{...props}>Ultimate Frisbee</a
										>
									{/snippet}
								</Sidebar.MenuSubButton>
							</Sidebar.MenuSubItem>
							<Sidebar.MenuSubItem>
								<Sidebar.MenuSubButton
									onclick={sidebar.toggle}
									isActive={currentPath === '/wheelchair-ultimate'}
								>
									{#snippet child({ props })}
										<a
											href={resolve('/[[locale=lang]]/(disciplines)/wheelchair-ultimate', {
												locale: getLocaleForUrl()
											})}
											{...props}>Rollstuhl Ultimate Frisbee</a
										>
									{/snippet}
								</Sidebar.MenuSubButton>
							</Sidebar.MenuSubItem>
						</Sidebar.MenuSub>
					</Sidebar.MenuItem>

					<!-- FAQ -->
					<Sidebar.MenuItem>
						<Sidebar.MenuButton onclick={sidebar.toggle} isActive={currentPath === '/faq'}>
							{#snippet child({ props })}
								<a href={resolve('/[[locale=lang]]/faq', { locale: getLocaleForUrl() })} {...props}>
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
