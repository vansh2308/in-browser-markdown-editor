/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dprimary: "#151619",
        dsecondary: "#2b2d31",
        sidebar: "#1d1f22",
        dtext: "#fefefe",
        greytext: "#7c8187",
        orange: "#e36643",
        lprimary: "#ffffff",
        lsecondary: "#f5f5f5",
        ltext: "#35393f"
      }
    },
  },
  plugins: [],
}

