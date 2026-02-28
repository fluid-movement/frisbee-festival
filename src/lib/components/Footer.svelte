<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import Clock from '@lucide/svelte/icons/clock';
	import Calendar from '@lucide/svelte/icons/calendar';
	import Mail from '@lucide/svelte/icons/mail';
	import FooterLink from './FooterLink.svelte';
</script>

<footer class="bg-[#101828] text-white">
	<div class="container-custom grid grid-cols-1 gap-10 px-8 py-12 md:grid-cols-2 lg:grid-cols-4">
		<!-- Brand -->
		<div class="flex flex-col gap-4">
			<Logo class="brightness-0 invert" />
			<p class="mb-0 text-sm leading-relaxed text-primary">Entdecke die Welt der Flugscheibe</p>
		</div>

		<!-- Quick Links -->
		<div>
			<h6 class="mb-4 text-white">Quick Links</h6>
			<ul class="flex flex-col gap-2 text-sm text-white/60">
				<li>
				  <FooterLink href='/[[locale=lang]]/disciplines'>Sportarten</FooterLink>
				</li>
				<li>
				  <FooterLink href='/[[locale=lang]]/festival/schedule'>Programm</FooterLink>
				</li>
				<li>
				  <FooterLink href='/[[locale=lang]]/festival/participate'>Mitmachen</FooterLink>
				</li>
				<li>
				  <FooterLink href='/[[locale=lang]]/faq'>Häufige Fragen</FooterLink>
				</li>
			</ul>
		</div>

		<!-- Event Info -->
		<div>
			<h6 class="mb-4 text-white">Event Info</h6>
			<ul class="flex flex-col gap-3 text-sm text-primary-foreground/60">
				<li class="flex items-center gap-2">
					<Calendar class="h-4 w-4 shrink-0" />
					<span>1.–2. August 2026</span>
				</li>
				<li class="flex items-center gap-2">
					<Clock class="h-4 w-4 shrink-0" />
					<span>9:00–19:00 Uhr</span>
				</li>
				<li class="flex items-center gap-2">
					<MapPin class="h-4 w-4 shrink-0" />
					<span>Sportschule Oberhaching<br />82041 Oberhaching<br />Oberhaching, Bayern</span>
				</li>
			</ul>
		</div>

		<!-- Contact -->
		<div>
			<h6 class="mb-4 text-white">Kontakt</h6>
			<ul class="flex flex-col gap-3 text-sm text-primary-foreground/60">
				<li class="flex items-center gap-2">
					<Mail class="h-4 w-4 shrink-0" />
					<a href="mailto:info@frisbeefestival.de" class="transition-colors hover:text-white">
						info@frisbeefestival.de
					</a>
				</li>
			</ul>
		</div>
	</div>

	<div class="border-t border-white/10">
		<div class="container-custom px-8 py-4 text-center text-xs text-white/40">
			© 2026 Frisbee Festival München. Alle Rechte vorbehalten.
		</div>
	</div>
</footer>
