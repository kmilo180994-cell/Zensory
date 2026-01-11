/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}" // Include root files like App.tsx
    ],
    theme: {
        extend: {
            colors: {
                'zensory-blue': '#020022',
                'zensory-cyan': '#00f2ff',
                'zensory-green': '#76ff03',
            },
            fontFamily: {
                'heading': ['Inter', 'sans-serif'], // Adjust if you have a specific heading font
                'sans': ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
