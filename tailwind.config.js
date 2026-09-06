/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        keyA: "#111111",
        keyB: "#222222",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
