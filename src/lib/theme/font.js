const fontWeight = {
  thin: "100",
  extralight: "200",
  light: "300",
  normal: "400",
  book: "450",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900",
};

const headings = {
  "heading-3xl": [
    "48px",
    {
      fontWeight: fontWeight.bold,
      lineHeight: "56px",
      letterSpacing: "-2px",
    },
  ],
  "heading-2xl": [
    "39px",
    {
      fontWeight: fontWeight.bold,
      lineHeight: "44px",
      letterSpacing: "-1px",
    },
  ],
  "heading-xl": [
    "31px",
    {
      fontWeight: fontWeight.bold,
      lineHeight: "36px",
      letterSpacing: "-1px",
    },
  ],
  "heading-lg": [
    "25px",
    {
      fontWeight: fontWeight.bold,
      lineHeight: "28px",
      letterSpacing: "-0,5px",
    },
  ],
  "heading-md": [
    "20px",
    {
      fontWeight: fontWeight.bold,
      lineHeight: "24px",
      letterSpacing: "-0,5px",
    },
  ],
  "heading-sm": [
    "16px",
    {
      fontWeight: fontWeight.bold,
      lineHeight: "20px",
    },
  ],
};

const bodyText = {
  "body-l": [
    "20px",
    {
      fontWeight: fontWeight.book,
      lineHeight: "28px",
    },
  ],
  "body-l-bold": [
    "20px",
    {
      fontWeight: fontWeight.bold,
      lineHeight: "28px",
    },
  ],
  "body-base": [
    "16px",
    {
      fontWeight: fontWeight.book,
      lineHeight: "24px",
    },
  ],
  "body-base-bold": [
    "16px",
    {
      fontWeight: fontWeight.bold,
      lineHeight: "24px",
    },
  ],
  "body-sm": [
    "14px",
    {
      fontWeight: fontWeight.book,
      lineHeight: "20px",
    },
  ],
  "body-sm-bold": [
    "14px",
    {
      fontWeight: fontWeight.bold,
      lineHeight: "20px",
    },
  ],
  "body-xs": [
    "12px",
    {
      fontWeight: fontWeight.book,
      lineHeight: "20px",
    },
  ],
  "body-xs-bold": [
    "12px",
    {
      fontWeight: fontWeight.bold,
      lineHeight: "20px",
    },
  ],
  "body-2xs": [
    "10px",
    {
      fontWeight: fontWeight.book,
      lineHeight: "12px",
    },
  ],
  "body-2xs": [
    "10px",
    {
      fontWeight: fontWeight.bold,
      lineHeight: "12px",
    },
  ],
  overline: [
    "10px",
    {
      fontWeight: fontWeight.bold,
      lineHeight: "10px",
      textTransform: "uppercase",
    },
  ],
};

const buttonText = {
  "button-lg": [
    "20px",
    {
      fontWeight: fontWeight.bold,
      lineHeight: "24px",
    },
  ],
  "button-rg": [
    "16px",
    {
      fontWeight: fontWeight.bold,
      lineHeight: "20px",
    },
  ],
  "button-sm": [
    "14px",
    {
      fontWeight: fontWeight.bold,
      lineHeight: "20px",
    },
  ],
};

export const fontSize = { ...headings, ...bodyText, ...buttonText };
