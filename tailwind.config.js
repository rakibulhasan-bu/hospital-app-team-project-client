/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: " #04235A",
        secondary: "#2e82fd",
        accent: "#A5D7E8",
        textBlack: "#3D4461",
        textGray: "#6B7280",
        grey: "#D8D8D8",
      },
    },
  },
  plugins: [],
};
