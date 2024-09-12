// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff477e',  // Rosa Vibrante
        secondary: '#ffb347', // Laranja Vivo
        support: '#47c1ff',  // Azul Claro
        neutral: {
          100: '#f0f0f0', // Cinza Claro
          800: '#333333', // Preto para contraste
        },
        gray: {
          100: '#f0f0f0',
          900: '#333333',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],  // Adiciona Poppins como fonte principal
      },
    },
  },
  plugins: [],
}
