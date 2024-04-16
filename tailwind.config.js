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
      90: "#0e0e0e",
      70: "#4d4d4d",
      20: "#c1c1c1",
      10: "#d8d8d8",
      0: "#eff2f4",
    },
    yellow: {
      500: "#ffe600",
      600: "#ffc800",
    },
    indigo: {
      500: "#6e28fa",
    },
    red: {
      500: "#ff3250",
    },
    pink: {
      500: "#ff78d2",
    },
    green: {
      500: "00a9a6",
    },
    orange: {
      500: "ff663b",
    },
    teal: {
      500: "#0cd0cd",
      600: "#00b9b6",
    },
    white: twColors.white,
    black: twColors.black,
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
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,svelte}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: dojo.colors.purple[500],
          shade: dojo.colors.purple[600],
          foreground: dojo.colors.white,
        },
        secondary: dojo.colors.red[500],
        accent: {
          DEFAULT: dojo.colors.teal[500],
          shade: dojo.colors.teal[600],
          foreground: dojo.colors.purple[500],
        },
        neutral: {
          0: dojo.colors.grey[0],
          10: dojo.colors.grey[10],
          20: dojo.colors.grey[20],
          70: dojo.colors.grey[70],
          90: dojo.colors.grey[90],
        },
        white: dojo.colors.white,
        black: dojo.colors.black,
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
