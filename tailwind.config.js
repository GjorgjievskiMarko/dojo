/** @type {import('tailwindcss').Config} */
const twColors = require("tailwindcss/colors");

import { dojo } from "./src/lib/theme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
    "./components/**/*.{js,ts,jsx,tsx,svelte}",
    "./node_modules/**/*.{js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        inverted: dojo.colors.white,
        neutral: {
          DEFAULT: dojo.colors.grey[100],
          more: dojo.colors.grey[200],
        },
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          more: dojo.colors.purple[600],
          dark: dojo.colors.purple[900],
        },
        info: {
          DEFAULT: twColors.blue[500],
          more: twColors.blue[600],
        },
        success: {
          DEFAULT: twColors.green[500],
          more: twColors.green[600],
        },
        warning: {
          DEFAULT: twColors.orange[500],
          more: twColors.orange[600],
        },
        danger: {
          DEFAULT: twColors.red[500],
          more: twColors.red[600],
        },
      },
      spacing: {
        ...dojo.spacing,
      },
    },
    boxShadow: {
      ...dojo.boxShadow,
    },
  },
  variants: {
    opacity: ["disabled"],
  },
  plugins: [],
};
