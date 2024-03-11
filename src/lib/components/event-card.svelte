<script>
	import sample from '$lib/assets/event-sample.jpg';
</script>

<div
	class="flex flex-col gap-4 overflow-hidden rounded border transition duration-300 border-transparent hover:bg-gray-100 hover:border-gray-200 hover:shadow"
>
	<img src={sample} alt="Ini contoh" width="300" height="300" class="w-full h-[380px] rounded-b" />

	<div class="flex flex-col gap-4 pb-4 px-2">
		<h3 class="text-xl font-bold">JOGJAJS #29 - ReactJS with Codux and PWA</h3>
		<div>
			<p>Saturday, 26 August 2023</p>
			<p>
				at <a
					class="font-medium border-b-2 border-yellow-500 hover:border-b-4"
					href="https://example.com">Skyshi Digital Indonesia, PT.</a
				>
			</p>

			<a
				href="https://example.com"
				class="block mt-4 text-blue-600 hover:text-blue-500 hover:underline">Get RSVP</a
			>
		</div>
	</div>
</div>
