<script lang="ts">
  import Badge from '$lib/components/ui/badge/badge.svelte';
	import dfvLogo from '$lib/assets/home/sponsors/dfv-logo.jpg?enhanced';
	import flbyLogo from '$lib/assets/home/sponsors/flby-logo.png?enhanced';
	import fpaLogo from '$lib/assets/home/sponsors/fpa-logo.png?enhanced';
	import wfdfLogo from '$lib/assets/home/sponsors/wfdf-logo.png?enhanced';
	import alpressoLogo from '$lib/assets/home/sponsors/alpresso-logo.webp?enhanced';
	import dgMucLogo from '$lib/assets/home/sponsors/dg-muc-logo.png?enhanced';
	import soLogo from '$lib/assets/home/sponsors/so-logo.webp?enhanced';
	import djkLogo from '$lib/assets/home/sponsors/djk-logo.png?enhanced';
	import hieberLogo from '$lib/assets/home/sponsors/hieber-logo.png?enhanced';
	import sfbLogo from '$lib/assets/home/sponsors/sfb-logo.png?enhanced';
	import xdiscLogo from '$lib/assets/home/sponsors/xdisc-logo.png?enhanced';

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
				<enhanced:img src={wfdfLogo} alt="WFDF" class="h-12 w-auto object-contain" />
				<enhanced:img src={fpaLogo} alt="FPA" class="h-12 w-auto object-contain" />
				<enhanced:img src={dfvLogo} alt="DFV" class="h-12 w-auto object-contain" />
				<enhanced:img src={flbyLogo} alt="FLBY" class="h-12 w-auto object-contain" />
				<enhanced:img src={alpressoLogo} alt="Alpresso" class="h-12 w-auto object-contain" />
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
				<enhanced:img src={dgMucLogo} alt="Disc Golf München" class="h-12 w-auto object-contain" />
				<enhanced:img src={soLogo} alt="Sportschule Oberhaching" class="h-12 w-auto object-contain" />
				<enhanced:img src={djkLogo} alt="DJK" class="h-12 w-auto object-contain" />
				<enhanced:img src={hieberLogo} alt="Hieber" class="h-12 w-auto object-contain" />
				<enhanced:img src={sfbLogo} alt="SFB" class="h-12 w-auto object-contain" />
				<enhanced:img src={xdiscLogo} alt="XDisc" class="h-12 w-auto object-contain" />
			</div>
		</div>
	</div>
</section>
