/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Comfortaa']
    },
    screens:{
      ssm: '320px',
      sm: '640px',
      md: '1024px',
      lg: '1440px',
    },
   
    extend: {
      fontFamily: {
        Fauna: ['Fauna One']
      }
    },
  },
  plugins: [],
}
