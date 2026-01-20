/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F3EE",
        "dark-brown": "#3A2A1E",
        rust: "#C45A2A",
        tan: "#E6D6C3",
        "light-gray": "#8B8B8B",
      },
      fontFamily: {
        "little-amps": ["LittleAmps", "cursive"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
