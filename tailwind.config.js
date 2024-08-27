/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      poppins: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        // primary: "#E6C744",
        secondary: "#C2C8DA",
        black: "#000000",
        white: "#fff",
        yellow: "#facc15",
      },
      screens: {
        sm: "480px",
      },
      content: {
        oval: 'url("../images/banner-image-2.png")',
      },
    },
  },
  plugins: [],
};

