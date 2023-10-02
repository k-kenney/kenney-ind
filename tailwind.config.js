/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        fontFamily: {
          special: ['Darker Grotesque'],
          body: ['Montserrat']
        },
        colors: {
          red: '#B21030',
          blue: '#2B3452',
          white: '#F5F5F5',
          copyright: '#9FA1A1',
          black: '#323232'
        },
        lineHeight: {
          'extra-loose': '2.5',
          '12': '3.5rem',
          '15': '4.5rem',
        },
        borderWidth: {
          '1': '0.5px'
        }
    },
  },
  plugins: [],
}