<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import type { Picture } from '@sveltejs/enhanced-img';

	const allLogos = import.meta.glob<{ default: Picture }>(
		'/src/lib/assets/home/sponsors/*.{jpg,jpeg,png,webp,avif}',
		{ eager: true, query: '?enhanced' }
	);

	function logo(filename: string): Picture {
		return allLogos[`/src/lib/assets/home/sponsors/${filename}`].default;
	}

	type LogoItem = {
		img: Picture;
		alt: string;
		href?: string;
	};

	const sponsors: LogoItem[] = [
		{ img: logo('xdisc-logo.png'), alt: 'XDisc', href: 'https://xddisc.com' },
		{ img: logo('delaymaster-logo.jpg'), alt: 'Delay Master', href: 'https://www.delaymaster.de/' },
		{
			img: logo('fds-logo.avif'),
			alt: 'Fresh Disc Sports',
			href: 'https://www.freshultimate.com/home-eng'
		},
		{ img: logo('alpresso-logo.webp'), alt: 'Alpresso', href: 'https://alpresso.de' },
		{ img: logo('ron-logo.png'), alt: 'Ron', href: 'https://www.flickr.com/photos/ronk-foto/' },
		{ img: logo('fine-logo.png'), alt: 'Fine Print', href: 'https://www.fine-print.de/' },
		{ img: logo('witte-wattendorff.png'), alt: 'Witte & Wattendorff', href: 'https://www.witte-wattendorff.de/' },
		{ img: logo('wod-logo.png'), alt: 'World of Discs', href: 'https://wod.rocks/' }
	];

	const organisers: LogoItem[] = [
		{ img: logo('wfdf-logo.png'), alt: 'WFDF', href: 'https://wfdf.sport/' },
		{ img: logo('fpa-logo.png'), alt: 'FPA', href: 'https://www.freestyledisc.org/' },
		{ img: logo('dfv-logo.jpg'), alt: 'DFV', href: 'https://www.frisbeesportverband.de/' },
		{ img: logo('flby-logo.png'), alt: 'FLBY', href: 'https:///www.frisbeesportverband.bayern/' },
		{
			img: logo('so-logo.webp'),
			alt: 'Sportschule Oberhaching',
			href: 'https://sportschule-oberhaching.de/'
		},
		{ img: logo('sfb-logo.png'), alt: 'SFB', href: 'https://www.sfb-muenchen.de/' },
		{ img: logo('dg-muc-logo.png'), alt: 'Disc Golf München', href: 'https://dgmuc.de/' },
	];
</script>

<section class="container-custom">
	<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
		<div>
			<Badge variant="outline" class="mb-2 w-fit">Starke Partnerschaften</Badge>
			<h2 class="mb-4 uppercase">Dank an unsere Sponsoren</h2>
			<p class="leading-relaxed text-muted-foreground">
				Gemeinsam bringen wir die Scheibe zum Fliegen! Ein großes Dankeschön an unsere Partner, die
				das Frisbee Festival München und die internationale Community unterstützen.
			</p>
			<div class="mt-8 flex flex-wrap gap-8">
				{#each sponsors as { img, alt, href } (alt)}
					<a {href} target="_blank" rel="noopener noreferrer" aria-label={alt}>
						{#if img}
							<enhanced:img src={img} {alt} class="h-12 w-auto object-contain" />
						{:else}
							{alt}
						{/if}
					</a>
				{/each}
			</div>
		</div>
		<div>
			<Badge variant="outline" class="mb-2 w-fit">Das Team hinter dem Event</Badge>
			<h2 class="mb-4 uppercase">Die Organisatoren</h2>
			<p class="leading-relaxed text-muted-foreground">
				Internationale Verbände und lokale Partner vereinen ihre Kräfte, um die Sportschule
				Oberhaching zum Zentrum der Frisbee-Welt zu machen.
			</p>
			<div class="mt-8 flex flex-wrap items-center gap-8">
				{#each organisers as { img, alt, href } (alt)}
					{#if img}
						{#if href}
							<a {href} target="_blank" rel="noopener noreferrer" aria-label={alt}>
								<enhanced:img src={img} {alt} class="h-12 w-auto object-contain" />
							</a>
						{:else}
							<enhanced:img src={img} {alt} class="h-12 w-auto object-contain" />
						{/if}
					{/if}
				{/each}
			</div>
		</div>
	</div>
</section>
