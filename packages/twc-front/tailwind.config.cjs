/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '767px'},
      'md': {'max': '1023px'},
      'lg': {'max': '1279px'},
      'xl': {'max': '1535px'},
      '2xl':{'min': '1536px'},
    },
    extend: {
      colors: {
      }      
    },
  },
  plugins: [],
}
