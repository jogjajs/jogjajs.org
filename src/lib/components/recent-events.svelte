<script>
	import EventCard from './event-card.svelte';
</script>

<div
	class="block md:grid grid-cols-1 md:grid-cols-3 mt-64 pb-10 max-w-screen-xl mx-auto px-4 md:px-0"
>
	<div class="md:max-w-[70%]">
		<h2 class="text-3xl font-semibold leading-relaxed">Recent Events</h2>
		<p class="text-gray-500">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, temporibus.
		</p>
	</div>

	<section class="grid grid-cols-1 mt-8 md:mt-0 md:grid-cols-2 gap-8 md:gap-16 anchor-2">
		{#each [1, 2, 3] as key (key)}
			<EventCard />
		{/each}
	</section>
</div>

<style>
	.anchor-2 {
		grid-column: 2 / 4;
	}
</style>
