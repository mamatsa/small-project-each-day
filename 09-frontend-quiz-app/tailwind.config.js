/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        purple: "#A729F5",
        "dark-navy": "#313E51",
        navy: "#3B4D66",
        "gray-navy": "#626C7F",
        "light-blue": "#ABC1E1",
        "light-gray": "#F4F6FA",
        white: "#FFFFFF",
        green: "#26D782",
        red: "#EE5454",
      },
    },
  },
  plugins: [],
};
