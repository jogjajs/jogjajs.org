<script>
	import logo from '$lib/assets/logo.svg';
	import DarkModeToggle from './dark-mode-toggle.svelte';
</script>

<header class="w-full p-4 md:px-0 dark:bg-black bg-opacity-35 dark:text-white">
	<div class="flex justify-between max-w-screen-lg mx-auto">
		<a href="/">
			<img src={logo} alt="JogjaJS logo" width="100" height="100" />
		</a>

		<nav class="space-x-8">
			<a class="hover:underline" href="/">Home</a>
			<a class="hover:underline" href="/">Events</a>
			<DarkModeToggle />
		</nav>
	</div>
</header>
