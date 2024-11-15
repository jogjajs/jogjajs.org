import cosmic from '$lib/data/cosmic'
import { eventStatus } from '$lib/utils/meetup'
import type { PageServerLoad } from './$types'

interface Meetup {
	title: string
	metadata: {
		cover_image: {
			imgix_url: string
			url: string
		}
		is_open_registration: boolean
		date: string
		rsvp_link: string
		venue: string
		speakers: {
			title: string
			metadata: {
				description: string
				photo: {
					imgix_url: string
					url: string
				}
			}
		}[]
	}
}

function mapData(data: Meetup[]) {
	if (data.length === 0) {
		return data
	}

	return data.map((meet) => {
		return {
			status: eventStatus(true, meet.metadata.date),
			isOpenRegistration: meet.metadata.is_open_registration,
			title: meet.title,
			coverImageUrl: meet.metadata.cover_image.imgix_url,
			rsvpLink: meet.metadata.rsvp_link,
			venue: meet.metadata.venue,
			date: meet.metadata.date,
			speakers: meet.metadata.speakers.map((speaker) => ({
				name: speaker.title,
				description: speaker.metadata.description,
				photoUrl: speaker.metadata.photo.imgix_url
			}))
		}
	})
}

export const load: PageServerLoad = async () => {
	const { objects: data } = await cosmic.objects
		.find({
			type: 'meetups'
		})
		.props(['title', 'metadata'])
		.depth(1)

	const mappedData = mapData(data)

	return { meetups: mappedData }
}
