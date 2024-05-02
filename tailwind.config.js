/** @type {import('tailwindcss').Config} */
// const plugin = require("./src/lib/theme/plugin");

import plugin from "./src/lib/theme/plugin";

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
  safelist: ["text-2xl", "text-h-md"],
  variants: {
    opacity: ["disabled"],
  },
  plugins: [...plugin],
};
