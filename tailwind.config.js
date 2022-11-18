/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        popup: {
          "0%": { width: 0, height: 0 },
          "100%": { width: "35%", height: "cover" },
        },
        fade: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        pulse: "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
        popup: "popup 0.2s ease-in-out",
        fade: "fade 0.3s ease-in-out",
      },
      fontFamily: {
        code: ['"Source Code Pro"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
