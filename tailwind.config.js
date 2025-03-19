// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Scans all JSX/TSX files in src
    ],
    theme: {
        extend: {}, // Customize here if needed
    },
    plugins: [],
};