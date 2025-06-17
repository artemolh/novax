module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B6FF5C', // светло-зелёный из макета
        accent: '#A3A3FF', // фиолетовый акцент
        dark: '#181A1B',   // тёмный фон
        light: '#F7F7F7',  // светлый фон
        gray: '#EDEDED',   // светло-серый
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 