<script lang="ts">
	import AkarIconsLinkOut from '~icons/akar-icons/link-out'
	import SpeakerTooltips from './speaker-tooltips.svelte'
	import Link from './link.svelte'

	const { event }: { event: any } = $props()

	const speakers = event.speakers.map((speaker, idx) => ({
		id: idx,
		name: speaker.name,
		designation: speaker.description,
		image: speaker.photoUrl
	}))
</script>

<div
	class="flex flex-col gap-4 rounded border transition duration-300 border-transparent hover:bg-gray-100 hover:dark:bg-gray-950 hover:dark:border-gray-800 hover:border-gray-200 hover:shadow"
>
	<img
		src={event.coverImageUrl}
		alt="Ini contoh"
		width="400"
		height="400"
		class="w-full h-[380px] md:h-[430px] lg:h-[410px] rounded-t"
	/>

	<div class="flex flex-col gap-4 pb-4 px-2">
		<h3 class="text-xl font-bold text-balance">{event.title}</h3>
		<SpeakerTooltips items={speakers} />
		<div>
			<p>{new Intl.DateTimeFormat('us', { dateStyle: 'full' }).format(new Date(event.date))}</p>
			<p>at {event.venue}</p>

			<div class="flex items-center gap-6 mt-4">
				{#if event.isStillActive}
					<Link
						target="_blank"
						rel="noopener noreferrer"
						href={event.rsvpLink}
						extClass="text-blue-600 inline-flex items-start gap-1 dark:text-blue-500"
						>Get RSVP <AkarIconsLinkOut width="15" height="15" /></Link
					>
				{/if}
			</div>
		</div>
	</div>
</div>
