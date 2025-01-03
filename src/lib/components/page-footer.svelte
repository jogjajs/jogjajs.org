<script lang="ts">
	import AkarIconsLinkOut from '~icons/akar-icons/link-out'
	import logo from '$lib/assets/logo-putih.svg'
</script>

<footer class="relative w-full bg-red-600 dark:bg-red-700 text-white">
	<span aria-hidden="true" class="onthel-bg"></span>
	<div class="max-w-screen-lg mx-auto py-12 px-4 md:px-8 lg:px-0">
		<div class="grid grid-cols-2 md:grid-cols-3 w-full gap-8">
			<div class="md:justify-self-start flex flex-col gap-2">
				<b class="mb-2">Explore</b>
				<a href="/" class="hover:underline">Home</a>
				<a href="/events" class="hover:underline">Events</a>
				<a href="/about" class="hover:underline">About us</a>
				<a href="/code-of-conduct" class="hover:underline">Code of Conduct</a>
				<a
					href="https://bit.ly/logo-jogjajs"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:underline flex items-center gap-1"
					>Brand assets <AkarIconsLinkOut class="w-3.5 h-3.5" /></a
				>
			</div>
			<div class="md:justify-self-center flex flex-col gap-2">
				<b class="mb-2">Socials</b>
				<a href="https://medium.com/jogjajs-community" class="hover:underline">Medium</a>
				<a href="https://www.instagram.com/jogjajs" class="hover:underline">Instagram</a>
				<a href="https://t.me/jogjajs" class="hover:underline">Telegram</a>
				<a href="https://github.com/jogjajs" class="hover:underline">Github</a>
				<a href="https://www.youtube.com/@jogjajs" class="hover:underline">Youtube</a>
			</div>
			<div class="md:justify-self-end flex flex-col gap-2">
				<b class="mb-2">More</b>
				<p>
					Business inquiries at <a
						target="_blank"
						rel="noopener noreferrer"
						href="mailto:jogjajs.organizer@gmail.com"
						class="hover:underline">jogjajs.organizer@gmail.com</a
					>
				</p>
			</div>
		</div>

		<div
			class="flex flex-col md:flex-row justify-between items-center md:items-end mt-20 gap-4 md:gap-0"
		>
			<img
				src={logo}
				alt="JOGJAJS logo"
				title="JogjaJS logo"
				width="100"
				height="100"
				decoding="async"
				loading="lazy"
			/>
			<p>© 2014-present JOGJAJS. All rights reserved.</p>
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
		background-image: url('../assets/jogjajs-footer.png');
		background-repeat: repeat-x;
		background-size: contain;
		background-position-y: 5px;
	}
</style>
