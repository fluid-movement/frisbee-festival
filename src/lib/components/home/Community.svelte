<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import ChevronRight from '@lucide/svelte/icons/chevron-right';
	import { resolve } from '$app/paths';
	import { getLocaleForUrl } from '$lib/locale';
	import { Button } from '$lib/components/ui/button';
</script>

<section class="container-custom">
	<Badge variant="outline" class="mx-auto mb-2 block w-fit">Mach mit</Badge>
	<h2 class="mb-8 text-center uppercase">Sei Teil des Festivals</h2>
	<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
		<Card.Root class="bg-teal-dark p-8 text-white">
			<Card.Content class="p-0">
				<h4 class="mb-3 text-white">Zuschauen</h4>
				<p class="mb-0 text-sm leading-relaxed text-white/70">
					Erlebe den Frisbeesport hautnah, von Freestyle-Weltmeisterschaften bis zu spannenden
					Showmatches. Entdecke unseren Zeitplan und verpasse keines der Highlights auf dem
					Festival.
				</p>
			</Card.Content>
			<Card.Footer class="justify-end px-0">
				<Button href={resolve('/[[locale=lang]]/programm', { locale: getLocaleForUrl() })}>
					Programm <ChevronRight />
				</Button>
			</Card.Footer>
		</Card.Root>
		<Card.Root class="bg-teal-dark p-8 text-white">
			<Card.Content class="p-0">
				<h4 class="mb-3 text-white">Mitmachen</h4>
				<p class="mb-0 text-sm leading-relaxed text-white/70">
					Lust selbst aktiv zu werden? Egal ob Anfänger oder Profi – bei unseren Workshops,
					Mitmach-Stationen und Side-Events kannst du die Scheibe selbst fliegen lassen und Teil
					unserer Community werden.
				</p>
			</Card.Content>
			<Card.Footer class="justify-end px-0">
				<Button href={resolve('/[[locale=lang]]/mitmachen', { locale: getLocaleForUrl() })}>
					Workshops <ChevronRight />
				</Button>
			</Card.Footer>
		</Card.Root>
	</div>
</section>
