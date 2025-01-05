import { dayStart, isAfter, isEqual } from '@formkit/tempo'
import meetups from '$lib/contents/meetups.json'
import type { EventStatus, Meetup } from './types'

export function eventStatus(eventDate: string | Date): EventStatus {
	const today = dayStart(new Date())
	const eventEarlyDate = dayStart(eventDate)
	const isClosed = isEqual(today, eventEarlyDate)
	const isAfterParty = isAfter(today, eventEarlyDate)

	if (isAfterParty) {
		return 'expired'
	} else if (isClosed) {
		return 'closed'
	}

	return 'open'
}

export function getMeetups(limit = 1000) {
	if (typeof limit !== 'number' || limit < 0) {
		throw Error('Limit must be uinteger (default: 1000)')
	}

	if (limit === 0) {
		return []
	}

	try {
		const sortedMeetups = meetups
			.toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
			.slice(0, limit)

		return sortedMeetups
	} catch (error) {
		console.error(error)
		throw Error(error)
	}
}

export function getUpcomingMeetup(meetups: Meetup[]) {
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
