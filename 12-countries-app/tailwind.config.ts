import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: {
        700: "hsl(209, 23%, 22%)",
        800: "hsl(207, 26%, 17%)",
        900: "hsl(200, 15%, 8%)",
      },
      white: "hsl(0, 0%, 100%)",
      "dark-gray": "hsl(0, 0%, 52%)",
      "light-gray": "hsl(0, 0%, 98%)",
    },
  },
  plugins: [],
};
export default config;
