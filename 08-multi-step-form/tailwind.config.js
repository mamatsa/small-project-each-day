/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    colors: {
      // Primary
      "marine-blue": "hsl(213, 96%, 18%)",
      "purplish-blue": "hsl(243, 100%, 62%)",
      "pastel-blue": "hsl(228, 100%, 84%)",
      "light-blue": "hsl(206, 94%, 87%)",
      "strawberry-red": "hsl(354, 84%, 57%)",
      // Neutral
      "cool-gray": "hsl(231, 11%, 63%)",
      "light-gray": "hsl(229, 24%, 87%)",
      magnolia: "hsl(217, 100%, 97%)",
      alabaster: "hsl(231, 100%, 99%)",
      white: "hsl(0, 0%, 100%)",
    },
    backgroundImage: {
      sidebar: "url('/src/images/bg-sidebar-desktop.svg')",
      "sidebar-mobile": "url('/src/images/bg-sidebar-mobile.svg')",
    },
    borderRadius: {
      none: "0",
      sm: "4px",
      md: "8px",
      lg: "10px",
      xl: "15px",
      full: "9999px",
    },
    extend: {},
  },
  plugins: [],
};
