/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [
    'w-full',
    { pattern: /row/ },
    { pattern: /col/ },
    { pattern: /gap/ },
    { pattern: /flex/ },
    { pattern: /grid/ },
  ],
  theme: {
    screens: {
      xs: '600px',
      sm: '960px',
      md: '1280px',
      lg: '1920px',
      xl: '2560px',
      //xxl: null, // > 2560px
    },
    fontFamily: {
      sans: ['Nunito', 'sans'],
    },
    borderRadius: {
      none: '0',
      sm: '.125rem',
      default: '.25rem',
      lg: '.5rem',
      full: '9999px',
      circle: '50%',
    },
    extend: {},
  },
  plugins: [],
};
