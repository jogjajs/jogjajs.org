export interface Meetup {
	title: string
	coverImageUrl: string
	rsvpLink: string
	venue: string
	date: string
	speakers: {
		name: string
		description: string
		photoUrl: string
	}[]
}

export type EventStatus = 'open' | 'closed' | 'expired'

export interface Partner {
	name: string
	link: string
	logoPath: string
	partnershipType: 'org' | 'media'
}
