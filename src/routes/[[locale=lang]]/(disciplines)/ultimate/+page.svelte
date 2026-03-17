<script lang="ts">
	import Grid from '$lib/components/layout/Grid.svelte';
	import mainImage from '$lib/assets/ultimate/ultimate.jpg';
	import galleryImage from '$lib/assets/ultimate/spirit.jpg';
	import galleryImage2 from '$lib/assets/ultimate/ultimate-contest.jpg';
	import galleryImage3 from '$lib/assets/ultimate/ultimate-pull.jpg';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Image from '$lib/components/shared/Image.svelte';
	import Schedule from '$lib/components/schedule/Schedule.svelte';
	import { getSchedule } from '$lib/data/schedules';
	import { page } from '$app/state';
	import { Users } from '@lucide/svelte/icons';
	const scheduleData = $derived.by(() => {
		page.url;
		return getSchedule('ultimate');
	});
</script>

<Grid>
	<article>
		<Badge class="mb-4" variant="outline">Teamgeist und Strategie</Badge>
		<div class="flex gap-2">
			<Users size="38" class="mb-4 text-ddc" />
			<h1 class="uppercase">Ultimate Frisbee</h1>
		</div>
		<h5>Die wohl fairste Teamsportart der Welt</h5>
		<p>
			Ultimate ist die bekannteste Teamsportart mit der Frisbee – schnell, athletisch und fair. Zwei
			Teams versuchen, die Scheibe durch geschickte Pässe über das Feld zu bewegen und in der
			Endzone zu fangen, um Punkte zu erzielen. Besonders einzigartig: Ultimate wird ohne
			Schiedsrichter gespielt, basierend auf dem ‚Spirit of the Game‘, also Fairplay und Respekt.
			Rasante Spielzüge, spektakuläre Layouts und echte Teamarbeit sorgen für spannende Matches und
			mitreißende Stimmung.
		</p>
		
	</article>
	<Image src={mainImage} alt="Ultimate Frisbee" />
</Grid>

<Schedule schedule={scheduleData.schedule} />

<div class="container-custom grid gap-4 md:grid-cols-3">
	<Image src={galleryImage3} alt="Double Disc Court" />
	<Image src={galleryImage} alt="Double Disc Court" />
	<Image src={galleryImage2} alt="Double Disc Court" />
</div>

<div class="container-custom">
  <p>
			Ultimate Frisbee, kurz Ultimate, ist die bekannteste Teamsportart im Frisbeesport. In der
			Regel wird 7-gegen-7 auf einem Outdoor-Rasenfeld gespielt. Das Spielfeld ist dabei etwa so
			lang wie ein Fußballfeld, jedoch nur etwa halb so breit. Daneben gibt es zahlreiche Varianten
			und Kombinationen, etwa 2-gegen-2 oder 5-gegen-5 in der Halle oder auf einem Kleinfeld.
		</p>
		<p>
			Die Teams müssen dabei nicht aus Spielern desselben Geschlechts bestehen – ganz im Gegenteil.
			Viele Turniere und auch Trainingsspiele werden im Mixed-Modus ausgetragen. Das bedeutet, dass
			Frauen und Männer gemeinsam in einem Team spielen.
		</p>
		<p>
			Gefragt sind Schnelligkeit, Präzision und gutes Teamwork. Durch geschicktes Passen der Scheibe
			an die Mitspieler muss versucht werden, diese in der gegnerischen Endzone zu fangen. Gelingt
			das, erhält das Team einen Punkt und überlässt die Scheibe zu Beginn des nächsten Punktes dem
			Gegner.
		</p>
		<p>
			Fällt die Scheibe jedoch zu Boden, wird sie vom Gegner abgefangen oder landet im Aus, wechselt
			der Scheibenbesitz sofort, und das Spiel geht in die entgegengesetzte Richtung weiter.
			Körperkontakt ist grundsätzlich verboten. Eine gute Körperbeherrschung ist daher Pflicht, um
			im sehr schnellen Spiel den Gegner decken zu können, ohne ihn zu berühren.
		</p>
		<p>
			Kommt es dennoch zu einem Kontakt, läuft der Scheibenführende mit der Scheibe oder tritt eine
			andere Regelverletzung auf, wird das Spiel kurz unterbrochen. Die beteiligten Spieler sprechen
			die Situation selbstständig durch und kommen gemeinsam zu einer fairen Entscheidung. Einen
			Schiedsrichter gibt es – auch auf höchstem Niveau – nicht.
		</p>
		<p>
			Genau hier liegt die Besonderheit dieser Sportart: Sportlichkeit und Fairness stehen an
			oberster Stelle. Erst danach zählt das Ergebnis. Dieser Grundgedanke wird im Fachjargon
			“Spirit of the Game” genannt. Auf jedem Turnier, selbst auf sogenannten Fun-Turnieren, gibt es
			daher eine eigene Spirit-Wertung. Die Teams beurteilen sich gegenseitig in Kategorien wie
			Aufrichtigkeit, Kommunikation und Fair Play. Die Wertung wird bei der Siegerehrung separat
			bekannt gegeben und häufig mit eigenen Preisen ausgezeichnet – je nach Abschneiden des Teams.
		</p>
		<p>
			Die deutsche Ultimate-Szene wächst hierbei stetig. Aktuell sind im Bundesgebiet rund 200 Teams
			und Vereine beim Deutschen Frisbeesport-Verband (DFV) registriert – Tendenz steigend. Deutsche
			Meisterschaften werden bereits seit 1981 ausgetragen.
		</p>
		<p>
			(In der offenen Division (Open/Herren) dominierten in den vergangenen Jahren vor allem Bad
			Skid aus Heilbronn und Wall City aus Berlin. Bei den Damen wechselten sich jinX aus Berlin und
			die Woodchicas aus München regelmäßig als Deutsche Meisterinnen ab. In der Mixed-Division
			waren die Mainzelrenner aus Mainz über viele Jahre die prägende Mannschaft.)
		</p>
		<p>
			Die internationale Ultimate-Szene hat sich in den letzten Jahrzehnten enorm professionalisiert
			und ist heute sehr dynamisch. Weltmeisterschaften für Nationalteams (WFDF World Ultimate
			Championships, WUC) finden alle vier Jahre statt. Neben den klassischen Open-, Damen- und
			Mixed-Divisionen gibt es auch Junioren-(U24) und Masters-Weltmeisterschaften.
		</p>
		<p>
			Deutsche Teams sind zunehmend wettbewerbsfähig auf internationalem Niveau. Bei der WUC 2024
			auf der Gold Coast erzielten die deutschen Nationalmannschaften ordentliche Platzierungen: Das
			Open-Team belegte den 6. Platz, die Damen und die Mixed-Auswahl jeweils Platz 7. Damit ist
			Deutschland eine der stärksten europäischen Ultimate-Nationen, auch wenn die absolute
			Weltspitze (z. B. USA, Kolumbien und Japan) meist noch vorne liegt.
		</p>
</div>