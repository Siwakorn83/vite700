/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: '#D99C52',
        primaryContent: '#323C73',
        primarySubcontent: '#5061BF',
        primaryBase: '#323C73',
        primaryAccent: '#667BF2',
        primaryBg: '#F2D5C4',
      }
    },
  },
  plugins: [],
}

