/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       'retink-primary-light': '#F1EDFD',
       'retink-primary': '#5E3EBA',
       'retink-deep': '#4D4959',
       'retink-light-2': '#EAE4FC',
       'retink-light-active': '#D4C8F8'
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif']
      },
      backgroundImage: {
        'hero-bg': "url('/public/assets/hero-bg.png')",
        'hero-bg-mobile': "url('/public/assets/hero-bg-mobile.png')",
        'radial': 'radial-gradient(86.71% 86.73% at 50% 45.52%, #FFF 39.72%, #DCD1FF 100%);'
      },
      screens: {
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}

