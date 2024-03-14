<script lang="ts">
	import { onMount, tick } from 'svelte';
	import AkarIconsSun from '~icons/akar-icons/sun';
	import AkarIconsMoon from '~icons/akar-icons/moon';
	import { browser } from '$app/environment';
	import { Themes } from '$lib/data/constants';
	import { theme } from '$lib/data/store';
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let isDarkMode: boolean;
	$: isDarkMode = $theme === Themes.Dark;

	let enableOrDisable: string;
	$: enableOrDisable = isDarkMode ? 'Disable' : 'Enable';

	// There's also some code in app.html to help avoid unwanted flashes of dark/light
	const toggleDarkMode = async () => {
		theme.set(isDarkMode ? Themes.Light : Themes.Dark);

		if (browser) {
			window.localStorage.setItem('theme', JSON.stringify($theme));

			// Not exactly sure why this is needed but without it, the first click fails.
			await tick();

			if (isDarkMode) {
				document.documentElement.classList.add('dark');
				document.documentElement.classList.remove('light');
			} else {
				document.documentElement.classList.remove('dark');
				document.documentElement.classList.add('light');
			}
		}
	};

	onMount(() => {
		// This same logic is in app.html also, but I didn't want to import it there, so it's just duplicated in both places.
		if (
			('theme' in localStorage && JSON.parse(localStorage.theme) === Themes.Dark) ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			theme.set(Themes.Dark);
		}
	});
</script>

<button
	title="{enableOrDisable} dark mode"
	class="inline-flex items-center align-middle hover:text-blue-600 hover:dark:text-yellow-600 outline-none focus:ring transition rounded-full p-1"
	on:click={toggleDarkMode}
>
	{#if isDarkMode}
		<span in:fly={{ duration: 300, y: -500, opacity: 0.5, easing: quintOut }}>
			<AkarIconsSun />
		</span>
	{:else}
		<span in:fly={{ duration: 300, y: 500, opacity: 0.5, easing: quintOut }}>
			<AkarIconsMoon />
		</span>
	{/if}
</button>
