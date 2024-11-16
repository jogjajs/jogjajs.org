<script lang="ts">
	import type { MappedMeetup } from '$lib/utils/types'
	import EventCard from './event-card.svelte'

	const { meetups }: { meetups: MappedMeetup[] } = $props()
</script>

<div
	class="block lg:grid grid-cols-1 lg:grid-cols-3 mt-32 lg:mt-64 pb-10 max-w-screen-xl mx-auto px-4 md:px-8 lg:px-0"
>
	<div class="md:max-w-[70%]">
		<h2 class="text-3xl md:text-4xl font-semibold leading-relaxed">Recent Events</h2>
		<p class="text-gray-500 dark:text-gray-400 lg:mb-8">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, temporibus.
		</p>
		<a
			href="/events"
			class="hidden lg:block relative px-6 py-3 font-bold text-white rounded-lg group w-fit"
		>
			<span
				class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"
			></span>
			<span
				class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-difference dark:mix-blend-screen"
			></span>
			<span class="relative">More events</span>
		</a>
	</div>

	<section
		class="relative z-20 grid grid-cols-1 mt-8 lg:mt-0 md:grid-cols-2 gap-8 lg:gap-16 anchor"
	>
		{#each meetups as meetup (meetup.title)}
			<EventCard event={meetup} />
		{/each}
		<a
			href="/events"
			class="relative block lg:hidden px-6 py-3 font-bold text-white rounded-lg group md:col-span-2 w-fit"
		>
			<span
				class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"
			></span>
			<span
				class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-difference dark:mix-blend-screen"
			></span>
			<span class="relative">More events</span>
		</a>
	</section>
</div>

<style>
	.anchor {
		grid-column: 2 / 4;
	}
</style>
