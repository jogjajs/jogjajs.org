import { getMeetups } from '$lib/utils/meetup'
import partnersJson from '$lib/contents/partners.json'
import organizersJson from '$lib/contents/organizers.json'
import type { LayoutLoad } from './$types'

// https://svelte.dev/docs/kit/adapter-static#Usage
export const prerender = true

export const load: LayoutLoad = async () => {
	const meetups = getMeetups()
	const organizers = organizersJson
	const partners = partnersJson.reduce(
		(acc, cur) => {
			if (cur.partnershipType === 'org') {
				acc.orgs.push(cur)
			} else if (cur.partnershipType === 'media') {
				acc.media.push(cur)
			}
			return acc
		},
		{ media: [], orgs: [] }
	)

	return {
		meetups,
		partners,
		organizers
	}
}
