<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let href: string;
	export let extClass: string = '';
</script>

<a
	class={cn(
		'hover:text-red-500 border-b-2 border-transparent hover:border-b-red-500 border-dashed transition',
		extClass
	)}
	{href}
>
	<slot />
</a>
