/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    colors: {
      purple: "#A729F5",
      "light-purple": "#F6E7FF",
      "dark-navy": "#313E51",
      navy: "#3B4D66",
      "gray-navy": "#626C7F",
      "light-blue": "#ABC1E1",
      "light-gray": "#F4F6FA",
      white: "#FFFFFF",
      "success-green": "#26D782",
      red: "#EE5454",
    },
    extend: {
      backgroundImage: {
        "pattern-mobile":
          "url('/src/images/pattern-background-mobile-light.svg')",
        "pattern-tablet":
          "url('/src/images/pattern-background-tablet-light.svg')",
        "pattern-desktop":
          "url('/src/images/pattern-background-desktop-light.svg')",

        "pattern-mobile-dark":
          "url('/src/images/pattern-background-mobile-dark.svg')",
        "pattern-tablet-dark":
          "url('/src/images/pattern-background-tablet-dark.svg')",
        "pattern-desktop-dark":
          "url('/src/images/pattern-background-desktop-dark.svg')",
      },
    },
  },
  plugins: [],
};
