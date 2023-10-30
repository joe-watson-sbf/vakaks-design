/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-light': '#ece7ea',
				'primary-dark': '#121212',
				'primary-blue': '#3949e3',
				'primary-yellow': '#ffcb25',
				'primary-slate': '#1e293b',
			},
			fontSize: {
				'font-0': 'var(--font-0)',
				'font-1': 'var(--font-1)',
				'font-2': 'var(--font-2)',
				'font-3': 'var(--font-3)',
				'font-4': 'var(--font-4)',
				'font-5': 'var(--font-5)',
				'font--1': 'var(--font--1)',
				'font--2': 'var(--font--2)',
			}
		},
	},
	plugins: [],
}
