/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './pages/**/*.{html,js}',
  './components/**/*.{html,js}',
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      primary: 'Playfair Display',
      secondary: 'Lato',
    },
    container: {
      padding: {
        DEFAULT: '10px',
        // lg: '0',
      },
    },
    extend: {
      colors: {
        body: '#e5e5e5',
        dark: '#0a0909',
        grey: {
          DEFAULT: '#777876',
          100: '#e4e4e3',
        },
        accent: {
          DEFAULT: '#fe7634',
          hover: '#F55304',
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin'),
  ],
};
