/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#004D00",
        snow: "#F7F7F7",
        yellow: "#FFD600",
      },
      fontFamily: {
        header: "Oregano, ui-serif",
        body: "Inter, ui-sans-serif",
      },
    },
  },
  plugins: [],
};
