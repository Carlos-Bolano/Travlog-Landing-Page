/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {	
				purple     : '#5D50C6',
				whitecolor : '#EEEEEE',
				blackcolor : '#191825',
				graycolor  : '#19182580',
				rosa       : '#F85E9F',
				orange     : '#FF5722'
			}

		},
	},
	plugins: [],
}
