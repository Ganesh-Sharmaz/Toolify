// import { nextui } from '@nextui-org/react'
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'airbnb': '#1c1e1f',
        'airbnb-footer': '#212425',
        'airbnbpara': '#beb5a8',
        'air-h4': '#f3eee7',
        'air-title': '#ff4b72',
        'air-placeholder': '#6d6a63',
        'air-border': '#43474b'
      },
      fontFamily: {
        poppins: ['poppins', 'sans-serif'], // add your custom font here
      },
    },
  },
  darkMode: "class",

  plugins: [nextui(
    {
       defaultTheme: "dark"
    }
  )],
}

