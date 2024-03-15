<script>
	import Container from '$lib/components/container.svelte';
	import EventCard from '$lib/components/event-card.svelte';
</script>

<Container>
	<section class="text-center">
		<h1 class="text-3xl md:text-5xl font-bold mb-2">Meetups & Kongkow</h1>
		<p class="text-gray-600 dark:text-gray-400">Monthly meetups and other events.</p>
	</section>

	<div class="flex flex-col mt-8 md:mt-16">
		<section class="flex z-20 flex-wrap justify-center md:mt-0 gap-8 md:gap-28">
			{#each [1, 2, 3] as key (key)}
				<EventCard />
			{/each}
		</section>
	</div>
</Container>
