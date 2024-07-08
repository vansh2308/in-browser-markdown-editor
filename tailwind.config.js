/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dprimary: "#151619",
        dsecondary: "#2b2d31",
        dtext: "#fefefe",
        orange: "#e36643",
        lprimary: "#ffffff",
        lsecondary: "#f5f5f5",
        ltext: "#35393f"
      }
    },
  },
  plugins: [],
}

