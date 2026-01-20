/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        secondary: '#8BC34A',
        accent: '#FFC107',
        customgray:'#5a5a5a'
      },
      fontFamily: {
        sans: ['Varela Round', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        bree: ['Bree Serif', 'serif'],
      },
    },
  },
  plugins: [],
}