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
