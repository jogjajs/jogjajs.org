<script lang="ts">
	import Container from '$lib/components/container.svelte'
	import groupPhoto from '$lib/assets/group-2.jpg'
	import type { LayoutData } from '../$types'
	import ContactIcon from './contact-icon.svelte'

	const { data }: { data: LayoutData } = $props()
</script>

<Container>
	<section class="mb-28 px-4 md:px-8 lg:px-0">
		<h1
			class="text-3xl md:text-6xl font-bold tracking-tight text-transparent
      bg-clip-text bg-linear-to-b from-red-600/65 to-red-600/100 dark:from-red-500/40 dark:to-red-500/80"
		>
			About JOGJAJS
		</h1>
	</section>

	<div class="relative">
		<span
			class="year absolute top-[3px] -left-[57px] md:-left-[115px] font-bold text-5xl md:text-7xl font-mono text-transparent bg-clip-text bg-linear-to-b from-red-500 dark:from-gray-500 to-violet-950 dark:to-gray-300"
			>2018</span
		>
		<figure>
			<img src={groupPhoto} alt="Group hahah" />
			<figcaption class="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
				Community folks between 1945 - 1975
			</figcaption>
		</figure>

		<h2 class="text-3xl md:text-4xl font-bold leading-relaxed mt-8">Start from the ground...</h2>
		<p class="text-gray-600 dark:text-gray-400">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam iusto, aperiam saepe quas
			dolores quae. Dolorum a molestias facilis molestiae?
		</p>
		<p class="text-gray-600 dark:text-gray-400">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam iusto, aperiam saepe quas
			dolores quae. Dolorum a molestias facilis molestiae?
		</p>
	</div>

	<figure class="relative mt-16">
		<span
			class="year absolute top-[3px] -left-[57px] md:-left-[115px] font-bold text-5xl md:text-7xl font-mono text-transparent bg-clip-text bg-linear-to-b from-red-500 dark:from-gray-500 to-violet-950 dark:to-gray-300"
			>2018</span
		>
		<img src={groupPhoto} alt="Group hahah" />
		<figcaption class="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
			Community folks between 1945 - 1975
		</figcaption>
	</figure>
	<figure class="mt-8">
		<div class="grid grid-cols-2 gap-4">
			<img src={groupPhoto} alt="Group hahah" />
			<img src={groupPhoto} alt="Group hahah" />
			<img src={groupPhoto} alt="Group hahah" />
			<img src={groupPhoto} alt="Group hahah" />
			<img src={groupPhoto} alt="Group hahah" />
			<img src={groupPhoto} alt="Group hahah" />
		</div>
		<figcaption class="text-center mt-2 text-sm text-gray-600 dark:text-gray-400">
			Community folks between 1945 - 1975
		</figcaption>
	</figure>
	<h2 class="text-3xl md:text-4xl font-bold leading-relaxed mt-8">Host over 100+ events</h2>
	<p class="text-gray-600 dark:text-gray-400">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae ex facere officiis qui illum
		voluptatem incidunt iste at itaque repellat, blanditiis eius pariatur odio sed natus similique
		magni, veritatis culpa.
	</p>

	<section>
		<h3 class="font-bold text-2xl md:text-3xl leading-relaxed mt-8">Meet the organizers</h3>
		<p class="text-gray-600 dark:text-gray-400">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, vero.
		</p>
		<div class="flex flex-wrap justify-center gap-14 mt-8">
			{#each data.organizers as org (org.name)}
				<div class="text-center flex flex-col items-center">
					<img
						src={org.photoPath}
						width="150"
						height="150"
						alt={`${org.name} avatar`}
						class="mb-3"
					/>
					<p>{org.name}</p>
					<small class="text-gray-600 dark:text-gray-400">{org.shortBio}</small>
					<div class="flex items-center gap-2">
						{#each org.contacts as contact, idx (idx)}
							<a
								href={contact.url}
								title={contact.name}
								class="rounded-full p-1 mt-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-xs"
							>
								<ContactIcon name={contact.name} />
							</a>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>
</Container>

<style lang="postcss">
	.year {
		transform: rotate(90deg);
		text-orientation: upright;
	}

	img {
		border-radius: theme(borderRadius.md);
		box-shadow: theme(boxShadow.lg);
	}
</style>
