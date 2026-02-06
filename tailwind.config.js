/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'rich-black': '#050505',
                'card-black': '#111111',
                'gold': '#C5A059',
                'off-white': '#EDEDED',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter Tight"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
