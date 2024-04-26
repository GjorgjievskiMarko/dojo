/** @type {import('tailwindcss').Config} */
const twColors = require("tailwindcss/colors");
const plugin = require("./src/lib/theme/plugin");

// const { extendedUtilitiesPlugin } = plugins;

// import { dojo } from "./src/lib/theme/theme";

export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
    "./components/**/*.{js,ts,jsx,tsx,svelte}",
    "./node_modules/@GjorgjievskiMarko/dojo-components/**/*.{js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    extend: {
      // ...dojo,
    },
  },
  variants: {
    opacity: ["disabled"],
  },
  plugins: [plugin],
};
