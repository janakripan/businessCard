/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'serif'], 
        poppins: ['Poppins', 'sans-serif'],
        public :['public sans', 'ssans-serif' ]
      },
      
    },
  },
  plugins: [],
}

