/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSameLine:true,
};

export default config;
