import { dayStart, isAfter, isEqual } from '@formkit/tempo'
import type { EventStatus, MappedMeetup, Meetup } from './types'
import cosmic from '$lib/data/cosmic'
import { PUBLIC_BUCKET_READ_KEY, PUBLIC_BUCKET_SLUG } from '$env/static/public'

export function eventStatus(isOpenRegistration: boolean, eventDate: string | Date): EventStatus {
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

export function mapData(data: Meetup[]): MappedMeetup[] {
	if (typeof data !== 'object') {
		throw Error('Data must be an array of meetups')
	}

	if (data.length === 0) {
		return []
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

const mockMeetups: Meetup[] = [
	{
		title: 'Upcoming Meetup',
		metadata: {
			cover_image: {
				imgix_url: 'https://example.com/image2.jpg',
				url: 'https://example.com/image2.jpg'
			},
			is_open_registration: true,
			date: '2025-01-01',
			rsvp_link: 'https://example.com/rsvp2',
			venue: 'Venue 2',
			speakers: [
				{
					title: 'Speaker 2',
					metadata: {
						description: 'Another great speaker',
						photo: {
							imgix_url: 'https://example.com/speaker2.jpg',
							url: 'https://example.com/speaker2.jpg'
						}
					}
				}
			]
		}
	},
	{
		title: 'Past Meetup',
		metadata: {
			cover_image: {
				imgix_url: 'https://example.com/image1.jpg',
				url: 'https://example.com/image1.jpg'
			},
			is_open_registration: false,
			date: '2023-01-01',
			rsvp_link: 'https://example.com/rsvp1',
			venue: 'Venue 1',
			speakers: []
		}
	}
]

export async function getMeetups(limit = 1000) {
	if (typeof limit !== 'number' || limit < 0) {
		throw Error('Limit must be uinteger (default: 1000)')
	}

	if (limit === 0) {
		return []
	}

	// TODO: we should remove this validation after
	// we have establish our env secrets in Github (I don't have access to do that lol)
	if (!PUBLIC_BUCKET_READ_KEY || !PUBLIC_BUCKET_SLUG) {
		return mapData(mockMeetups)
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

export function getUpcomingMeetup(meetups: MappedMeetup[]) {
	if (meetups?.length === 0) {
		return null
	}

	const latestMeetup = meetups[0]
	const isUpcoming = isAfter(latestMeetup.date, new Date())

	if (isUpcoming) {
		return latestMeetup
	}

	return null
}
