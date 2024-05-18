import type { Config } from "tailwindcss";

const defaultTheme = require('tailwindcss/defaultTheme')


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "dark-grey": "#121212",
      white: "#FFFFFF",
      "white-smoke": "#F8F8F8",
      grey: "#EDEDF1",
      "foggy-grey": "#ACA99F",
      "sonic-silver": "#777777",
      warning: "#D24340",
      "light-yellow": "#FBC81D",
    },
    screens: {
      'xs': '200px',
      'sm': '400px',
      'md': '750px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Codec Pro", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
