/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html", 
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontSize: {
      'xs': ['0.75em', { lineHeight: '1rem' }], 
      'sm': ['0.875em', { lineHeight: '1.25rem' }],
      'base': ['1em', { lineHeight: '1.5rem' }],
      'lg': ['1.125em', { lineHeight: '1.75rem' }],
      'xl': ['1.25em', { lineHeight: '1.75rem' }],
      '2xl': ['1.5em', { lineHeight: '2rem' }],
      '3xl': ['1.875em', { lineHeight: '2.25rem' }],
      '4xl': ['2.25em', { lineHeight: '2.5rem' }],
      '5xl': ['3em', { lineHeight: '1rem' }],
      '6xl': ['3.75em', { lineHeight: '1rem' }],
      '7xl': ['4.5em', { lineHeight: '1rem' }],
      '8xl': ['6em', { lineHeight: '1rem' }],
      '9xl': ['8em', { lineHeight: '1rem' }],
    },
    extend: {},
  },
  plugins: [],
}