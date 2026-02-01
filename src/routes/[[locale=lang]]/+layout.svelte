<script lang="ts">
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/700.css';
	import '../../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import type { LayoutProps } from './../$types';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/AppSidebar.svelte';
	import Logo from '$lib/components/Logo.svelte';

	let { children, data }: LayoutProps = $props();

	// Use derived to properly track reactive data
	const meta = $derived(data.meta);
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<meta property="og:title" content={meta.title} />
	<meta property="og:type" content="website" />
	<meta property="og:description" content={meta.description} />
	<meta property="og:image" content={meta.ogImage} />
	<meta property="og:url" content={meta.ogUrl} />
	<meta property="og:logo" content={meta.ogLogo} />
	<link rel="icon" href={favicon}/>
</svelte:head>

<Sidebar.Provider open={false}>
	<div class="flex min-h-screen w-full flex-col">
		<AppSidebar />
		<header class="flex justify-between items-center px-8 py-4">
		    <Logo />
			<Navigation />
			<div class="hidden gap-2 md:flex">
				<LanguageSwitcher />
			</div>
			<Sidebar.Trigger class="md:hidden"/>
		</header>
		<main class="flex flex-1 flex-col gap-8 pb-16">
			{@render children()}
		</main>
		<Separator />
		<Footer />
	</div>
</Sidebar.Provider>
