<script lang="ts">
	import { cn } from '$lib/utils/cn';

	interface Props {
		href: string;
		extClass?: string;
		children?: import('svelte').Snippet;
		[key: string]: unknown;
	}

	const { href, extClass, children, ...props }: Props = $props();
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
