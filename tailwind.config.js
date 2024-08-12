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
        'main-bg': '#fff',
        'airbnb': '#000000',
        'airbnb-footer': '#000000',
        'airbnbpara': '#A3A3A3',
        'air-h4': '#f3eee7',
        'air-title': '#fff',
        'air-placeholder': '#6d6a63',
        'air-border': '#43474b',
        'highlight': 'black',
        'active': 'white',
        'shadows': '#fff',
        'hover': '#2E2E30'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // add your custom font here
        dancing: ["Dancing Script", "cursive", 'sans-serif']
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

