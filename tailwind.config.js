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
      colors: {
        'custom-blue': '#2c3e50', // Customize the scrollbar thumb color
        'custom-gray': '#f1f1f1', // Customize the track color
      },
      
    },
  },
  plugins: [
  ],
}

