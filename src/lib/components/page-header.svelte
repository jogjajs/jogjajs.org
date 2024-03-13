<script>
	import mainLogo from '$lib/assets/logo.svg';
	import whiteLogo from '$lib/assets/logo-putih.svg';
	import { Themes } from '$lib/data/constants';
	import { theme } from '$lib/data/store';
	import DarkModeToggle from './dark-mode-toggle.svelte';
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	/** @type {boolean} */
	let isDarkMode = true;
	let isLoaded = false;
	$: isDarkMode = $theme === Themes.Dark;

	onMount(() => {
		// to help avoid unwanted flashes of dark/light
		isLoaded = true;
	});
</script>

<header class="w-full p-4 md:px-0 dark:bg-black bg-opacity-35 dark:text-white">
	<div class="flex justify-between max-w-screen-lg mx-auto">
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
			<a class="hover:underline" href="/">Home</a>
			<a class="hover:underline" href="/">Events</a>
			<DarkModeToggle />
		</nav>
	</div>
</header>
