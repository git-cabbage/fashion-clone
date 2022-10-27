/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            boxShadow: {
                '4x-black': '4px 8px black',
                '2x-black': '2x 4x black',
            },
        },
    },
    plugins: [],
}
