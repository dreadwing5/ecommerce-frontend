/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tw-elements/dist/plugin"),
    require("@tailwindcss/aspect-ratio"),
  ],
  variants: {
    display: ["group-hover"],
  },
};
