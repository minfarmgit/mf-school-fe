/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          1: '#2F6FFF',
          2: '#5487ff',
        },
        white: {
          1: '#FFFFFF',
          2: '#ececec'
        },
        black: {
          1: '#15182C',
          3: '#0B0B1566',
          4: '#EDF0F5',
        },
      },
    },
  },
  plugins: [],
}

