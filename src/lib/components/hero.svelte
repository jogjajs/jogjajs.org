<script lang="ts">
	import GridBackground from './grid-background.svelte';
</script>

<GridBackground>
	<section
		class="relative flex flex-col bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent justify-center items-center text-center max-w-2xl mx-auto"
	>
		<div
			class="absolute -top-14 text-black bg-red-50 dark:bg-red-200 border border-red-300 dark:border-red-500 py-1.5 px-2 inline-flex items-center rounded-2xl text-sm space-x-2"
		>
			<span
				class="animate-pulse border border-red-800 bg-red-600 dark:bg-red-800 w-2.5 h-2.5 rounded-full"
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

		<a href="/" class="relative px-6 py-3 font-bold text-white rounded-lg group">
			<span
				class="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"
			></span>
			<span
				class="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-difference dark:mix-blend-screen"
			></span>
			<span class="relative">Let's join & collaborate</span>
		</a>
	</section>
</GridBackground>
