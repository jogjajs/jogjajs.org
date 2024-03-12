<script>
	import logo from '$lib/assets/logo.svg';
</script>

<footer
	class="w-full py-12 px-4 md:px-0 bg-gray-100 mt-20 opacity-70 hover:opacity-100 duration-300 transition-opacity"
>
	<div class="max-w-screen-lg mx-auto">
		<div class="grid grid-cols-2 md:grid-cols-3 w-full gap-8">
			<div class="md:justify-self-start flex flex-col gap-2">
				<b class="mb-2">Explore</b>
				<a href="https://github.com">Home</a>
				<a href="https://github.com">Events</a>
				<a href="https://github.com">About us</a>
				<a href="https://github.com">Code of Conduct</a>
			</div>
			<div class="md:justify-self-center flex flex-col gap-2">
				<b class="mb-2">Socials</b>
				<a href="https://github.com">Instagram</a>
				<a href="https://github.com">Github</a>
				<a href="https://github.com">Youtube</a>
			</div>
			<div class="md:justify-self-end flex flex-col gap-2">
				<b class="mb-2">More</b>
				<a href="https://github.com">Github</a>
			</div>
		</div>

		<div
			class="flex flex-col md:flex-row justify-between items-center md:items-end mt-20 gap-4 md:gap-0"
		>
			<div class="flex items-center md:items-start flex-col gap-2">
				<img src={logo} alt="JogjaJS logo" width="100" height="100" />
				<p>
					Made with <a href="https://kit.svelte.dev" class="underline hover:no-underline"
						>SvelteKit</a
					>
					and
					<a href="https://tailwindcss.com" class="underline hover:no-underline">Tailwind CSS</a>.
				</p>
			</div>
			<p>© 2014-present JogjaJS. All rights reserved.</p>
		</div>
	</div>
</footer>
