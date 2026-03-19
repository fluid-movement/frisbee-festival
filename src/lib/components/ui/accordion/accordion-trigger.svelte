<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import Play from '@lucide/svelte/icons/play';
	import { cn, type WithoutChild } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		level = 3,
		children,
		...restProps
	}: WithoutChild<AccordionPrimitive.TriggerProps> & {
		level?: AccordionPrimitive.HeaderProps['level'];
	} = $props();
</script>

<AccordionPrimitive.Header {level} class="flex">
	<AccordionPrimitive.Trigger
		data-slot="accordion-trigger"
		bind:ref
		class={cn(
			'flex flex-1 items-center gap-4 rounded-md py-4 text-start font-bold uppercase transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-90',
			className
		)}
		{...restProps}
	>
		<Play
			class="pointer-events-none size-4 shrink-0 text-teal transition-transform duration-200"
			fill="currentColor"
		/>
		{@render children?.()}
	</AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
