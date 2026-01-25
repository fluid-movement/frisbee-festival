<script lang="ts">
	import { cn } from '$lib/utils';
	import logo from '$lib/assets/logo.png';
	import { resolve } from '$app/paths';
	import { getLocaleForUrl } from '$lib/locale';

	let {
		class: className = '',
		width = 'w-18',
		onclick
	}: {
		class?: string;
		width?: string;
		onclick?: () => void;
	} = $props();
</script>

<a href={resolve('/[[locale=lang]]', {locale: getLocaleForUrl()})} class={cn('inline-block', className)} {onclick}>
	<img src={logo} alt="Frisbee Festival München Logo" class={cn('h-auto', width)} />
</a>
