<script lang="ts">
	import GroupPhotos from '$lib/components/group-photos.svelte'
	import Hero from '$lib/components/hero.svelte'
	import Partners from '$lib/components/partners.svelte'
	import RecentEvents from '$lib/components/recent-events.svelte'
	import square from '$lib/assets/square-organ.svg'
	import type { LayoutData } from './$types'
	import Seo from '$lib/components/seo.svelte'

	const { data }: { data: LayoutData } = $props()
</script>

<Seo title="Home | JogjaJS" description="JavaScript User Group based in Yogyakarta, Indonesia" />

<Hero meetups={data.meetups} />
<GroupPhotos />
<div class="relative">
	<img
		src={square}
		alt="square"
		width="200"
		height="200"
		class="absolute -left-[8.5rem] top-[5rem] md:top-[5rem] lg:top-[16rem] lg:-left-10 z-5 opacity-60"
	/>
	<RecentEvents meetups={data.meetups} />
</div>
<Partners data={data.partners} />
