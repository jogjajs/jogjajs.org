<script>
	import GroupPhotos from '$lib/components/group-photos.svelte'
	import Hero from '$lib/components/hero.svelte'
	import Partners from '$lib/components/partners.svelte'
	import RecentEvents from '$lib/components/recent-events.svelte'
	import square from '$lib/assets/square-organ.svg'
</script>

<Hero />
<GroupPhotos />
<div class="relative">
	<img
		src={square}
		alt="square"
		width="200"
		height="200"
		class="absolute -left-[8.5rem] top-[5rem] md:top-[5rem] lg:top-[16rem] lg:-left-10 z-10 opacity-60"
	/>
	<RecentEvents />
</div>
<Partners />
