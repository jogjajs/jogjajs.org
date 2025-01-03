import adapter from '@sveltejs/adapter-static';
import type { Config } from '@sveltejs/kit';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import Icons from 'unplugin-icons/vite';

const config = <Config>{
	kit: {
		adapter: adapter()
	},
	vitePlugin: [
		Icons({
			compiler: 'svelte'
		})
	],
	preprocess: vitePreprocess()
};

export default config;
