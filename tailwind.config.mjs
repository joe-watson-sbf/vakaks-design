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
		},
	},
	plugins: [],
}
