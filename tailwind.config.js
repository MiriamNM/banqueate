/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    colors: {
      green: "#4CA349",
      light: "#EBECF3",
      dark: "#081421",
      brown: "#3B3D3C",
      red: "#BB3A69",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
  purge: ["./src/**/*.{html,js,jsx,ts,tsx}"],
};
