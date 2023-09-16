/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Darker Grotesque']
      },
      colors: {
        red: '#8B2C3D',
        blue: '#2B3452',
        white: '#F5F5F5',
        copyright: '#9FA1A1'
      }

  },
  plugins: [],
}
}