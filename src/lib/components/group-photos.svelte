<script>
	import Marqueeck from '@arisbh/marqueeck'
	import group1 from '$lib/assets/group-1.jpg'
	import group2 from '$lib/assets/group-2.jpg'
</script>

<div class="max-w-(--breakpoint-lg) mx-auto mt-16 md:mt-32 mb-8 text-center p-4 md:p-0">
	<h2 class="text-3xl md:text-4xl font-bold leading-relaxed dark:text-white">Community Driven</h2>
	<p class="text-gray-500 dark:text-gray-400 text-balance">
		Realized by hundreds of developer at all levels in Yogyakarta and its surroundings.
	</p>
</div>

<div class="overflow-hidden grayscale hover:grayscale-0 transition duration-300">
	<Marqueeck options={{ direction: 'left' }}>
		<img src={group1} alt="" width="300" height="300" loading="lazy" decoding="async" />
		<img src={group2} alt="" width="300" height="300" loading="lazy" decoding="async" />
	</Marqueeck>
</div>
