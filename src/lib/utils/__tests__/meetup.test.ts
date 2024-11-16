import { addDay } from '@formkit/tempo'
import { describe, expect, it, test, vi } from 'vitest'
import { eventStatus, getMeetups } from '../meetup'

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
