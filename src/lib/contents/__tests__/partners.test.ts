import { describe, it, expect } from 'vitest'
import partners from '$lib/contents/partners.json'

describe('Partners JSON Validation', () => {
	it('should have the correct number of partners', () => {
		expect(partners).not.toHaveLength(0)
	})

	it('should match the meetup interface', () => {
		partners.forEach((partner) => {
			expect(partner).toHaveProperty('name', expect.any(String))
			expect(partner).toHaveProperty('logoPath', expect.any(String))
			expect(partner).toHaveProperty('link', expect.any(String))
			expect(partner).toHaveProperty('partnershipType', expect.any(String))
		})
	})

	it('should have valid URLs', () => {
		const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
		partners.forEach((partner) => {
			if (partner.link) {
				expect(partner.link).toMatch(urlRegex)
			}
		})
	})

	it('should have partnershipType either "org" or "media"', () => {
		const partnershipType = (type: string) => ['org', 'media'].includes(type)

		partners.forEach((meetup) => {
			expect(meetup.partnershipType).toSatisfy(partnershipType)
		})
	})

	it('should have logoPath in the format /assets/partners/*', () => {
		partners.forEach((partner) => {
			const coverImageUrlRegex = /^\/assets\/partners\/[\w-]+\.(jpg|jpeg|png|gif)$/i
			expect(partner.logoPath).toMatch(coverImageUrlRegex)
		})
	})
})
