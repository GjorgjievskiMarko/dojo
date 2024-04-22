const px = (px: number) => `${px * 0.0625}rem`;

export const dojo = {
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
    white: "white",
    black: "black",
    transparent: "transparent",
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
