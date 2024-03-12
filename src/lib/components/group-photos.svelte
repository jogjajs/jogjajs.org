<script>
	import Marqueeck from '@arisbh/marqueeck';
	import group1 from '$lib/assets/group-1.jpg';
	import group2 from '$lib/assets/group-2.jpg';
</script>

<div class="max-w-screen-lg mx-auto mt-16 md:mt-32 mb-8 text-center p-4 md:p-0">
	<h2 class="text-4xl font-bold leading-relaxed">Community Driven</h2>
	<p class="text-gray-500 text-balance">
		Realized by hundreds of developer at all levels in Yogyakarta and its surroundings.
	</p>
</div>

<div class="overflow-hidden">
	<Marqueeck options={{ direction: 'left' }}>
		<img src={group1} alt="Haha" width="300" height="300" />
		<img src={group2} alt="Haha" width="300" height="300" />
	</Marqueeck>
</div>
