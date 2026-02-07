<script lang="ts">
	import Grid from '$lib/components/Grid.svelte';
	import festivalImage from '$lib/assets/home/festival.jpg';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Image from '$lib/components/Image.svelte';

	const schedule = {
    "Freitag": [
      {
        "time": "10:00 - 11:00",
        "label": "Introduction",
        "type": "tournament"
      },
      {
        "time": "11:00 - 12:00",
        "label": "Open Pairs",
        "type": "tournament"
      },
      {
        "time": "12:00 - 13:00",
        "label": "Mixed Pairs",
        "type": "tournament"
      },
      {
        "time": "13:00 - 14:00",
        "label": "Delay Basics",
        "type": "workshop"
      },
      {
        "time": "14:00 - 15:00",
        "label": "Coop",
        "type": "tournament"
      },
      {
        "time": "15:00 - 17:00",
        "label": "Throw Workshop for everyone",
        "type": "workshop"
      },
      {
        "time": "17:00 - 18:00",
        "label": "Woman Pairs",
        "type": "tournament"
      }
    ],
    "Samstag": [
      {
        "time": "10:00 - 11:00",
        "label": "Introduction",
        "type": "tournament"
      },
      {
        "time": "11:00 - 12:00",
        "label": "Open Pairs",
        "type": "tournament"
      },
      {
        "time": "12:00 - 13:00",
        "label": "Mixed Pairs",
        "type": "tournament"
      },
      {
        "time": "13:00 - 14:00",
        "label": "Delay Basics",
        "type": "workshop"
      },
      {
        "time": "14:00 - 15:00",
        "label": "Coop",
        "type": "tournament"
      },
      {
        "time": "15:00 - 17:00",
        "label": "Throw Workshop for everyone",
        "type": "workshop"
      },
      {
        "time": "17:00 - 18:00",
        "label": "Woman Pairs",
        "type": "tournament"
      }
    ],
    "Sonntag": [
      {
        "time": "10:00 - 11:00",
        "label": "Introduction",
        "type": "tournament"
      },
      {
        "time": "11:00 - 12:00",
        "label": "Open Pairs",
        "type": "tournament"
      },
      {
        "time": "12:00 - 13:00",
        "label": "Mixed Pairs",
        "type": "tournament"
      },
      {
        "time": "13:00 - 14:00",
        "label": "Delay Basics",
        "type": "workshop"
      },
      {
        "time": "14:00 - 15:00",
        "label": "Coop",
        "type": "tournament"
      },
      {
        "time": "15:00 - 17:00",
        "label": "Throw Workshop for everyone",
        "type": "workshop"
      },
      {
        "time": "17:00 - 18:00",
        "label": "Woman Pairs",
        "type": "tournament"
      }
    ]
  };
</script>

<Grid>
	<article>
		<Badge variant="outline">Jetzt wirds kreativ</Badge>
		<h1 class="uppercase">Freestyle Frisbee</h1>
		<p>
			In hac habitasse platea dictumst. Donec sodales, lectus vitae cursus sollicitudin, arcu risus
			vulputate tortor, id ullamcorper justo eros at lectus. Nullam et dignissim lectus. Nullam
			metus lorem, ullamcorper sit amet mattis a, hendrerit et sem.
		</p>
		<p>
			Wir glauben an den Aufbau einer unterstützenden Gemeinschaft, in der sich Spieler gegenseitig
			ermutigen, Wissen teilen und gemeinsam Erfolge feiern. Unser Sport ist mehr als nur ein Spiel
			– er ist eine Familie.
		</p>
	</article>
	<Image src={festivalImage} alt="Comunity"/>
</Grid>
<div class="container-custom">
	<p>Legend goes here</p>
	<div class="grid lg:grid-cols-3 gap-8">
  	{#each Object.entries(schedule) as [day, events] (day)}
     <div>
       <h3 class="uppercase">{day}</h3>
       <ul class="grid grid-cols-[min-content_1fr] gap-x-4">
         {#each events as event (event.time)}
           <li class="contents">
             <div class="whitespace-nowrap {event.type === 'workshop' ? 'text-primary' : ''}">{event.time}</div>
             <strong class={event.type === 'workshop' ? 'text-primary' : ''}>{event.label}</strong>
             <div class="col-span-2"><Separator /></div>
           </li>
         {/each}
       </ul>
     </div>
    {/each}
	</div>
</div>
