/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Arquivo HTML principal
    './assets/css/**/*.css', // Todos os arquivos CSS dentro da pasta assets/css
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Define a fonte Roboto
      },
    },
  },
  plugins: [],
};