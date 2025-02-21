<script lang="ts">
	import { cn } from '$lib/utils/cn'
	import type { Snippet } from 'svelte'

	interface Props {
		href: string
		extClass?: string
		children?: Snippet
		[key: string]: unknown
	}

	const { href, extClass, children, ...props }: Props = $props()
</script>

<a
	class={cn(
		'hover:text-red-500 border-b-2 border-transparent hover:border-b-red-500 border-dashed transition',
		extClass
	)}
	{href}
	{...props}
>
	{@render children?.()}
</a>
