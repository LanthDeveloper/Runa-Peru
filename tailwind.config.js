/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html", 
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontSize: {
      'xs': ['0.75em', { lineHeight: '1em' }], 
      'sm': ['0.875em', { lineHeight: '1.25em' }],
      'base': ['1em', { lineHeight: '1.5em' }],
      'lg': ['1.125em', { lineHeight: '1.75em' }],
      'xl': ['1.25em', { lineHeight: '1.75em' }],
      '2xl': ['1.5em', { lineHeight: '2em' }],
      '3xl': ['1.875em', { lineHeight: '2.25em' }],
      '4xl': ['2.25em', { lineHeight: '2.5em' }],
      '5xl': ['3em', { lineHeight: '1em' }],
      '6xl': ['3.75em', { lineHeight: '1em' }],
      '7xl': ['4.5em', { lineHeight: '1em' }],
      '8xl': ['6em', { lineHeight: '1em' }],
      '9xl': ['8em', { lineHeight: '1em' }],
    },
    extend: {},
  },
  plugins: [],
}