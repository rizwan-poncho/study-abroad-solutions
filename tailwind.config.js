/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/tw-elements/js/**/*.js",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],

  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    require("tw-elements/plugin.cjs"),
    require("tw-elements-react/dist/plugin.cjs"),
  ],
};
