/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        GreenColor: '#74871d'
      },
      fontFamily: {
        myText: [ "Caveat", "cursive"]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

