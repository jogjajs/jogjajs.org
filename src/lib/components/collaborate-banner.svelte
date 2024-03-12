<div class="max-w-screen-xl mx-auto mt-32 px-4 md:px-0">
	<section
		class="flex flex-col justify-end gap-10 bg-gray-50 border-2 border-gray-300 shadow-lg rounded-lg overflow-hidden text-gray-950 h-[420px]"
	>
		<h2 class="text-5xl font-bold pl-6 max-w-80 leading-snug">Let's join and collaborate!</h2>
		<div class="flex flex-wrap md:flex-nowrap">
			{#each [1, 2, 3] as idx (idx)}
				<a
					class="w-full border-t even:md:border-x border-gray-300 p-6 hover:bg-gray-100 transition"
					href="/">Email</a
				>
			{/each}
		</div>
	</section>
</div>
