<script>
	import '$lib/assets/global.css';
	import '@fontsource/overpass/400.css';
	import '@fontsource/overpass/500.css';
	import '@fontsource/overpass/600.css';
	import '@fontsource/overpass/700.css';

	import PageFooter from '$lib/components/page-footer.svelte';
	import PageHeader from '$lib/components/page-header.svelte';
</script>

<svelte:head>
	<title>JogjaJS</title>
</svelte:head>

<PageHeader />
<main class="min-h-screen dark:bg-black dark:text-white flex flex-col pb-40">
	<slot />
</main>
<PageFooter />
