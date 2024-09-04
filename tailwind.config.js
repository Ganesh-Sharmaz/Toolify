import { transform } from "framer-motion";

// import { nextui } from '@nextui-org/react'
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                "loop-scroll": {
                    from:{transform: "translateX(0)"},
                    to: { transform: "translateX(-100%)" },
                },
                "loop-scroll2": {
                    from:{
                        transform: "translateX(-100%)"
                    },
                    to:{
                        transform: "translateX(0)"
                    }
                },
                
                "slide": {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                spinOnce: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                  },
                "load": {
                    "0": {opacity: '0' },
                    "100%": {opacity: '1'}
                },
                slidefast: {
                    "0%": { transform: "translateX(-100%)"},
                    "100%": { transform: "translateX(0%)"}
                }
            },
            animation: {
                "loop-scroll2": "loop-scroll2 100s linear infinite",
                "loop-scroll": "loop-scroll 100s linear infinite",
                "slide": "slide 10s linear infinite",
                spinOnce: 'spinOnce 1s linear 1',
                "load": 'load 3s linear 1',
                slidefast: 'slidefast 0.3s ease-in 1'

            },
            colors: {
                "regal-blue": "#243c5a",
                "main-bg": "#E5E5E5",
                airbnb: "#000000",
                "airbnb-footer": "#000000",
                airbnbpara: "#A3A3A3",
                "air-h4": "#f3eee7",
                "air-title": "#fff",
                "air-placeholder": "#6d6a63",
                "air-border": "#43474b",
                highlight: "black",
                active: "white",
                shadows: "#fff",
                hover: "#2E2E30",
                "card-background": "#6699CC",
                tab: "#14213D",
                background2: "#f1f5f9",
                text1: "#374957",
                text2: "#333333",
                title2: "#575880",
                icon: "#6b9bd2",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"], // add your custom font here
                dancing: ["Dancing Script", "cursive", "sans-serif"],
                suse: ["SUSE", "sans-serif"],
                bungee: ["Bungee Tint", "sans-serif"],
                inter: ["Inter", "sans-serif"],
                amster: ["New Amsterdam", "sans-serif"],
                scrible: ["Rubik Scribble"," system-ui"],
                jet: ["JetBrains Mono", "monospace"],
                montserrat: ["Montserrat", "sans-serif"],
                grotesk: ["Hanken Grotesk", "sans-serif"],
            },
            textShadow: {
                'sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
                'md': '2px 2px 4px rgba(0, 0, 0, 0.5)',
                'lg': '3px 3px 6px rgba(0, 0, 0, 0.5)',
                'xl': '4px 4px 8px rgba(0, 0, 0, 0.5)',
                'none': 'none',
            },
        },
    },
    darkMode: "class",

    plugins: [
        nextui({
            defaultTheme: "light",
        }),
        function ({ addUtilities }) {
            const newUtilities = {
              '.text-shadow-sm': {
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
              },
              '.text-shadow-md': {
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              },
              '.text-shadow-lg': {
                textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
              },
              '.text-shadow-xl': {
                textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
              },
              '.text-shadow-none': {
                textShadow: 'none',
              },
            };
      
            addUtilities(newUtilities, ['responsive', 'hover']);
          },

    ],
};
