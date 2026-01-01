/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: "#050505",
                secondary: "#9ca3af",
                accent: "#ffffff",
            }
        },
        container: {
            center: true,
            padding: '2rem',
        },
    },
    plugins: [],
}
