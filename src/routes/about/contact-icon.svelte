<script lang="ts">
	import AkarIconsXFill from '~icons/akar-icons/x-fill'
	import AkarIconsGlobe from '~icons/akar-icons/globe'
	import AkarIconsLinkedinBoxFill from '~icons/akar-icons/linkedin-box-fill'
	import AkarIconsInstagramFill from '~icons/akar-icons/instagram-fill'

	const { name }: { name: string } = $props()
</script>

{#if name === 'instagram'}
	<AkarIconsInstagramFill />
{:else if name === 'x'}
	<AkarIconsXFill />
{:else if name === 'linkedin'}
	<AkarIconsLinkedinBoxFill />
{:else}
	<AkarIconsGlobe />
{/if}
