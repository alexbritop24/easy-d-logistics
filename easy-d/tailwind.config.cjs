/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f172a",
          light: "#1e293b",
          softer: "#020617",
        },
        accent: {
          DEFAULT: "#22c55e",
          soft: "#4ade80",
        },
      },
    },
  },
  plugins: [],
};