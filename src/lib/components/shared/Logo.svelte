<script lang="ts">
	import { cn } from '$lib/utils';

	import { resolve } from '$app/paths';
	import { getLocaleForUrl } from '$lib/locale';

	let {
		class: className = '',
		width = 'w-18',
		inverted = false,
		onclick
	}: {
		class?: string;
		width?: string;
		inverted?: boolean;
		onclick?: () => void;
	} = $props();
</script>

<a
	href={resolve('/[[locale=lang]]', { locale: getLocaleForUrl() })}
	class={cn('inline-block', className)}
	{onclick}
>
	<enhanced:img
		src="$lib/assets/logo.png"
		alt="Frisbee Festival München Logo"
		class={cn('h-auto', width, inverted && 'brightness-0 invert')}
	/>
</a>
