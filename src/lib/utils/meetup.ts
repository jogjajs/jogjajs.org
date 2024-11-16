import { dayStart, isAfter, isEqual } from '@formkit/tempo'
import type { Meetup } from './types'
import cosmic from '$lib/data/cosmic'

export function eventStatus(
	isOpenRegistration: boolean,
	eventDate: string | Date
): 'closed' | 'open' | 'expired' {
	const today = dayStart(new Date())
	const eventEarlyDate = dayStart(eventDate)
	const isClosed = isEqual(today, eventEarlyDate)
	const isAfterParty = isAfter(today, eventEarlyDate)

	if (!isOpenRegistration && isAfterParty) {
		return 'expired'
	} else if (!isOpenRegistration) {
		return 'closed'
	} else if (isOpenRegistration && isClosed) {
		return 'closed'
	} else if (isOpenRegistration && isAfterParty) {
		return 'expired'
	}

	return 'open'
}

function mapData(data: Meetup[]) {
	if (data.length === 0) {
		return data
	}

	return data.map((meet) => {
		return {
			status: eventStatus(meet.metadata.is_open_registration, meet.metadata.date),
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

export async function getMeetups(limit = 1000) {
	if (typeof limit !== 'number' || limit < 0) {
		throw Error('Limit must be uinteger (default: 1000)')
	}

	if (limit === 0) {
		return []
	}

	try {
		const { objects: data } = await cosmic.objects
			.find({
				type: 'meetups'
			})
			.props(['title', 'metadata'])
			.depth(1)
			.limit(limit)
			.sort('-metadata.date')

		const mappedData = mapData(data)

		return mappedData
	} catch (error) {
		console.error(error)
		throw Error(error)
	}
}
