<script lang="ts">
	import { Motion, useTransform, AnimatePresence, useMotionValue, useSpring } from 'svelte-motion';

	interface Props {
		items: {
			id: number;
			name: string;
			designation: string;
			image: string;
		}[];
	}

	let { items }: Props = $props();

	let hoveredIndex: number | null = $state(null);
	const springConfig = { stiffness: 100, damping: 5 };
	const x = useMotionValue(0); // going to set this value on mouse move
	// rotate the tooltip
	const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
	// translate the tooltip
	const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);
	const handleMouseMove = (event: MouseEvent) => {
		// @ts-expect-error unknown offsetWidth.
		const halfWidth = event.target?.offsetWidth / 2;
		x.set(event.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
	};
</script>

<div class="group flex flex-row">
	{#each items as item (item.name)}
		<div
			role="tooltip"
			class="relative -mr-4"
			onmouseenter={() => (hoveredIndex = item.id)}
			onmouseleave={() => (hoveredIndex = null)}
		>
			<AnimatePresence show={true}>
				{#if hoveredIndex === item.id}
					<Motion
						initial={{ opacity: 0, y: 20, scale: 0.6 }}
						animate={{
							opacity: 1,
							y: 0,
							scale: 1,
							transition: {
								type: 'spring',
								stiffness: 260,
								damping: 10
							}
						}}
						exit={{ opacity: 0, y: 20, scale: 0.6 }}
						style={{
							translateX: translateX,
							rotate: rotate,
							whiteSpace: 'nowrap'
						}}
					>
						{#snippet children({ motion })}
							<div
								use:motion
								class="absolute -left-1/2 -top-16 z-50 flex translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
							>
								<div
									class="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
								></div>
								<div
									class="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent"
								></div>
								<div class="relative z-30 whitespace-nowrap text-base font-bold text-white">
									{item.name}
								</div>
								<div class="whitespace-nowrap text-xs text-white">{item.designation}</div>
							</div>
						{/snippet}
					</Motion>
				{/if}
			</AnimatePresence>
			<img
				onmousemove={handleMouseMove}
				height={100}
				width={100}
				src={item.image}
				alt={item.name}
				class="relative !m-0 h-10 w-10 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
			/>
		</div>
	{/each}
</div>
