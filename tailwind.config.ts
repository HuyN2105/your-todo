import type { Config } from 'tailwindcss';


const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},

	plugins: [require('daisyui')],

  daisyui: {
		themes: [
			{
				'CustomDark': {
					'primary': '#00a5ff',

					'secondary': '#00c1ff',

					'accent': '#00ae85',

					'neutral': '#050a0a',

					'base-100': '#1e212b',

					'info': '#00baff',

					'success': '#50d76a',

					'warning': '#fea600',

					'error': '#ff003a',
				},
			},
		],
	},

};
export default config;
