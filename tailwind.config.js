const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js, ts, jsx, tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        mono: ['Fira Code', ...fontFamily.mono]
      },
      colors: {
        'navy-lighter': '#112240',
        'navy-light': '#0a192f',
        'navy-dark': '#020c1b',
        'navy-green': '#64ffda',
        'slate-light': '#ccd6f6',
        slate: '#8892b0',
        'mac-cls': '#FF605C',
        'mac-min': '#FFBD44',
        'mac-max': '#00CA4E'
      },
      fontSize: {
        '10xl': '10rem'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')]
};
