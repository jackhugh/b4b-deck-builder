const tw = require('tailwindcss/defaultConfig');

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', ...tw.theme.fontFamily.sans],
			},
			colors: {
				brand: '#fe0000',
				header: {
					1: '#0a0505',
					// 2: '#1d0404',
					// 1: '#1c0202',
					2: '#460000',
				},
				black: {
					DEFAULT: '#000',
					1: 'rgb(1, 1, 1)',
					2: 'rgb(2, 2, 2)',
					3: 'rgb(3, 3, 3)',
					4: 'rgb(4, 4, 4)',
					5: 'rgb(5, 5, 5)',
					10: 'rgb(10, 10, 10)',
					15: 'rgb(15, 15, 15)',
					20: 'rgb(20, 20, 20)',
					25: 'rgb(25, 25, 25)',
					30: 'rgb(30, 30, 30)',
					35: 'rgb(35, 35, 35)',
					40: 'rgb(40, 40, 40)',
					45: 'rgb(45, 45, 45)',
					50: 'rgb(50, 50, 50)',
				},
				white: {
					DEFAULT: '#fff',
					1: 'rgb(254, 254, 254)',
					2: 'rgb(253, 253, 253)',
					3: 'rgb(252, 252, 252)',
					4: 'rgb(251, 251, 251)',
					5: 'rgb(250, 250, 250)',
					10: 'rgb(245, 245, 245)',
					15: 'rgb(240, 240, 240)',
					20: 'rgb(235, 235, 235)',
					25: 'rgb(230, 230, 230)',
					30: 'rgb(225, 225, 225)',
					35: 'rgb(220, 220, 220)',
					40: 'rgb(215, 215, 215)',
					45: 'rgb(210, 210, 210)',
					50: 'rgb(205, 205, 205)',
				},
			},
			boxShadow: {
				brand: '0 0 20px 0px #fe000045',
				blur: '0 0 20px 0px black',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
