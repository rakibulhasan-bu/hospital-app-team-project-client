/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { nextui } = require("@nextui-org/react");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'handwriting': ['Dancing Script', 'cursive']
      },
      colors: {
        primary: 'var(--primary)',
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        textBlack: "var(--textBlack)",
        textDarkBlack: "var(--textDarkBlack)",
        textGray: "var(--textGray)",
        grey: "var(--grey)",
        background: "var(--background)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
