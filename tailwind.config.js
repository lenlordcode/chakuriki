import plugin from "tailwindcss/plugin.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },

    screens: {
      xs: {'max': '420px'},     // экраны до 475 пикселей шириной
      sm: {'max': '640px'},     // экраны от 475px до 640px
      md: '768px',     // экраны от 640px до 768px
      lg: '1024px',    // экраны от 768px до 1024px
      xl: '1280px',    // экраны от 1024px до 1280px
      '2xl': '1536px', // экраны от 1280px до 1536px
    },
    extend: {
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
      })
    })
  ],
}

