<script lang="ts">
	interface Props {
		showFade?: boolean;
		children?: import('svelte').Snippet;
	}

	let { showFade = true, children }: Props = $props();
</script>

<div
	class="relative flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2]"
>
	<!-- Radial gradient for the container to give a faded look -->
	{#if showFade}
		<div
			class="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"
		></div>
	{/if}
	{@render children?.()}
</div>
