const plugin = require("tailwindcss/plugin");
import theme from "./theme";

const dojoPlugin = plugin(function ({ matchUtilities, addUtilities }) {
  // Load specific properties from theme configuration
  const { colors, spacing, boxShadow, zIndex, borderWidth, borderRadius } =
    theme;

  const utilities = {};

  const colorValues = Object.keys(colors).reduce((acc, key) => {
    const value = colors[key];
    if (typeof value === "string") {
      acc[key] = value;
    } else if (typeof value === "object") {
      Object.keys(value).forEach((shade) => {
        acc[`${key}-${shade}`] = value[shade];
      });
    }
    return acc;
  }, {});

  // Helper function to add properties to utilities object
  const addPropertyUtilities = (propertyValues, utilityPrefix, cssProperty) => {
    Object.keys(propertyValues).forEach((key) => {
      const value = propertyValues[key];
      utilities[`.${utilityPrefix}-${key}`] = { [cssProperty]: value };
    });
  };

  // Spacing (margin and padding)
  Object.keys(spacing).forEach((key) => {
    const value = spacing[key];

    utilities[`.mt-${key}`] = { marginTop: value };
    utilities[`.mr-${key}`] = { marginRight: value };
    utilities[`.mb-${key}`] = { marginBottom: value };
    utilities[`.ml-${key}`] = { marginLeft: value };
    utilities[`.mx-${key}`] = { marginLeft: value, marginRight: value };
    utilities[`.my-${key}`] = { marginTop: value, marginBottom: value };
    utilities[`.p-${key}`] = { padding: value };
    utilities[`.pt-${key}`] = { paddingTop: value };
    utilities[`.pr-${key}`] = { paddingRight: value };
    utilities[`.pb-${key}`] = { paddingBottom: value };
    utilities[`.pl-${key}`] = { paddingLeft: value };
    utilities[`.px-${key}`] = { paddingLeft: value, paddingRight: value };
    utilities[`.py-${key}`] = { paddingTop: value, paddingBottom: value };
    utilities[`.gap-${key}`] = { gap: value };
    utilities[`.gap-x-${key}`] = { columnGap: value };
    utilities[`.gap-y-${key}`] = { rowGap: value };
  });

  // addPropertyUtilities(spacing, "p", "padding");
  addPropertyUtilities(colorValues, "bg", "backgroundColor");

  addPropertyUtilities(colorValues, "bg", "backgroundColor");
  addPropertyUtilities(colorValues, "border", "borderColor");
  addPropertyUtilities(colorValues, "text", "color");

  addPropertyUtilities(borderRadius, "rounded", "borderRadius");

  // Box Shadow
  addPropertyUtilities(boxShadow, "shadow", "boxShadow");

  // Z-Index
  addPropertyUtilities(zIndex, "z-index", "zIndex");

  // Font Size
  // addFontSizeUtilities(fontSize, "text", "fontSize");
  // addFontSizeUtilities(fontSize, "line", "lineHeight");

  addUtilities(utilities, [
    "responsive",
    "hover",
    "active",
    "disabled",
    "focus",
  ]);

  matchUtilities(utilities, [
    "responsive",
    "hover",
    "active",
    "disabled",
    "focus",
  ]);
});

const fontSizePlugin = plugin(function ({ addUtilities }) {
  const { fontSize } = theme;
  const newUtilities = {};

  Object.keys(fontSize).forEach((key) => {
    const value = fontSize[key];
    const [size, properties] = Array.isArray(value) ? value : [value];
    newUtilities[`.text-${key}`] = {
      fontSize: size,
      ...(properties || {}),
    };
  });

  addUtilities(newUtilities, ["responsive"]);
});

const boxShadowPlugin = plugin(function ({ addUtilities }) {
  const { boxShadow } = theme;

  const newUtilities = Object.keys(boxShadow).reduce((acc, key) => {
    const utility = {};
    utility[`.elevation-${key}`] = {
      boxShadow: boxShadow[key],
    };
    return { ...acc, ...utility };
  }, {});

  addUtilities(newUtilities, ["responsive"]);
});

module.exports = [dojoPlugin, fontSizePlugin, boxShadowPlugin];
