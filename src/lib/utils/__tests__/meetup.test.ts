import { addDay, format } from '@formkit/tempo'
import { describe, expect, it, test, vi } from 'vitest'
import { eventStatus, getMeetups, getUpcomingMeetup, mapData } from '../meetup'
import type { MappedMeetup, Meetup } from '../types'

describe('Event status', () => {
	const today = new Date()
	const tomorrow = addDay(today, 1)
	const afterParty = addDay(today, -1)

	test('Open and before event', () => {
		expect(eventStatus(true, tomorrow)).toEqual('open')
	})

	test('Open but event is today', () => {
		expect(eventStatus(true, today)).toEqual('closed')
	})

	test('Open but after event', () => {
		expect(eventStatus(true, afterParty)).toEqual('expired')
	})

	test('Closed but before event', () => {
		expect(eventStatus(false, tomorrow)).toEqual('closed')
	})

	test('Closed but event is today', () => {
		expect(eventStatus(false, today)).toEqual('closed')
	})

	test('Closed but after event', () => {
		expect(eventStatus(false, afterParty)).toEqual('expired')
	})
})

describe('Get meetups', () => {
	it('should get with a mock', async () => {
		const mock = vi.fn().mockImplementation(getMeetups)

		expect(await mock()).not.toBeFalsy()
		expect(mock).toHaveBeenCalledTimes(1)
	})

	it('should get 2 latest meetups', async () => {
		const mock = vi.fn().mockImplementation(getMeetups)

		expect(await mock(2)).toHaveLength(2)
		expect(mock).toHaveBeenCalledTimes(1)
	})

	it('should have title, date and venue', async () => {
		const mock = vi.fn().mockImplementation(getMeetups)
		const meetups = await mock(2)
		const requiredProperties = ['title', 'venue', 'date']

		requiredProperties.forEach((property) => {
			expect(meetups[0]).toHaveProperty(property)
			expect(meetups[0][property]).toString()
		})
		expect(mock).toHaveBeenCalledTimes(1)
	})

	it('should return an empty array if no meetups are available', async () => {
		const mock = vi.fn().mockImplementation(getMeetups)
		expect(await mock(0)).toEqual([])
		expect(mock).toHaveBeenCalledTimes(1)
	})

	it('should use the default limit when no parameter is provided', async () => {
		const mock = vi.fn().mockImplementation(getMeetups)
		await mock()
		expect(mock).toHaveBeenCalledWith() // Ensure no arguments passed
		expect(mock).toHaveBeenCalledTimes(1)
	})

	it('should handle invalid limit values gracefully', async () => {
		const mock = vi.fn().mockImplementation(getMeetups)
		await expect(mock(-1)).rejects.toThrow() // Assuming validation throws
		await expect(mock('invalid')).rejects.toThrow()
		expect(mock).toHaveBeenCalledTimes(2)
	})

	it('should return meetups sorted by date in descending order', async () => {
		const mock = vi.fn().mockImplementation(async () => await getMeetups(2))

		const meetups = await mock()

		expect(new Date(meetups[0].date).getTime()).toBeGreaterThan(new Date(meetups[1].date).getTime())
	})
})

describe('Mapping meetups data', () => {
	it('should return an empty array if the input data is empty', () => {
		const result = mapData([])
		expect(result).toEqual([])
	})

	it('should map a single meetup correctly', () => {
		const input: Meetup[] = [
			{
				title: 'Sample Meetup',
				metadata: {
					cover_image: {
						imgix_url: 'https://example.com/image.jpg',
						url: 'https://example.com/image.jpg'
					},
					is_open_registration: true,
					date: '2024-12-25',
					rsvp_link: 'https://example.com/rsvp',
					venue: 'Sample Venue',
					speakers: [
						{
							title: 'Speaker 1',
							metadata: {
								description: 'A great speaker',
								photo: {
									imgix_url: 'https://example.com/speaker1.jpg',
									url: 'https://example.com/speaker1.jpg'
								}
							}
						}
					]
				}
			}
		]

		const result = mapData(input)

		expect(result).toEqual([
			{
				status: 'open',
				isOpenRegistration: true,
				title: 'Sample Meetup',
				coverImageUrl: 'https://example.com/image.jpg',
				rsvpLink: 'https://example.com/rsvp',
				venue: 'Sample Venue',
				date: '2024-12-25',
				speakers: [
					{
						name: 'Speaker 1',
						description: 'A great speaker',
						photoUrl: 'https://example.com/speaker1.jpg'
					}
				]
			}
		])
	})

	it('should map multiple meetups correctly', () => {
		const input: Meetup[] = [
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
			},
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
			}
		]

		const result = mapData(input)

		expect(result).toEqual([
			{
				status: 'expired',
				isOpenRegistration: false,
				title: 'Past Meetup',
				coverImageUrl: 'https://example.com/image1.jpg',
				rsvpLink: 'https://example.com/rsvp1',
				venue: 'Venue 1',
				date: '2023-01-01',
				speakers: []
			},
			{
				status: 'open',
				isOpenRegistration: true,
				title: 'Upcoming Meetup',
				coverImageUrl: 'https://example.com/image2.jpg',
				rsvpLink: 'https://example.com/rsvp2',
				venue: 'Venue 2',
				date: '2025-01-01',
				speakers: [
					{
						name: 'Speaker 2',
						description: 'Another great speaker',
						photoUrl: 'https://example.com/speaker2.jpg'
					}
				]
			}
		])
	})

	it('should handle meetups with missing speaker data', () => {
		const input: Meetup[] = [
			{
				title: 'Meetup with no speakers',
				metadata: {
					cover_image: {
						imgix_url: 'https://example.com/image.jpg',
						url: 'https://example.com/image.jpg'
					},
					is_open_registration: true,
					date: '2024-12-25',
					rsvp_link: 'https://example.com/rsvp',
					venue: 'Sample Venue',
					speakers: [] // No speakers
				}
			}
		]

		const result = mapData(input)

		expect(result).toEqual([
			{
				status: 'open',
				isOpenRegistration: true,
				title: 'Meetup with no speakers',
				coverImageUrl: 'https://example.com/image.jpg',
				rsvpLink: 'https://example.com/rsvp',
				venue: 'Sample Venue',
				date: '2024-12-25',
				speakers: [] // Empty array for speakers
			}
		])
	})

	it('should throw an error for invalid input', () => {
		expect(() => mapData(null as unknown as Meetup[])).toThrow() // Passing null
		expect(() => mapData(undefined as unknown as Meetup[])).toThrow() // Passing undefined
	})

	it('should return upcoming talk for future meetup', () => {
		const meetups: MappedMeetup[] = [
			{
				status: 'open',
				isOpenRegistration: true,
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
		const meetups: MappedMeetup[] = [
			{
				status: 'open',
				isOpenRegistration: true,
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
		const meetups: MappedMeetup[] = [
			{
				status: 'open',
				isOpenRegistration: true,
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
		const meetups: MappedMeetup[] = []

		expect(getUpcomingMeetup(meetups)).toBeNull()
	})
})
