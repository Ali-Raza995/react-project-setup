/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0A',
        secondary: '#333333',
        tertiary: '#DDDDDD',
        light_grey: '#949494'
      },
    },
  },
  plugins: [],
}