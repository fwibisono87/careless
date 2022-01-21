const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				lora: ['Lora', 'serif'],
				dancing: ['Dancing Script', 'cursive']
			},
			colors: {
				care: '#E093E5',
				darkCare: '#605ca8',
				grayCare: '#333333'
			}
		}
	},

	plugins: []
};

module.exports = config;
