<script lang="ts">
	import { ChevronsRight } from '@lucide/svelte/icons';
	import { resolve } from '$app/paths';
	import { getLocaleForUrl } from '$lib/locale';
	import { buttonVariants } from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils';
</script>

<div class="container-custom flex justify-end">
	<a
		href={resolve('/[[locale=lang]]/disciplines', { locale: getLocaleForUrl() })}
		class={cn('', buttonVariants({ variant: 'outline', size: 'lg' }))}
	>
		Zurück zu den Sportarten
		<ChevronsRight />
	</a>
</div>
