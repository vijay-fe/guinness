/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'gotham' : ["goatham65"]
      },
      keyframes: {
        openmenu: {
        // initial position
            '0%': {left:  '-50vw'},
        // final position
            '100%': {left:  '0px'}
        },
        closemenu: {
        // initial position
            '0%': {left:  '0px'},
        // final position
            '100%': {left:  '-50vw'}
        },
    }
    },
  },
  plugins: [],
}

