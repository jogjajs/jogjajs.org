<div class="mt-32 max-w-screen-lg mx-auto space-y-16 px-4 md:px-0">
	<section class="text-center">
		<h2 class="text-4xl font-bold leading-relaxed">Our Partners</h2>
		<p class="text-gray-600 text-balance">
			Huge shoutout to our awesome friends for backing us up!
		</p>
	</section>

	<section>
		<h3 class="text-2xl text-center font-bold leading-relaxed">Media Partner</h3>

		<ul class="flex flex-wrap justify-center gap-8 mt-8">
			{#each [1, 2, 3] as idx (idx)}
				<li class="flex flex-col items-center">
					<img src="https://picsum.photos/180/180" width="180" height="180" alt="org example" />
					<p>Media Indonesia</p>
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<h3 class="text-2xl text-center font-bold leading-relaxed">Community Partner</h3>

		<ul class="flex flex-wrap justify-center gap-8 mt-8">
			{#each [1, 2, 3, 4, 5] as idx (idx)}
				<li class="flex flex-col items-center">
					<img src="https://picsum.photos/180/180" width="180" height="180" alt="org example" />
					<p>Org Indonesia</p>
				</li>
			{/each}
		</ul>
	</section>
</div>
