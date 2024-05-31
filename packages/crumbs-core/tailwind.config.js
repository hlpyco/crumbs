/** @type {import('tailwindcss').Config} */
const FONT_FAMILY = 'Nunito';

module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    screens: {
      xs: '600px',
      sm: '960px',
      md: '1280px',
      lg: '1920px',
      xl: '2560px',
      xxl: '>2560px',
    },

    typography: {
      'h1': {
        css: {
          'font-weight': '400',
          'font-size': '5rem',
          'font-family': FONT_FAMILY,
        },
      },

      'h2': {
        css: {
          'font-weight': '400',
          'font-size': '3.75rem',
          'font-family': FONT_FAMILY,
        },
      },

      'h3': {
        css: {
          'font-weight': '700',
          'font-size': '2.5rem',
          'font-family': FONT_FAMILY,
        },
      },

      'h4': {
        css: {
          'font-weight': '700',
          'font-size': '1.625rem',
          'font-family': FONT_FAMILY,
        },
      },

      'h5': {
        css: {
          'font-weight': '700',
          'font-size': '1.375rem',
          'font-family': FONT_FAMILY,
        },
      },

      'h6': {
        css: {
          'font-weight': '700',
          'font-size': '1.25rem',
          'font-family': FONT_FAMILY,
        },
      },

      'subtitle-1': {
        css: {
          'font-weight': '400',
          'font-size': '1.375rem',
          'font-family': FONT_FAMILY,
        },
      },

      'subtitle-2': {
        css: {
          'font-weight': '700',
          'font-size': '1.125rem',
          'font-family': FONT_FAMILY,
        },
      },

      'body-1': {
        css: {
          'font-weight': '400',
          'font-size': '1.125rem',
          'font-family': FONT_FAMILY,
        },
      },

      'body-2': {
        css: {
          'font-weight': '400',
          'font-size': '0.875rem',
          'font-family': FONT_FAMILY,
        },
      },
      
      'button': {
        css: {
          'font-weight': '400',
          'font-size': '0.875rem',
          'font-family': FONT_FAMILY,
        },
      },

      'label': {
        css: {
          'font-weight': '400',
          'font-size': '0.8125rem',
          'font-family': FONT_FAMILY,
        },
      },
    },

    extend: {
      fontFamily: {
        'default': [FONT_FAMILY, 'sans-serif']
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography') ({
      className: 'crumbs',
    }),
  ],

  safelist: [
    "w-full",
    { pattern: /crumbs/ },
    { pattern: /gap/ },
    { pattern: /flex/ },
    { pattern: /basis/ },
    { pattern: /order/ },
  ],
};
