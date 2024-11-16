import { addDay } from '@formkit/tempo'
import { describe, expect, test } from 'vitest'
import { eventStatus } from '../meetup'

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
