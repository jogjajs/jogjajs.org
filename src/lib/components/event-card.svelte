<script lang="ts">
	import AkarIconsLinkOut from '~icons/akar-icons/link-out'
	import SpeakerTooltips from './speaker-tooltips.svelte'
	import Link from './link.svelte'
	import type { Meetup } from '$lib/utils/types'
	import { format } from '@formkit/tempo'

	let { meetup }: { meetup: Meetup } = $props()

	const speakers = meetup.speakers.map((speaker, idx) => ({
		id: idx,
		name: speaker.name,
		designation: speaker.description,
		image: speaker.photoUrl
	}))
</script>

<div
	class="flex flex-col gap-4 rounded-sm border transition duration-300 border-transparent hover:bg-gray-100 dark:hover:bg-gray-950 dark:hover:border-gray-800 hover:border-gray-200 hover:shadow-sm"
>
	<img
		src={meetup.coverImageUrl}
		alt="Ini contoh"
		width="400"
		height="400"
		class="w-full h-[380px] md:h-[430px] lg:h-[410px] rounded-t"
	/>

	<div class="flex flex-col gap-4 pb-4 px-2">
		<h3 class="text-xl font-bold text-balance">{meetup.title}</h3>
		<SpeakerTooltips items={speakers} />
		<div>
			<p>{format(meetup.date, 'dddd, D MMMM YYYY')}</p>
			<p>at {meetup.venue}</p>

			<div class="flex items-center gap-6 mt-4">
				<Link
					target="_blank"
					rel="noopener noreferrer"
					href={meetup.rsvpLink}
					extClass="text-blue-600 inline-flex items-start gap-1 dark:text-blue-500"
					>Get RSVP <AkarIconsLinkOut width="15" height="15" /></Link
				>
			</div>
		</div>
	</div>
</div>
