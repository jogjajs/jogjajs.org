<script lang="ts">
	import '$lib/assets/global.css'

	import PageFooter from '$lib/components/page-footer.svelte'
	import PageHeader from '$lib/components/page-header.svelte'
	interface Props {
		children?: import('svelte').Snippet
	}

	let { children }: Props = $props()
</script>

<svelte:head>
	<title>JogjaJS</title>
</svelte:head>

<PageHeader />
<main class="min-h-screen dark:bg-black dark:text-white flex flex-col pb-40">
	{@render children?.()}
</main>
<PageFooter />
