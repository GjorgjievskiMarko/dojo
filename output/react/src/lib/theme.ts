const px = (px: number) => `${px * 0.0625}rem`;
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
      90: "#1A212C"
    },
    purple: {
      0: "#DAD2FF",
      60: "#4C00C2",
      80: "#3C0098",
      90: "#32007E",
      100: "#130031"
    },
    teal: {
      10: "#BDFAF9",
      50: "#0CD0CD",
      60: "#00B9B6"
    },
    green: {
      10: "#C8FFDD",
      30: "#19AC51",
      50: "#0E7936"
    },
    blue: {
      50: "#3994FF",
      60: "#2781EA"
    },
    red: {
      10: "#FFC8CD",
      30: "#FC484C",
      40: "#DD3337",
      50: "#B71E21"
    },
    yellow: {
      10: "#FFE9AB",
      30: "#FFCA30",
      50: "#A95201"
    },
    orange: {
      30: "#FF8A00"
    },
    salmon: {
      30: "#FF808C"
    },
    white: "#FFFFFF",
    black: "#000000"
  },
  spacing: {
    md: px(32)
  },
  boxShadow: {
    sm: "0px 2px 3px 0px rgb(19 0 49 / 0.10)",
    md: "0px 4px 4px 0px rgb(19 0 49 / 0.20)",
    lg: "0px 6px 9px 0px rgb(19 0 49 / 0.20)"
  }
}