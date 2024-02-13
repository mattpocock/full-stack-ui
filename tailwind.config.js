const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				gray: colors.neutral,
			},
		},
	},
	plugins: [],
};
