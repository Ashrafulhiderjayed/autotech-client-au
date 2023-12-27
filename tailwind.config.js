/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // primary: 'Crimson', //eta toy car er color
        // primary: '#fe541d', //eta orange type car rent website er
        rentOrange: '#fe541d', 
        primary: '#222222',
        lightWhite: '#999999',

        primary2: '#d81b60',
        lightRed: '#FF0066',
        customNavy: '#38A2D7',
      },
      fontFamily:{
        CreteRound: ['Crete Round', 'serif'],
      },
      backgroundImage:{
        'bannerImg': "url('https://i.ibb.co/M7WmCxh/banner.jpg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

