const fontWeight = {
  thin: "100",
  extralight: "200",
  light: "300",
  book: "400",
  normal: "450",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900",
};

export const fontSize = {
  ["overline"]: [
    "10px",
    {
      lineHeight: "10px",
      fontWeight: fontWeight.bold,
    },
  ],
  ["2xs"]: [
    "10px",
    {
      lineHeight: "12px",
      fontWeight: fontWeight.book,
    },
  ],
  ["xs"]: [
    "12px",
    {
      lineHeight: "20px",
      fontWeight: fontWeight.book,
    },
  ],
  ["sm"]: [
    "14px",
    {
      lineHeight: "20px",
      fontWeight: fontWeight.book,
    },
  ],
  ["base"]: [
    "16px",
    {
      lineHeight: "24px",
      fontWeight: fontWeight.book,
    },
  ],
  ["lg"]: [
    "20px",
    {
      lineHeight: "28px",
      fontWeight: fontWeight.book,
    },
  ],

  ["h-sm"]: [
    "16px",
    {
      lineHeight: "20px",
      fontWeight: fontWeight.bold,
    },
  ],
  ["h"]: [
    "20px",
    {
      lineHeight: "24px",
      letterSpacing: "-0.5px",
      fontWeight: fontWeight.bold,
    },
  ],
  ["h-lg"]: [
    "25px",
    {
      lineHeight: "28px",
      letterSpacing: "-0.5px",
      fontWeight: fontWeight.bold,
    },
  ],
  ["h-xl"]: [
    "31px",
    {
      lineHeight: "36px",
      letterSpacing: "-1px",
      fontWeight: fontWeight.bold,
    },
  ],
  ["h-2xl"]: [
    "39px",
    {
      lineHeight: "44px",
      letterSpacing: "-1px",
      fontWeight: fontWeight.bold,
    },
  ],
  ["h-3xl"]: [
    "48px",
    {
      lineHeight: "56px",
      letterSpacing: "-2px",
      fontWeight: fontWeight.bold,
    },
  ],

  ["btn-sm"]: [
    "14px",
    {
      lineHeight: "20px",
      fontWeight: fontWeight.bold,
    },
  ],
  ["btn"]: [
    "16px",
    {
      lineHeight: "20px",
      fontWeight: fontWeight.bold,
    },
  ],
  ["btn-lg"]: [
    "20px",
    {
      lineHeight: "24px",
      fontWeight: fontWeight.bold,
    },
  ],
};

export const dojo = {
  colors: {
    grey: {
      0: "#EFF2F4",
      5: "#E5EAED",
      20: "#D3D8E1",
      35: "#AAB3BF",
      50: "#798291",
      70: "#444E5D",
      80: "#242C38",
      90: "#1A212C",
    },
    purple: {
      0: "#DAD2FF",
      60: "#4C00C2",
      80: "#3C0098",
      90: "#32007E",
      100: "#130031",
    },
    teal: {
      10: "#BDFAF9",
      50: "#0CD0CD",
      60: "#00B9B6",
    },
    green: {
      10: "#C8FFDD",
      30: "#19AC51",
      50: "#0E7936",
    },
    blue: {
      50: "#3994FF",
      60: "#2781EA",
    },
    red: {
      10: "#FFC8CD",
      30: "#FC484C",
      40: "#DD3337",
      50: "#B71E21",
    },
    yellow: {
      10: "#FFE9AB",
      30: "#FFCA30",
      50: "#A95201",
    },
    orange: {
      30: "#FF8A00",
    },
    salmon: {
      30: "#FF808C",
    },
    white: "#FFFFFF",
    black: "#000000",
  },
  spacing: {
    "3xs": "4px",
    "2xs": "8px",
    xs: "12px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px",
    "2xl": "48px",
    "3xl": "56px",
  },
  boxShadow: {
    "1": "0px 2px 3px rgba(19, 0, 49, 0.1)",
    "2": "0px 4px 4px rgba(19, 0, 49, 0.2)",
    "3": "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  zIndex: {
    basic: "0",
    overlay: "10",
    toast: "20",
    modal: "30",
    "modal-2": "40",
    "modal-3": "50",
  },
  borderWidth: {
    6: "6px",
  },
};
