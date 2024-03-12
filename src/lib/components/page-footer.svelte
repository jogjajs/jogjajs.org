<script>
	import logo from '$lib/assets/logo-putih.svg';
</script>

<footer class="relative w-full bg-red-600 text-white mt-40">
	<span aria-hidden="true" class="onthel-bg"></span>
	<div class="max-w-screen-lg mx-auto py-12 px-4 md:px-0">
		<div class="grid grid-cols-2 md:grid-cols-3 w-full gap-8">
			<div class="md:justify-self-start flex flex-col gap-2">
				<b class="mb-2">Explore</b>
				<a href="/" class="hover:underline">Home</a>
				<a href="/events" class="hover:underline">Events</a>
				<a href="/about" class="hover:underline">About us</a>
				<a href="/code-of-conduct" class="hover:underline">Code of Conduct</a>
			</div>
			<div class="md:justify-self-center flex flex-col gap-2">
				<b class="mb-2">Socials</b>
				<a href="https://github.com" class="hover:underline">Instagram</a>
				<a href="https://github.com" class="hover:underline">Telegram</a>
				<a href="https://github.com" class="hover:underline">Github</a>
				<a href="https://github.com" class="hover:underline">Youtube</a>
			</div>
			<div class="md:justify-self-end flex flex-col gap-2">
				<b class="mb-2">More</b>
				<a href="https://github.com" class="hover:underline">Github</a>
			</div>
		</div>

		<div
			class="flex flex-col md:flex-row justify-between items-center md:items-end mt-20 gap-4 md:gap-0"
		>
			<div class="flex items-center md:items-start flex-col gap-2">
				<img
					src={logo}
					alt="JogjaJS logo"
					width="100"
					height="100"
					decoding="async"
					loading="lazy"
				/>
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

<style>
	.onthel-bg {
		height: 30px;
		width: 100%;
		display: block;
		position: absolute;
		top: -30px;
		background-image: url('../assets/jogjajs-footer.webp');
		background-repeat: repeat-x;
		background-size: contain;
		background-position-y: 5px;
	}
</style>
