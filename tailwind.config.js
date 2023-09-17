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
          red: '#DC143C',
          blue: '#2B3452',
          white: '#F5F5F5',
          copyright: '#9FA1A1'
        },
        lineHeight: {
          'extra-loose': '2.5',
          '12': '3.5rem',
          '15': '4.5rem',
        }
    },
  },
  plugins: [],
}