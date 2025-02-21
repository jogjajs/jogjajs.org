<script lang="ts">
	import '$lib/assets/global.css'

	import PageFooter from '$lib/components/page-footer.svelte'
	import PageHeader from '$lib/components/page-header.svelte'
	import Seo from '$lib/components/seo.svelte'
	import type { Snippet } from 'svelte'
	interface Props {
		children?: Snippet
	}

	let { children }: Props = $props()
</script>

<!-- default SEO just in case there's 404 or else -->
<Seo title="JogjaJS" description="JavaScript User Group based in Yogyakarta, Indonesia" />

<PageHeader />
<main class="min-h-screen dark:bg-black dark:text-white flex flex-col pb-40">
	{@render children?.()}
</main>
<PageFooter />
