// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        borderWidth: {
            DEFAULT: '1px',
            '0': '0',
            '1': '0.5px',
            '2': '2px',
            '4': '4px',
            '6': '6px',
            '8': '8px',
        },
        screens: {
            'sm':'640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl':'1536px'
        },
        colors: {

        },
        fontFamily: {
            poppins:[ 'var(--font-poppins)']
        },
        extend: {}

    },
    plugins: [],
};
