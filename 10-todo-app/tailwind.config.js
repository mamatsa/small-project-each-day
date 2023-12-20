/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    colors: {
      "bright-blue": "hsl(220, 98%, 61%)",
      "check-gradient": "hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",

      // Light Theme
      "l-very-light-gray": "hsl(0, 0%, 98%)",
      "l-very-light-grayish-blue": "hsl(236, 33%, 92%)",
      "l-light-grayish-blue": "hsl(233, 11%, 84%)",
      "l-dark-grayish-blue": "hsl(236, 9%, 61%)",
      "l-very-dark-grayish-blue": "hsl(235, 19%, 35%)",

      // Dark Theme
      "d-very-dark-blue": "hsl(235, 21%, 11%)",
      "d-very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
      "d-light-grayish-blue": "hsl(234, 39%, 85%)",
      "d-light-grayish-blue-hover": "hsl(236, 33%, 92%)",
      "d-dark-grayish-blue": "hsl(234, 11%, 52%)",
      "d-very-dark-grayish-blue": "hsl(233, 14%, 35%)",
      "d-very-dark-grayish-blue2": "hsl(237, 14%, 26%)",
    },
  },
  plugins: [],
};
