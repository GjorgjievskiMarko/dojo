import { fontSize } from "./font";

export default {
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
      "100a10": "#1300311a",
      "100a20": "#13003033",
      "100a30": "#1300304d",
      "100a50": "#12002e80",
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
    whitea50: "#FFFFFF80",
    black: "#000000",
  },
  spacing: {
    0: "0px",
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
    1: "0px 2px 3px rgba(19, 0, 49, 0.1)",
    2: "0px 4px 4px rgba(19, 0, 49, 0.2)",
    3: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  zIndex: {
    basic: "0",
    overlay: "10",
    toast: "20",
    modal: "30",
    "modal-2": "40",
    "modal-3": "50",
  },
  borderRadius: {
    none: "0",
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    round: "999px",
  },
  borderWidth: {
    6: "6px",
  },
  borderStyle: {
    solid: "solid",
  },
  fontSize: fontSize,
};
