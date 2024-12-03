/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#E7B986",
        secondary: "#312424",
        third: "#453434",
      },
      backgroundImage: {
        imgHero:
          "linear-gradient(90deg, rgba(231, 185, 134, 0.93) 28%, rgba(0, 0, 0, 0.13) 100%), url('/public/assets/images/background-hero.jpg')",
        imgAuth: "url('/public/assets/images/auth-background.webp')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto Slab"],
      },
    },
  },
  plugins: [],
};
