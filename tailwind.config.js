/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    colors: {
      white: "#FFFFFF",
      green: "#4CAF4F",
      light: "#EBECF3",
      dark: "#4D4D4D",
      red: "#BB3A69",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
  purge: ["./src/**/*.{html,js,jsx,ts,tsx}"],
};
