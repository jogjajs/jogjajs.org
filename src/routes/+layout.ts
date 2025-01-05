import type { LayoutLoad } from './$types'
import meetups from '$lib/contents/meetups.json'

// https://svelte.dev/docs/kit/adapter-static#Usage
export const prerender = true

export const load: LayoutLoad = async () => {
	return {
		data: meetups
	}
}
