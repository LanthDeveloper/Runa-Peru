/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html", // Incluye todos los archivos HTML en el directorio actual y sus subdirectorios
    "./src/**/*.{js,jsx}", // Incluye todos los archivos JS y JSX dentro de la carpeta src y sus subdirectorios
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

