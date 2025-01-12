import { describe, it, expect } from 'vitest'
import organizers from '$lib/contents/organizers.json'

describe('organziers JSON Validation', () => {
	it('should have the correct number of organizers', () => {
		expect(organizers).not.toHaveLength(0)
	})

	it('should match the meetup interface', () => {
		organizers.forEach((organizer) => {
			expect(organizer).toHaveProperty('name', expect.any(String))
			expect(organizer).toHaveProperty('photoPath', expect.any(String))
			expect(organizer).toHaveProperty('shortBio', expect.any(String))
			expect(organizer).toHaveProperty('contacts', expect.any(Array))

			organizer.contacts.forEach((contact) => {
				expect(contact).toHaveProperty('name', expect.any(String))
				expect(contact).toHaveProperty('url', expect.any(String))
			})
		})
	})

	it('should have logoPath in the format /assets/organizers/*', () => {
		organizers.forEach((organizer) => {
			const photoPathRegex = /^\/assets\/organizers\/[\w-]+\.(jpg|jpeg|png|gif)$/i
			expect(organizer.photoPath).toMatch(photoPathRegex)
		})
	})

	it('should have valid contact names', () => {
		const allowedContactNames = ['x', 'linkedin', 'instagram', 'web']
		organizers.forEach((organizer) => {
			organizer.contacts.forEach((contact) => {
				expect(allowedContactNames).toContain(contact.name)
			})
		})
	})
})
