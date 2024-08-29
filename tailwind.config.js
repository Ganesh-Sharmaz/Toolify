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
        'main-bg': '#E5E5E5',
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
        'hover': '#2E2E30',
        'card-background': '#6699CC',
        'tab': '#14213D',
        "background2": "#f1f5f9",
        "text1": "#374957",
        "text2": "#333333",
        "title2": "#575880",
        "icon": "#6b9bd2"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // add your custom font here
        dancing: ["Dancing Script", "cursive", 'sans-serif'],
        suse: ["SUSE", "sans-serif"],
        bungee: ["Bungee Tint", "sans-serif"],
        inter: ["Inter", "sans-serif"]
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

