import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte'
		})
	],
	resolve: process.env.VITEST
		? {
				conditions: ['browser']
			}
		: undefined,
	test: {
		coverage: {
			provider: 'v8',
			include: ['./src/lib/**/*.ts'], // Include only TypeScript files
			reporter: ['text', 'json', 'html'] // Coverage reporters
		}
	}
})
