/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'cardHeader':'url(https://img.freepik.com/premium-vector/abstract-stripe-pattern-with-blinked-star-light-gradient-color_206846-1822.jpg)',
        'card':'url(https://img.freepik.com/free-vector/yellow-background-with-halftone-lines-design_1017-30148.jpg)',
        'pokeball':'url(https://www.clipartmax.com/png/small/190-1908923_open-pokeball-clip-art-pokeball-hd-png.png)',
      },
    },
    fontFamily:{
      'vibes':['Great Vibes'],
      'roboto':['Roboto'],
    }
  },
  plugins: [],
}
