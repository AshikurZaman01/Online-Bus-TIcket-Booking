/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hero: ['Sour Gummy', 'sans-serif'],
        hero1: ["Oswald", 'sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}