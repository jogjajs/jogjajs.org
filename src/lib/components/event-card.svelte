<script lang="ts">
	import AkarIconsLinkOut from '~icons/akar-icons/link-out';
	import sample from '$lib/assets/event-sample.jpg';
	import SpeakerTooltips from './speaker-tooltips.svelte';
	const people = [
		{
			id: 1,
			name: 'John Doe',
			designation: 'Software Engineer',
			image:
				'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80'
		},
		{
			id: 2,
			name: 'Robert Johnson',
			designation: 'Product Manager',
			image:
				'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
		},
		{
			id: 3,
			name: 'Jane Smith',
			designation: 'Data Scientist',
			image:
				'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
		}
	];
</script>

<div
	class="flex flex-col gap-4 rounded border transition duration-300 border-transparent hover:bg-gray-100 hover:dark:bg-gray-950 hover:dark:border-gray-800 hover:border-gray-200 hover:shadow"
>
	<img src={sample} alt="Ini contoh" width="400" height="400" class="w-full h-[420px] rounded-t" />

	<div class="flex flex-col gap-4 pb-4 px-2">
		<h3 class="text-xl font-bold text-balance">JOGJAJS #29 - ReactJS with Codux and PWA</h3>
		<SpeakerTooltips items={people} />
		<div>
			<p>Saturday, 26 August 2023</p>
			<p>at Skyshi Digital Indonesia, PT.</p>

			<div class="flex items-center gap-6 mt-4">
				<a
					href="https://example.com"
					class="text-blue-600 inline-flex items-start gap-1 dark:text-blue-500 hover:text-blue-500 hover:underline"
					>Get RSVP <AkarIconsLinkOut width="15" height="15" /></a
				>
			</div>
		</div>
	</div>
</div>
