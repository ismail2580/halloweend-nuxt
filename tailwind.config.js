/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
        lg: "4rem",
        // xl: "8rem",
        // "2xl": "10rem",
      },
    },
    extend: {
      colors: {
        primary: {
          100: "#06C2AE",
          200: "#02889B",
        },
        secondary: "#FF693A",
      },
    },
  },
  plugins: [],
};
