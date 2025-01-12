import { describe, it, expect, vi, afterEach } from 'vitest'
import { get } from 'svelte/store'
import { theme } from '../store'
import { Themes } from '../constants'

describe('theme store', () => {
	afterEach(() => {
		// reset to default value
		theme.set(Themes.Light)
	})

	it('should have a default value of Themes.Light', () => {
		const value = get(theme)
		expect(value).toBe(Themes.Light)
	})

	it('should update to Themes.Dark when set', () => {
		theme.set(Themes.Dark)
		const value = get(theme)
		expect(value).toBe(Themes.Dark)
	})

	it('should allow subscriptions and notify on updates', () => {
		const mockCallback = vi.fn()
		const unsubscribe = theme.subscribe(mockCallback)

		theme.set(Themes.Dark)

		expect(mockCallback).toHaveBeenCalledTimes(2)
		expect(mockCallback).toHaveBeenCalledWith(Themes.Light)
		expect(mockCallback).toHaveBeenCalledWith(Themes.Dark)

		unsubscribe() // Clean up subscription
	})

	it('should not notify unsubscribed listeners', () => {
		const mockCallback = vi.fn()
		const unsubscribe = theme.subscribe(mockCallback)

		unsubscribe() // Unsubscribe immediately
		theme.set(Themes.Dark) // Update the store

		expect(mockCallback).toHaveBeenCalledTimes(1) // Only the initial value
	})
})
