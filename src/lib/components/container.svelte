<script lang="ts">
	import type { Snippet } from 'svelte'

	interface Props {
		children?: Snippet
	}

	let { children }: Props = $props()
</script>

<div class="max-w-(--breakpoint-lg) mx-auto w-full px-4 md:px-0 mt-20">
	{@render children?.()}
</div>
