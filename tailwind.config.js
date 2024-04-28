/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage : {
          "login-bg" : "url('../assets/images/background_image.jpg')"
        },
        customScrollbar: {
          '::-webkit-scrollbar': {
            width: '5px',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: '#a0a0a0',
          },
        },
      },
    },
    plugins: [],
  }
  
  