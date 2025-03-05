<script lang="ts">
	import Container from '$lib/components/container.svelte'
	import EventCard from '$lib/components/event-card.svelte'
	import Seo from '$lib/components/seo.svelte'
	import type { LayoutData } from '../$types'

	let { data }: { data: LayoutData } = $props()

	// Pagination
	let currentPage = $state(1)
	let eventsPerPage = 6

	// Computed values
	let totalPages = $derived(Math.ceil(data.meetups.length / eventsPerPage))
	let paginatedEvents = $derived(
		data.meetups.slice((currentPage - 1) * eventsPerPage, currentPage * eventsPerPage)
	)

	// Change page functions
	function goToPage(page: number) {
		if (page >= 1 && page <= totalPages) {
			currentPage = page
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}

	function nextPage() {
		if (currentPage < totalPages) {
			goToPage(currentPage + 1)
		}
	}

	function prevPage() {
		if (currentPage > 1) {
			goToPage(currentPage - 1)
		}
	}
</script>

<Seo
	title="Events | JogjaJS"
	description="Find the nearest tech and JavaScript-related event in Yogyakarta"
/>

<div
	class="bg-linear-to-b from-red-500/20 to-red-500/30 dark:from-red-600/20 dark:to-red-600/30 w-full"
>
	<div class="header px-4 md:px-8 lg:px-0 py-20 md:py-28">
		<section class="max-w-(--breakpoint-lg) mx-auto space-y-4">
			<h1
				class="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-b from-red-600/60 to-red-600/100 dark:from-red-400/40 dark:to-red-400/80"
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
			{#each paginatedEvents as meetup (meetup.title)}
				<EventCard {meetup} />
			{/each}
		</section>

		<!-- Pagination controls -->
		{#if totalPages > 1}
			<div class="flex justify-center items-center mt-12 mb-8 space-x-2">
				<button
					onclick={prevPage}
					class="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer disabled:hover:bg-white disabled:hover:dark:bg-black"
					disabled={currentPage === 1}
					aria-label="Previous page"
				>
					&laquo;
				</button>

				<div class="flex space-x-2 mx-2">
					{#each Array(totalPages) as _, i}
						{#if totalPages <= 7 || i + 1 === 1 || i + 1 === totalPages || (i + 1 >= currentPage - 1 && i + 1 <= currentPage + 1)}
							<button
								onclick={() => goToPage(i + 1)}
								class="w-10 h-10 rounded-md border border-gray-300 dark:border-gray-700 text-black hover:bg-red-500 hover:text-white dark:hover:bg-red-700 dark:text-white cursor-pointer disabled:hover:bg-white disabled:hover:dark:bg-black
									{currentPage === i + 1 ? 'bg-red-500 dark:bg-red-700 text-white' : ''}"
								aria-label="Go to page {i + 1}"
								aria-current={currentPage === i + 1 ? 'page' : undefined}
							>
								{i + 1}
							</button>
						{:else if (i + 1 === 2 && currentPage > 3) || (i + 1 === totalPages - 1 && currentPage < totalPages - 2)}
							<span class="flex items-center justify-center w-10 h-10">...</span>
						{/if}
					{/each}
				</div>

				<button
					onclick={nextPage}
					class="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer disabled:hover:bg-white disabled:hover:dark:bg-black"
					disabled={currentPage === totalPages}
					aria-label="Next page"
				>
					&raquo;
				</button>
			</div>

			<div class="text-center text-gray-500 dark:text-gray-400 mb-8">
				Showing {(currentPage - 1) * eventsPerPage + 1} to {Math.min(
					currentPage * eventsPerPage,
					data.meetups.length
				)} of {data.meetups.length} events
			</div>
		{/if}
	</div>
</Container>

<style>
	.header {
		background-image: url('../../lib/assets/noise.svg');
		background-repeat: repeat;
	}
</style>
