const plugin = require("tailwindcss/plugin");
const theme = require("./theme");

const dojoPlugin = plugin(function ({ addUtilities }) {
  // Load specific properties from theme configuration
  const { colors, spacing, boxShadow, zIndex, borderWidth, fontSize } = theme;

  const utilities = {};

  // Helper function to add properties to utilities object
  const addPropertyUtilities = (propertyValues, utilityPrefix, cssProperty) => {
    Object.keys(propertyValues).forEach((key) => {
      const value = propertyValues[key];
      utilities[`.${utilityPrefix}-${key}`] = { [cssProperty]: value };
    });
  };

  // Colors (text, background, border)
  Object.keys(colors).forEach((color) => {
    const colorSet = colors[color];
    if (typeof colorSet === "object") {
      Object.keys(colorSet).forEach((shade) => {
        const colorValue = colorSet[shade];
        const suffix = `${color}-${shade}`;
        utilities[`.text-${suffix}`] = { color: colorValue };
        utilities[`.bg-${suffix}`] = { backgroundColor: colorValue };
        utilities[`.border-${suffix}`] = { borderColor: colorValue };
      });
    } else {
      const colorValue = colorSet;
      utilities[`.text-${color}`] = { color: colorValue };
      utilities[`.bg-${color}`] = { backgroundColor: colorValue };
      utilities[`.border-${color}`] = { borderColor: colorValue };
    }
  });

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
  });
  addPropertyUtilities(spacing, "p", "padding");

  // Box Shadow
  addPropertyUtilities(boxShadow, "shadow", "boxShadow");

  // Z-Index
  addPropertyUtilities(zIndex, "z", "zIndex");

  // Border Width
  addPropertyUtilities(borderWidth, "border", "borderWidth");

  // Font Size
  addPropertyUtilities(fontSize, "text", "fontSize");

  addUtilities(utilities, [
    "responsive",
    "hover",
    "active",
    "disabled",
    "focus",
  ]);
});

module.exports = dojoPlugin;
