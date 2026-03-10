/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mint-green': '#A8E6CF', // Main background color
        'sage-green': '#6B9E81', // Secondary background/accents
        'accent-red': '#FF3B30', // Red accent for logo
        'dark': '#1A1A1A', // Dark text and borders
        'text-secondary': '#666666', // Secondary text
      },
      borderRadius: {
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
      },
      fontFamily: {
        'display': ['Montserrat', 'system-ui'],
        'heading': ['Varela Round', 'system-ui'],
        'body': ['Inter', 'system-ui'],
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
