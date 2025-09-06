/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#710F62',
        secondary: '#E8A317',
        accent: '#AF8989',
      },
      fontFamily: {
        'times': ['Times New Roman', 'serif'],
      }
    },
  },
  plugins: [],
}