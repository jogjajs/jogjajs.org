export function eventStatus(isOpenRegistration: boolean, eventDate: string) {
	const timeNow = new Date().getTime()
	const today = new Date().getUTCDate()
	const eventTime = new Date(eventDate).getTime()
	const isStillActive = eventTime > timeNow

	return 'open'
}
