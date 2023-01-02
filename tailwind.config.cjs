/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				lora: ['Lora', 'serif'],
				dancing: ['Dancing Script', 'cursive'],
        courgette: ['Courgette', 'cursive']
			},
			colors: {
				onyx: '#444444',
				greenc: '#c4df9b',
				ruby: '#a30f14',
				lilac: '#9860a2',
				seashell: '#fdf0eb'
			}
		}
	},
	plugins: []
};
