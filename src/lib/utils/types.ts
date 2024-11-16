export interface Meetup {
	title: string
	metadata: {
		cover_image: {
			imgix_url: string
			url: string
		}
		is_open_registration: boolean
		date: string
		rsvp_link: string
		venue: string
		speakers: {
			title: string
			metadata: {
				description: string
				photo: {
					imgix_url: string
					url: string
				}
			}
		}[]
	}
}

export type EventStatus = 'open' | 'closed' | 'expired'

export interface MappedMeetup {
	status: EventStatus // Event status: "open", "closed", or "expired"
	isOpenRegistration: boolean // Indicates if registration is open
	title: string // Title of the meetup
	coverImageUrl: string // URL for the cover image
	rsvpLink: string // Link for RSVP
	venue: string // Venue of the meetup
	date: string // Date of the meetup
	speakers: {
		name: string // Name of the speaker
		description: string // Description of the speaker
		photoUrl: string // URL of the speaker's photo
	}[] // Array of speaker information
}
