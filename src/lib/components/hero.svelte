<script lang="ts">
	import GridBackground from './grid-background.svelte';
</script>

<GridBackground>
	<section
		class="relative flex flex-col bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent justify-center items-center text-center max-w-2xl mx-auto"
	>
		<div
			class="absolute -top-14 text-black dark:text-red-50 bg-red-50 dark:bg-pink-800 border border-pink-300 dark:border-red-600 py-1.5 px-2 inline-flex items-center rounded-2xl text-sm space-x-2"
		>
			<span
				class="animate-pulse border border-red-800 bg-red-600 dark:bg-pink-300 dark:border-pink-400 w-2.5 h-2.5 rounded-full"
			></span>
			<span> Upcoming talks on 7 March </span>
		</div>

		<h1
			class="text-3xl md:text-5xl font-bold leading-tight text-gray-600 text-balance dark:text-transparent"
		>
			JavaScript User Group based in Yogyakarta, Indonesia
		</h1>

		<p class="max-w-md mx-auto mt-6 mb-8 text-gray-600 dark:text-transparent">
			Come and meet other developers & industry leaders interested in JavaScript and its ecosystem
			in Yogyakarta.
		</p>
	</section>
</GridBackground>
