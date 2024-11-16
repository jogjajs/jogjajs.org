import { getMeetups } from '$lib/utils/meetup'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const meetups = await getMeetups()
	return { meetups }
}
