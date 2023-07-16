/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {},
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        purple: '#3f3cbb',
        midnight: '#121063',
        metal: '#565584',
        tahiti: '#3ab7bf',
        mapleorange: '#FFB72C',
        mapleclickedorange: '#BB7C00',
        mapleblue: '#1549FF',
        mapleskyblue: '#4DB8FF',
        maplegreen: '#76F062',
        maplelightgray: '#D9D9D9',
        mapledarkgrey: '#575757',
        maplered: '#FF0000',
        maplebtngrey: '#BEBEBE',
        maplegrey: 'AB9999',
      },
    },
  },
  plugins: [],
};
