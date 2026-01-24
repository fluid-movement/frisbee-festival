<script lang="ts">
	import { cn } from '$lib/utils';
	import logo from '$lib/assets/logo.png';
	import { localizedResolve } from '$lib/locale-resolve';

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

<a href={localizedResolve('/')} class={cn('inline-block', className)} {onclick}>
	<img src={logo} alt="Frisbee Festival München Logo" class={cn('h-auto', width)} />
</a>
