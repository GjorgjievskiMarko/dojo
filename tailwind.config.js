/** @type {import('tailwindcss').Config} */
const twColors = require("tailwindcss/colors");

const px = (px) => `${px * 0.0625}rem`;

const dojo = {
  colors: {
    purple: {
      500: "#4C00C2",
      600: "#3c0098",
      900: "#0d054f",
    },
    grey: {
      900: "#0e0e0e",
      700: "#4d4d4d",
      200: "#e7e7e7",
      100: "#f1f1f1",
    },
    yellow: {
      500: "#ffe600",
      600: "#ffc800",
    },
    indigo: {
      500: "#6e28fa",
      600: "#6e28fa",
    },
    red: {
      500: "#ff3250",
      600: "#ff3250",
    },
    pink: {
      500: "#ff78d2",
      600: "#ff78d2",
    },
    green: {
      500: "00a9a6",
      600: "00a9a6",
    },
    orange: {
      500: "ff663b",
      600: "ff663b",
    },
    teal: {
      500: "#0cd0cd",
      600: "#00b9b6",
    },
    white: twColors.white,
    black: twColors.black,
    transparent: twColors.transparent,
  },
  spacing: {
    md: px(32),
  },
  boxShadow: {
    sm: "0px 2px 3px 0px rgb(19 0 49 / 0.10)",
    md: "0px 4px 4px 0px rgb(19 0 49 / 0.20)",
    lg: "0px 6px 9px 0px rgb(19 0 49 / 0.20)",
  },
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svelte}",
    "./node_modules/**/*.{js,ts,jsx,tsx,svelte}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        interactive: {
          primary: dojo.colors.purple[500],
          secondary: dojo.colors.white,
          thertiery: dojo.colors.transparent,
          info: dojo.colors.indigo[500],
          success: dojo.colors.green[500],
          warning: dojo.colors.orange[500],
          danger: dojo.colors.red[500],
          neutral: dojo.colors.grey[100],
        },
      },
      textColor: {
        interactive: {
          primary: dojo.colors.white,
          secondary: "",
          thertiery: "",
          info: "",
          success: "",
          warning: "",
          danger: "",
          neutral: dojo.colors.grey[100],
        },
      },
      borderColor: {
        interactive: {
          primary: dojo.colors.purple[600],
          secondary: "",
          thertiery: "",
          info: "",
          success: "",
          warning: "",
          danger: "",
          neutral: dojo.colors.grey[100],
        },
      },
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
