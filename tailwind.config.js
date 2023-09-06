/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
  plugins: [],
};
