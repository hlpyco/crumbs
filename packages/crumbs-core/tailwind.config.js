/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '600px',
      sm: '960px',
      md: '1280px',
      lg: '1920px',
      xl: '2560px',
      //xxl: '>2560px',
    },

    extend: {
      fontFamily: {
        'default': ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  safelist: [
    "w-full",
    { pattern: /row/ },
    { pattern: /col/ },
    { pattern: /gap/ },
    { pattern: /flex/ },
    { pattern: /grid/ },
  ],
};
