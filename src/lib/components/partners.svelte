<script lang="ts">
	import type { Partner } from '$lib/utils/types'

	const { data }: { data: { media: Partner[]; orgs: Partner[] } } = $props()
</script>

<div class="mt-32 max-w-(--breakpoint-lg) mx-auto space-y-16 px-4 md:px-0">
	<section class="text-center">
		<h2 class="text-3xl md:text-4xl font-bold leading-relaxed">Our Partners</h2>
		<p class="text-gray-400 dark:text-gray-400 text-balance">
			Huge shoutout to our awesome friends for backing us up!
		</p>
	</section>

	<section>
		<h3 class="text-2xl text-center font-bold leading-relaxed">Media Partner</h3>

		<ul class="flex flex-wrap justify-center gap-8 mt-8">
			{#each data.media as media (media.name)}
				<li class="flex flex-col items-center">
					<img src={media.logoPath} width="150" height="150" alt="org example" />
					<p>{media.name}</p>
				</li>
			{/each}
		</ul>
	</section>

	<section>
		<h3 class="text-2xl text-center font-bold leading-relaxed">Community Partner</h3>

		<ul class="flex flex-wrap justify-center gap-8 mt-8">
			{#each data.orgs as org (org.name)}
				<li class="flex flex-col items-center">
					<img src={org.logoPath} width="150" height="150" alt="org example" />
					<p>{org.name}</p>
				</li>
			{/each}
		</ul>
	</section>
</div>
