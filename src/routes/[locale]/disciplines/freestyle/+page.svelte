<script lang="ts">
	import { cn } from '$lib/utils';
	import Grid from '$lib/components/Grid.svelte';
	import Image from '$lib/components/Image.svelte';
	import ParallaxBanner from '$lib/components/ParallaxBanner.svelte';
	import YouTubePlayer from '$lib/components/YouTubePlayer.svelte';
	import bannerImage from '$lib/assets/freestyle/banner.jpg';
	import communityImage from '$lib/assets/freestyle/community.jpg';
	import coopImage from '$lib/assets/freestyle/coop.jpg';
</script>

{#snippet panel(title: string, content: string, className: string = '')}
	<article class="flex flex-col justify-center">
		{#if title}<h2 class={cn('', className)}>{title}</h2>{/if}
		<p>{content}</p>
	</article>
{/snippet}

<h1 class="container-custom text-center">Freestyle Frisbee</h1>
<Grid>
	{@render panel(
		'Was ist Freestyle Frisbee?',
		'Freestyle Frisbee ist die künstlerische Disziplin des Frisbeesports, bei der Teams aus zwei bis drei Spielern zu Musik eine choreografierte Routine präsentieren. Anders als bei Ultimate Frisbee oder Disc Golf geht es hier nicht um Punkte oder Tore, sondern um Kreativität, Ästhetik und technische Perfektion. Die Spieler entwickeln spektakuläre Wurf- und Fangtechniken, kombiniert mit akrobatischen Elementen und tänzerischen Bewegungen. Eine typische Routine dauert drei bis fünf Minuten und erzählt oft eine Geschichte durch Bewegung und Musik.',
		'md:text-right'
	)}
	<YouTubePlayer videoId="5B2lwGOmxYs" title="Freestyle Frisbee Demo" />
</Grid>
<ParallaxBanner
	src={bannerImage}
	alt="Freestyle Frisbee"
	height="h-[40vh]"
	speed={0.3}
	class="my-8"
>
	<h2 class="text-amber-100">Die Kunst der Bewegung</h2>
</ParallaxBanner>
<div class="container-custom mb-8 md:px-32">
	{@render panel('', 'Was Freestyle Frisbee so besonders macht, ist die perfekte Verschmelzung von Sport, Tanz und Artistik. Jeder Wurf, jeder Fang wird zur künstlerischen Ausdrucksform. Die Scheibe wird unter dem Bein hindurch geworfen, hinter dem Rücken gefangen oder mit den Fingernägeln balanciert. Spieler vollführen Sprünge, Rollen und sogar Saltos, während die Frisbee durch die Luft gleitet. Die Synchronisation zwischen den Teammitgliedern muss dabei perfekt sein – wie bei einem Pas de Deux im Ballett.')}
</div>
<Grid>
	<Image src={coopImage} alt="Freestyle Frisbee Community" />
	{@render panel(
		'Teamwork und Kreativität',
		'Im Freestyle Frisbee verschmelzen die Spieler zu einer Einheit. Jede Bewegung ist aufeinander abgestimmt, jeder Trick baut auf dem vorherigen auf. Die besten Teams entwickeln ihren eigenen Stil und erfinden ständig neue Kombinationen. Die Kreativität kennt dabei keine Grenzen: Von eleganten, fließenden Bewegungen bis zu explosiven, kraftvollen Tricks ist alles möglich. Diese kreative Freiheit macht Freestyle Frisbee zu einer der individuellsten Sportarten überhaupt.'
	)}
	{@render panel(
		'Mehr als nur Sport',
		'Freestyle Frisbee ist eine Lebenseinstellung. Die Community ist weltweit vernetzt und teilt die Leidenschaft für diese besondere Kunstform. Bei Wettbewerben und Jams treffen sich Freestyler aus aller Welt, um voneinander zu lernen, neue Tricks auszuprobieren und gemeinsam zu spielen. Was zählt, ist nicht nur die Leistung, sondern auch der Spaß, die Gemeinschaft und die pure Freude an der Bewegung mit der Scheibe.',
		'md:text-right'
	)}
	<Image src={communityImage} alt="Freestyle Frisbee Community" />
</Grid>
