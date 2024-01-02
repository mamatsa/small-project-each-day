/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    colors: {
      white: "#FFFFFF",
      gray: {
        100: "#F4F4F4",
        200: "#E9E9E9",
        300: "#757575",
        400: "#3A3A3A",
        500: "#2D2D2D",
        600: "#1F1F1F",
        700: "#050505",
      },
      purple: "#A445ED",
      red: "#FF5252",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Lora", "serif"],
      mono: ["Inconsolata", "monospace"],
    },
  },
  plugins: [],
};
