<script lang="ts">
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';
	import '@fontsource/bebas-neue/400.css';
	import '../../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import { page } from '$app/state';
	import LanguageSwitcher from '$lib/components/shared/LanguageSwitcher.svelte';
	import Navigation from '$lib/components/layout/Navigation.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import type { LayoutProps } from './$types';
	import * as Sidebar from '$lib/components/ui/sidebar';
	import AppSidebar from '$lib/components/layout/AppSidebar.svelte';
	import Logo from '$lib/components/shared/Logo.svelte';
	import LanguageModal from '$lib/components/shared/LanguageModal.svelte';
	import { cn } from '$lib/utils';

	let { children }: LayoutProps = $props();

	const isHome = $derived(page.route.id === '/[[locale=lang]]');
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Sidebar.Provider open={false}>
	<div class="flex min-h-screen w-full flex-col">
		<AppSidebar />
		<header
			class={cn("z-50 flex w-full items-center justify-between px-8 py-4", isHome ? "absolute" : "relative")}
		>
			<Logo inverted={isHome} />
			<Navigation inverted={isHome} />
			<div class="hidden gap-2 md:flex">
				<LanguageSwitcher inverted={isHome} />
			</div>
			<Sidebar.Trigger class={isHome ? 'text-white md:hidden' : 'md:hidden'} />
		</header>
		<main class="flex flex-1 flex-col gap-8 pb-16">
			{@render children()}
		</main>
		<Separator />
		<Footer />
	</div>
	<LanguageModal />
</Sidebar.Provider>
