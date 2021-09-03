const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js, ts, jsx, tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        "10xl": "10rem",
      },
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
      },
      colors: {
        "dark-primary": "#171717",
        "dark-muted": "#242424",
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/img/bg-pattern.jpg')",
      }),
    },
  },
  variants: {},
  plugins: [],
};
