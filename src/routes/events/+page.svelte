<script>
	import EventCard from '$lib/components/event-card.svelte';
</script>

<section class="max-w-screen-lg mx-auto w-full mt-24 px-4 md:px-0">
	<h1 class="text-3xl md:text-5xl font-bold leading-relaxed">Meetups & Kongkow</h1>
	<p class="text-gray-600">Monthly meetups and other events.</p>
</section>

<div class="max-w-screen-lg mx-auto w-full flex flex-col px-4 md:px-0 mt-8">
	<section class="flex z-20 flex-wrap justify-center md:mt-0 gap-8 md:gap-28">
		{#each [1, 2, 3] as key (key)}
			<EventCard />
		{/each}
	</section>
</div>
