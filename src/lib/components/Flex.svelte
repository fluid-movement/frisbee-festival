<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';
	import { tv } from 'tailwind-variants';

	export const flexVariants = tv({
        base: 'flex gap-8 md:flex-row',
        variants: {
            size: {
                default: 'container-custom',
                fullWidth: '',
                inset: 'px-4 md:px-8'
            },
            reverse: {
                true: 'flex-col-reverse',
                false: 'flex-col'
            }
        },
        defaultVariants: {
            reverse: false,
            fullWidth: false
        }
    });

	let {
		children,
		class: className = '',
		reverse = false,
		fullWidth = false
	}: {
		children: Snippet;
		class?: string;
		reverse?: boolean;
		fullWidth?: boolean;
	} = $props();

	let fullWidthClass = fullWidth ? '' : 'container-custom';

	let classes = cn(
        fullWidthClass,
        'flex gap-8 md:flex-row',
        reverse ? 'flex-col-reverse' : 'flex-col',
        className
    );
</script>

<div class={classes}>
	{@render children()}
</div>
