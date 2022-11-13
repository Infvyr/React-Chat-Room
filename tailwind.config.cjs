/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: [ "./src/**/*.{html,js,jsx,ts,tsx}" ],
	darkMode: 'class',
	theme: {
		extend: {
			transitionDuration: {
				DEFAULT: "300ms"
			},
			animation: {
				spinner: "spin infinite 20s linear"
			}
		}
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				".no-scrollbar": {
					"-ms-overflow-style": "none",
					"scrollbar-width": "none",
					"&::-webkit-scrollbar": {
						display: "none"
					}
				}
			});
		})
	]
};
