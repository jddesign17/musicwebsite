/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#0D0D0D',
        'second':'#D5F701',
        'gray':'#b3b1b1',
        'white':'#ffffff',
        'light':'#1a1a1a'
      }
    },
  },
  plugins: [],
}