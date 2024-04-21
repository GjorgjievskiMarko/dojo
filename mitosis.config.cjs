/** @type {import('@builder.io/mitosis').MitosisConfig} */
module.exports = {
  files: "src/**",
  options: {
    react: {
      typescript: true,
    },
    svelte: {
      api: "composition",
      typescript: true,
    },
  },
  targets: ["svelte", "react"],
};
