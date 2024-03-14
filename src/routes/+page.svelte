<script>
	import GroupPhotos from '$lib/components/group-photos.svelte';
	import Hero from '$lib/components/hero.svelte';
	import PageFooter from '$lib/components/page-footer.svelte';
	import PageHeader from '$lib/components/page-header.svelte';
	import Partners from '$lib/components/partners.svelte';
	import RecentEvents from '$lib/components/recent-events.svelte';
</script>

<div class="dark:bg-black dark:text-white flex flex-col">
	<PageHeader />
	<Hero />
	<GroupPhotos />
	<RecentEvents />
	<Partners />
	<PageFooter />
</div>
