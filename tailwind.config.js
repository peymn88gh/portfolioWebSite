/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',   // Extra Small
      sm: '0.875rem',  // Small
      base: '1rem',    // Base
      lg: '1.125rem',  // Large
      xl: '1.25rem',   // Extra Large
      '2xl': '1.5rem', // 2 Extra Large
      '3xl': '1.875rem', // 3 Extra Large
      '4xl': '2.875rem',  // 4 Extra Large
      '5xl': '3.75rem',     // 5 Extra Large
      '6xl': '4rem',     // 6 Extra Large
      '7xl': '5rem',     // 7 Extra Large
      '8xl': '6rem',     // 8 Extra Large
      '9xl': '7rem',     // 9 Extra Large
    },
    fontFamily: {
      'display': ['Poppins']
     },
    extend: {
      colors: {
        primary: '#0b36a8', // Change this color to your primary color
        secondary: '#24262a', // Change this color to your secondary color
        accent: '#7d8085', // Change this color to your accent color
        bg1 : '#f7f9fb',
      },
      fontFamily: {
        sans: ['"Open Sans"','Lato', ...defaultTheme.fontFamily.sans],
        poppins:['Poppins']
      },
      boxShadow:{
        myShadow1: "4.1px -5px 0 0  rgb(241 245 249)",
        myShadow2: "-4.1px -5px 0 0  rgb(241 245 249)",
      }
    },
  },
  plugins: [],
}
