<script>
	import Container from '$lib/components/container.svelte'
	import EventCard from '$lib/components/event-card.svelte'
</script>

<div
	class="bg-gradient-to-b from-red-500/20 to-red-500/30 dark:from-red-600/20 dark:to-red-600/30 w-full"
>
	<div class="header px-4 md:px-8 lg:px-0 py-20 md:py-28">
		<section class="max-w-screen-lg mx-auto space-y-4">
			<h1
				class="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-red-600/60 to-red-600/100 dark:from-red-400/40 dark:to-red-400/80"
			>
				Meetups & Kongkow
			</h1>
			<p
				class="text-gray-700 dark:text-red-100 md:w-3/4 lg:w-1/2 md:text-balance leading-relaxed lg:leading-loose"
			>
				We host a variety of events, usually on a monthly basis. These include Meetups for in-depth
				learning and Kongkow (new in 2024!), our casual hangouts for fun, code discussions, and
				building connections.
			</p>
		</section>
	</div>
</div>

<Container>
	<div class="flex flex-col mt-8 md:mt-16">
		<section class="flex z-20 flex-wrap justify-center md:mt-0 gap-8 md:gap-28">
			{#each [1, 2, 3] as key (key)}
				<EventCard event={{}} />
			{/each}
		</section>
	</div>
</Container>

<style>
	.header {
		background-image: url('../../lib/assets/noise.svg');
		background-repeat: repeat;
	}
</style>
