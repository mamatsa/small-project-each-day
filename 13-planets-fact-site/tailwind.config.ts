import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      "dark-blue": "#070724",
      "dark-gray": "#38384F",
      gray: "#838391",
      mercury: "#419EBB",
      venus: "#EDA249",
      earth: "#6f2ed6",
      mars: "#D14C32",
      jupiter: "#D83A34",
      saturn: "#CD5120",
      uranus: "#1ec2a4",
      neptune: "#2d68f0",
    },
  },
  plugins: [],
};
export default config;
