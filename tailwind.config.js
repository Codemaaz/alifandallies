/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#569B9B",
        secondary : "#FACC15",
        lighBackground: "#F1F5F9",
      },
    },
  },
  plugins: [],
};
