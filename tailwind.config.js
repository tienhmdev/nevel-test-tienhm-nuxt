/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue'],
    theme: {
        extend: {
            backgroundImage: {
                'header-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 7%, rgba(0, 0, 0, 0) 70%)',
            },
        },
        screens: {
            xl: '1250px',
            md: '685px',
        },
    },
    plugins: [],
}
