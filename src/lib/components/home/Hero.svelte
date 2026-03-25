<script lang="ts">
	import heroBg from '$lib/assets/home/hero-bg.svg';
	import heroLogo from '$lib/assets/home/hero-logo.svg';
	import heroPerson from '$lib/assets/home/hero-person.png?enhanced';
</script>

<section class="relative h-110 overflow-hidden md:h-185">
	<!-- Background SVG: genuinely needs to fill the section -->
	<img
		src={heroBg}
		alt=""
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 h-full w-full select-none"
		style="object-fit: fill;"
	/>

	<!-- Person image: stays absolute because it intentionally overflows vertically -->
	<enhanced:img
		src={heroPerson}
		alt="Frisbee player"
		class="pointer-events-none absolute top-0 right-0 z-5 h-[95%] w-auto object-contain select-none md:top-[5.9%] md:right-auto md:left-[41.6%] md:z-20 md:h-[119.7%]"
	/>

	<!-- Text content: normal document flow, left-padded column -->
	<div
		class="relative z-20 flex h-full flex-col justify-end pb-24 pl-[9.5%] md:justify-center md:pb-0"
	>
		<p class="mb-0 text-xs font-bold">1. - 2. August 2026</p>
		<h2
			class="leading-tight text-background uppercase"
			style="font-family: 'Bebas Neue', sans-serif;"
		>
			Willkommen zum
		</h2>
		<img
			src={heroLogo}
			alt="Frisbee Festival München"
			class="pointer-events-none h-auto w-[80%] select-none md:w-[39.3%]"
		/>
	</div>
</section>
