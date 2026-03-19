<script lang="ts">
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';
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

	let { children, data }: LayoutProps = $props();

	const isHome = $derived(page.route.id === '/[[locale=lang]]');
</script>

<svelte:head>
	<title>Frisbee Festival München</title>
	<meta
		name="description"
		content="Das Frisbee Festival München ist ein Event welches den Frisbeesport in allen Facetten feiert. Von Ultimate Frisbee über Disc Golf bis hin zu Freestyle und Rollstuhl-Frisbee."
	/>
	<meta property="og:title" content="Frisbee Festival München" />
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="Das Frisbee Festival München ist ein Event welches den Frisbeesport in allen Facetten feiert. Von Ultimate Frisbee über Disc Golf bis hin zu Freestyle und Rollstuhl-Frisbee."
	/>
	<meta property="og:image" content={data.ogImage} />
	<meta property="og:url" content={data.ogUrl} />
	<meta property="og:logo" content={data.ogLogo} />
	<link rel="icon" href={favicon} />
</svelte:head>

<Sidebar.Provider open={false}>
	<div class="flex min-h-screen w-full flex-col">
		<AppSidebar />
		<header
			class={isHome
				? 'absolute z-50 flex w-full items-center justify-between px-8 py-4'
				: 'relative z-50 flex items-center justify-between px-8 py-4'}
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
</Sidebar.Provider>
