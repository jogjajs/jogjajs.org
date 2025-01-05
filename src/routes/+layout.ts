import { getMeetups } from '$lib/utils/meetup'
import type { LayoutLoad } from './$types'

// https://svelte.dev/docs/kit/adapter-static#Usage
export const prerender = true

export const load: LayoutLoad = async () => {
	const meetups = getMeetups()

	return {
		meetups
	}
}
