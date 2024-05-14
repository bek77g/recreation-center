import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				raleway: "'Raleway', sans-serif",
				playfair: "'Playfair Display', serif",
				gilroy: "'Gilroy', sans-serif",
				playfairSC: "'Playfair Display SC', serif",
				montserrat: "'Montserrat', sans-serif",
				rubik: "'Rubik', sans-serif",
			},
		},
	},
};
export default config;
