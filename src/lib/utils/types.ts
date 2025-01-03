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
