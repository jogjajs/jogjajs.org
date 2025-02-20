<script lang="ts">
	import { getUpcomingMeetup } from '$lib/utils/meetup'
	import type { Meetup } from '$lib/utils/types'
	import { format } from '@formkit/tempo'
	import GridBackground from './grid-background.svelte'

	let { meetups }: { meetups: Meetup[] } = $props()

	const upcomingMeetup = getUpcomingMeetup(meetups)
</script>

<GridBackground>
	<section
		class="relative flex flex-col bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent justify-center items-center text-center max-w-2xl mx-auto"
	>
		{#if upcomingMeetup}
			<div
				class="absolute -top-14 text-black dark:text-pink-50 bg-red-50 dark:bg-pink-800 border border-red-300 dark:border-pink-600 py-1 px-2 inline-flex items-center rounded-2xl text-sm space-x-2"
			>
				<span
					class="animate-pulse border border-red-500 bg-red-400 dark:bg-pink-300 dark:border-pink-400 w-2.5 h-2.5 rounded-full"
				></span>
				<span> Upcoming talks on {format(upcomingMeetup.date, 'D MMM')} </span>
			</div>
		{/if}

		<h1
			class="text-4xl md:text-5xl font-bold leading-tight text-gray-600 text-balance dark:text-transparent"
		>
			JavaScript User Group based in Yogyakarta, Indonesia
		</h1>

		<p class="max-w-md mx-auto mt-6 mb-8 text-gray-700 dark:text-transparent">
			Come and meet other developers & industry leaders interested in JavaScript and its ecosystem
			in Yogyakarta.
		</p>
	</section>
</GridBackground>
