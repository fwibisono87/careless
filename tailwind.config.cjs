const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				dancing: ['Dancing Script', 'cursive']
			},
			colors: {
				care: '#a186bd',
				darkCare: '#605ca8'
			}
		}
	},

	plugins: []
};

module.exports = config;
