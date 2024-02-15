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
        mainColor: '#db2411',
        mainColor2: '#DB2411',
        rentOrange: '#fe541d', 
        footerColor: '#1B3E41',
        loginOrangeColor: '#FF4B2B',
        // footerColor: '#163336',

        // footerColor: '#222222', //black color
        // primary: '#222222',


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

