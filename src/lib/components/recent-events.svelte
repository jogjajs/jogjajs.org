<script>
	import EventCard from './event-card.svelte';
</script>

<div
	class="block md:grid grid-cols-1 md:grid-cols-3 mt-32 md:mt-64 pb-10 max-w-screen-xl mx-auto px-4 md:px-0"
>
	<div class="md:max-w-[70%]">
		<h2 class="text-3xl font-semibold leading-relaxed">Recent Events</h2>
		<p class="text-gray-500 dark:text-gray-400">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, temporibus.
		</p>
	</div>

	<section class="grid grid-cols-1 mt-8 md:mt-0 md:grid-cols-2 gap-8 md:gap-16 anchor">
		{#each [1, 2, 3] as key (key)}
			<EventCard />
		{/each}
		<a href="/" class="relative px-6 py-3 font-bold text-black group md:col-span-2 w-fit">
			<span
				class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"
			></span>
			<span class="absolute inset-0 w-full h-full border-4 border-black"></span>
			<span class="relative">More events</span>
		</a>
	</section>
</div>

<style>
	.anchor {
		grid-column: 2 / 4;
	}
</style>
