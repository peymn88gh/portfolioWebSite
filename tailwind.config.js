/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.1rem',
      '2xl': '1.563rem',
      '3xl': '2.053rem',
      '4xl': '4.441rem',
      '5xl': '7.441rem',
      '6xl': '15.441rem',
    },
    extend: {
      colors: {
        primary: '#E11D48', // Change this color to your primary color
        secondary: '#172554', // Change this color to your secondary color
        accent: '#FFFFFF', // Change this color to your accent color
      },
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        bebas: ['"Bebas Neue"'],
      },
      boxShadow:{
        myShadow1: "4.1px -5px 0 0  rgb(241 245 249)",
        myShadow2: "-4.1px -5px 0 0  rgb(241 245 249)",
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-animated')
],
}
