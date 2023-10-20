/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./styles.css", "./script.js"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-primary)"
      },
      textColor: {
        primary: "var(--color-primary-text)"
      }
    },
    dark: "class"
  },
  plugins: []
};
