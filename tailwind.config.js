/** @type {import('tailwindcss').Config} */
export default {
    content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                ink: '#10151C',
                surface: '#161C24',
                surface2: '#1D242E',
                line: '#2A3340',
                ivory: '#EDEFF2',
                muted: '#8B96A3',
                amber: '#F2A65A',
                mint: '#4ADE80',
                coral: '#F87171',
            },
            fontFamily: {
                display: ['"Space Grotesk"', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
        },
    },
    plugins: [],
};