import { describe, it, expect } from 'vitest'
import meetups from '$lib/contents/meetups.json'

describe('Meetups JSON Validation', () => {
	it('should have the correct number of meetups', () => {
		expect(meetups).not.toHaveLength(0)
	})

	it('should match the meetup interface', () => {
		meetups.forEach((meetup) => {
			expect(meetup).toHaveProperty('title', expect.any(String))
			expect(meetup).toHaveProperty('coverImageUrl', expect.any(String))
			expect(meetup).toHaveProperty('rsvpLink', expect.any(String))
			expect(meetup).toHaveProperty('venue', expect.any(String))
			expect(meetup).toHaveProperty('date', expect.any(String))
			expect(meetup).toHaveProperty('speakers', expect.any(Array))

			meetup.speakers.forEach((speaker) => {
				expect(speaker).toHaveProperty('name', expect.any(String))
				expect(speaker).toHaveProperty('description', expect.any(String))
				expect(speaker).toHaveProperty('photoUrl', expect.any(String))
			})
		})
	})

	it('should have valid date format', () => {
		meetups.forEach((meetup) => {
			const dateRegex = /^\d{4}-\d{2}-\d{2}$/
			expect(meetup.date).toMatch(dateRegex)
		})
	})

	it('should have valid URLs', () => {
		const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
		meetups.forEach((meetup) => {
			expect(meetup.rsvpLink).toMatch(urlRegex)

			meetup.speakers.forEach((speaker) => {
				expect(speaker.photoUrl).toMatch(urlRegex)
			})
		})
	})

	it('should have coverImageUrl in the format /assets/meetups/*', () => {
		meetups.forEach((meetup) => {
			const coverImageUrlRegex = /^\/assets\/meetups\/[\w-]+\.(jpg|jpeg|png|gif)$/i
			expect(meetup.coverImageUrl).toMatch(coverImageUrlRegex)
		})
	})
})
