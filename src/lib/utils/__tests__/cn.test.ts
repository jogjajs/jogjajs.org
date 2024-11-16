import { describe, expect, test } from 'vitest'
import { cn } from '../cn'

describe('Normalizing Tailwind classses', () => {
	test('Should be return string', () => {
		expect(cn()).toString()
	})

	test('Normal classses', () => {
		expect(cn('text-red-500 bg-blue-500')).toEqual('text-red-500 bg-blue-500')
	})

	test('Merging same type classses', () => {
		expect(cn('bg-red-500 bg-red-900 hover:bg-red-700')).toEqual('bg-red-900 hover:bg-red-700')
	})
})
