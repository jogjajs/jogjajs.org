<script lang="ts">
	import mainLogo from '$lib/assets/logo.svg'
	import whiteLogo from '$lib/assets/logo-putih.svg'
	import { Themes } from '$lib/data/constants'
	import { theme } from '$lib/data/store'
	import DarkModeToggle from './dark-mode-toggle.svelte'
	import { onMount } from 'svelte'
	import { blur } from 'svelte/transition'
	import { quintOut } from 'svelte/easing'
	import Link from './link.svelte'

	let isDarkMode = $state(true)
	let isLoaded = $state(false)

	$effect(() => {
		isDarkMode = $theme === Themes.Dark
	})

	onMount(() => {
		// to help avoid unwanted flashes of dark/light
		isLoaded = true
	})
</script>

<header class="w-full p-4 md:px-8 lg:px-0 dark:bg-black bg-opacity-35 dark:text-white">
	<div class="flex justify-between max-w-(--breakpoint-lg) mx-auto">
		<a href="/" class="h-6 overflow-hidden">
			{#if isLoaded}
				<img
					transition:blur={{
						duration: 500,
						delay: 200,
						opacity: 0.5,
						amount: 10,
						easing: quintOut
					}}
					src={isDarkMode ? whiteLogo : mainLogo}
					alt="JogjaJS logo"
					width="100"
					height="100"
				/>
			{/if}
		</a>

		<nav class="space-x-8">
			<Link href="/">Home</Link>
			<Link href="/events">Events</Link>
			<DarkModeToggle />
		</nav>
	</div>
</header>
