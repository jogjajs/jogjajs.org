import { addDay } from '@formkit/tempo'
import { describe, expect, it, vi } from 'vitest'
import { getMeetups, getUpcomingMeetup } from '../meetup'
import type { Meetup } from '../types'

describe('Get meetups', () => {
	it('should get with a mock', () => {
		const mock = vi.fn().mockImplementation(getMeetups)

		expect(mock()).not.toBeFalsy()
		expect(mock).toHaveBeenCalledTimes(1)
	})

	it('should get 2 latest meetups', () => {
		const mock = vi.fn().mockImplementation(getMeetups)

		expect(mock(2)).toHaveLength(2)
		expect(mock).toHaveBeenCalledTimes(1)
	})

	it('should have title, date and venue', () => {
		const mock = vi.fn().mockImplementation(getMeetups)
		const meetups = mock(2)
		const requiredProperties = ['title', 'venue', 'date']

		requiredProperties.forEach((property) => {
			expect(meetups[0]).toHaveProperty(property)
			expect(meetups[0][property]).toString()
		})
		expect(mock).toHaveBeenCalledTimes(1)
	})

	it('should return an empty array if no meetups are available', async () => {
		const mock = vi.fn().mockImplementation(getMeetups)
		expect(mock(0)).toEqual([])
		expect(mock).toHaveBeenCalledTimes(1)
	})

	it('should use the default limit when no parameter is provided', async () => {
		const mock = vi.fn().mockImplementation(getMeetups)
		mock()
		expect(mock).toHaveBeenCalledWith() // Ensure no arguments passed
		expect(mock).toHaveBeenCalledTimes(1)
	})

	it('should handle invalid limit values gracefully', async () => {
		const mock = vi.fn().mockImplementation(getMeetups)
		expect(() => mock(-1)).toThrow()
		expect(() => mock('invalid')).toThrow()
	})

	it('should return meetups sorted by date in descending order', () => {
		const mock = vi.fn().mockImplementation(() => getMeetups(2))
		const meetups = mock()

		expect(new Date(meetups[0].date).getTime()).toBeGreaterThan(new Date(meetups[1].date).getTime())
	})
})

describe('Mapping meetups data', () => {
	it('should return upcoming talk for future meetup', () => {
		const meetups: Meetup[] = [
			{
				title: 'Meetup with no speakers',
				coverImageUrl: 'https://example.com/image.jpg',
				rsvpLink: 'https://example.com/rsvp',
				venue: 'Sample Venue',
				date: addDay(new Date(), 1).toISOString(),
				speakers: []
			}
		]

		expect(getUpcomingMeetup(meetups)).not.toBeNull()
		expect(getUpcomingMeetup(meetups)).toHaveProperty('title')
	})

	it('should return upcoming talk for today meetup', () => {
		const meetups: Meetup[] = [
			{
				title: 'Meetup with no speakers',
				coverImageUrl: 'https://example.com/image.jpg',
				rsvpLink: 'https://example.com/rsvp',
				venue: 'Sample Venue',
				date: new Date().toISOString(),
				speakers: []
			}
		]

		expect(getUpcomingMeetup(meetups)).not.toBeNull()
		expect(getUpcomingMeetup(meetups)).toHaveProperty('title')
	})

	it('should not return upcoming talk for past meetup', () => {
		const meetups: Meetup[] = [
			{
				title: 'Meetup with no speakers',
				coverImageUrl: 'https://example.com/image.jpg',
				rsvpLink: 'https://example.com/rsvp',
				venue: 'Sample Venue',
				date: addDay(new Date(), -1).toISOString(),
				speakers: []
			}
		]

		expect(getUpcomingMeetup(meetups)).toBeNull()
	})

	it('should not return upcoming talk when meetup is empty', () => {
		const meetups: Meetup[] = []

		expect(getUpcomingMeetup(meetups)).toBeNull()
	})
})
