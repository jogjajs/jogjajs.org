import { dayStart, isAfter, isEqual } from '@formkit/tempo'

export function eventStatus(
	isOpenRegistration: boolean,
	eventDate: string | Date
): 'closed' | 'open' | 'expired' {
	const today = dayStart(new Date())
	const eventEarlyDate = dayStart(eventDate)
	const isClosed = isEqual(today, eventEarlyDate)
	const isAfterParty = isAfter(today, eventEarlyDate)

	if (!isOpenRegistration && isAfterParty) {
		return 'expired'
	} else if (!isOpenRegistration) {
		return 'closed'
	} else if (isOpenRegistration && isClosed) {
		return 'closed'
	} else if (isOpenRegistration && isAfterParty) {
		return 'expired'
	}

	return 'open'
}
