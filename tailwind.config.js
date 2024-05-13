/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html", 
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontSize: {
      'xs': ['0.75em', { lineHeight: '.8rem' }], 
      'sm': ['0.875em', { lineHeight: '1rem' }],
      'base': ['1em', { lineHeight: '1.5em' }],
      'lg': ['1.125em', { lineHeight: '1.75em' }],
      'xl': ['1.25em', { lineHeight: '1.75em' }],
      '2xl': ['1.5em', { lineHeight: '2em' }],
      '3xl': ['1.875em', { lineHeight: '2.25em' }],
      '4xl': ['2.25em', { lineHeight: '2.5em' }],
      '5xl': ['3em', { lineHeight: '1em' }],
      '6xl': ['3.75em', { lineHeight: '1em' }],
      '7xl': ['4.5em', { lineHeight: '.85em' }],
      '8xl': ['6em', { lineHeight: '.85em' }],
      '9xl': ['8em', { lineHeight: '.85em' }],
    },
    extend: {
      padding: {
        '0': '0em',
        'px': '0.0625em', 
        '0.5': '0.125em',
        '1': '0.25em',
        '1.5': '0.375em',
        '2': '0.5em',
        '2.5': '0.625em',
        '3': '0.75em',
        '3.5': '0.875em',
        '4': '1em',
        '5': '1.25em',
        '6': '1.5em',
        '7': '1.75em',
        '8': '2em',
        '9': '2.25em',
        '10': '2.5em',
        '11': '2.75em',
        '12': '3em',
        '14': '3.5em',
        '16': '4em',
        '20': '5em',
        '24': '6em',
        '28': '7em',
        '32': '8em',
        '36': '9em',
        '40': '10em',
        '44': '11em',
        '48': '12em',
        '52': '13em',
        '56': '14em', 
        '60': '15em',
        '64': '16em',
        '72': '18em',
        '80': '20em',
        '96': '24em'
      },
      margin: {
        '0': '0em',
        'px': '0.0625em',
        '0.5': '0.125em',
        '1': '0.25em',
        '1.5': '0.375em',
        '2': '0.5em',
        '2.5': '0.625em',
        '3': '0.75em',
        '3.5': '0.875em',
        '4': '1em',
        '5': '1.25em',
        '6': '1.5em',
        '7': '1.75em',
        '8': '2em',
        '9': '2.25em',
        '10': '2.5em',
        '11': '2.75em',
        '12': '3em',
        '14': '3.5em',
        '16': '4em',
        '20': '5em',
        '24': '6em',
        '28': '7em',
        '32': '8em',
        '36': '9em',
        '40': '10em',
        '44': '11em',
        '48': '12em',
        '52': '13em',
        '56': '14em',
        '60': '15em',
        '64': '16em',
        '72': '18em',
        '80': '20em',
        '96': '24em'
      },
    },
  },
  plugins: [],
}