/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#6B3CC9',
        customBackground: '#FAF8FF',
        customGray: '#6F6C90',
        customOrange: '#F28D35',
      },
      gradientColorStops: {
        'teal-green': '#1CBDDD, #4DCA79',
      },
    },
  },
  plugins: [],
}

