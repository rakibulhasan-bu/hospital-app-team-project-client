/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'handwriting': ['Dancing Script', 'cursive']
      },
      colors: {
        primary: " #2E37A4",
        secondary: "#2e82fd",
        accent: "#A5D7E8",
        textBlack: "#3D4461",
        textDarkBlack: "#272B41",
        textGray: "#757575",
        grey: "#F0F0F0",
        background: "#edf0ff",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
