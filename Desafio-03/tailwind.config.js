/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#8257E5",
          light: "#9674E5",
        },
        secondary: {
          default: "#3C3748",
          light: "#6A617F",
        },
      }
    },
  },
  plugins: [],
}
