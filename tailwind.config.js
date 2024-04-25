/** @type {import('tailwindcss').Config} */
const twColors = require("tailwindcss/colors");

import { dojo } from "./src/lib/theme";

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
      ...dojo,
      fontSize: {
        ["btn-lg"]: [
          "20px",
          {
            lineHeight: "24px",
            fontWeight: 500,
          },
        ],
      },
    },
  },
  variants: {
    opacity: ["disabled"],
  },
  plugins: [],
};
