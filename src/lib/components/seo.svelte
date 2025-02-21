<script lang="ts">
	import { page } from '$app/state'

	interface Props {
		title: string
		description: string
	}

	const { title, description }: Props = $props()
	const url = page.url.href
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	<meta name="keywords" content="jogjajs, javascript, jogja, komunitas javascript di yogyakarta" />
	<meta name="robots" content="index,follow" />
	<meta name="googlebot" content="index,follow" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@jogjajs" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="og:title" content={title} />
	<meta name="og:url" content={url} />
	<meta name="og:type" content="website" />
	<meta name="og:description" content={description} />
	<meta name="og:image" content="/banner.png" />
	<meta name="og:site_name" content="Official JogjaJS website" />

	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<meta name="apple-mobile-web-app-title" content="JogjaJS" />
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>
